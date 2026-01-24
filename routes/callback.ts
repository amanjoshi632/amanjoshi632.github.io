import { Handlers } from "$fresh/server.ts";

/**
 * GitHub OAuth - Step 2: Handle callback and exchange code for token
 * GitHub redirects here after user authorizes
 */

const GITHUB_CLIENT_ID = Deno.env.get("GITHUB_CLIENT_ID") || "";
const GITHUB_CLIENT_SECRET = Deno.env.get("GITHUB_CLIENT_SECRET") || "";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return new Response("Missing code parameter", { status: 400 });
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code: code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return new Response(`OAuth error: ${tokenData.error_description}`, {
          status: 400,
        });
      }

      // Return HTML that posts the token back to Decap CMS
      // Decap CMS opens this in a popup and listens for postMessage
      const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authorization Complete</title>
</head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("receiveMessage %o", e);

        // Send the token to the parent window (Decap CMS)
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({
            token: tokenData.access_token,
            provider: "github",
          })}',
          e.origin
        );

        window.close();
      }

      window.addEventListener("message", receiveMessage, false);

      // Notify opener that we're ready
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
  <p>Authorizing with GitHub...</p>
</body>
</html>
      `;

      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.error("OAuth error:", error);
      return new Response("OAuth failed", { status: 500 });
    }
  },
};
