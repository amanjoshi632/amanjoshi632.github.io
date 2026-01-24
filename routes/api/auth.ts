import { Handlers } from "$fresh/server.ts";

/**
 * GitHub OAuth - Step 1: Redirect to GitHub for authorization
 * Decap CMS calls this endpoint when user clicks "Login with GitHub"
 */

const GITHUB_CLIENT_ID = Deno.env.get("GITHUB_CLIENT_ID") || "";
const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const provider = url.searchParams.get("provider");

    if (provider !== "github") {
      return new Response("Unsupported provider", { status: 400 });
    }

    // Build GitHub OAuth URL
    const authUrl = new URL(GITHUB_AUTHORIZE_URL);
    authUrl.searchParams.set("client_id", GITHUB_CLIENT_ID);
    authUrl.searchParams.set("redirect_uri", `${url.origin}/callback`);
    authUrl.searchParams.set("scope", "repo,user");
    authUrl.searchParams.set("state", crypto.randomUUID());

    return Response.redirect(authUrl.toString(), 302);
  },
};
