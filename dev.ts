#!/usr/bin/env -S deno run -A --watch=static/,routes/

import { Builder } from "fresh/dev";

const builder = new Builder();

if (Deno.args.includes("build")) {
  // Stamp the current commit SHA into lib/version.ts so the footer can show it.
  await stampCommitSha();
  // Production build -> _fresh/server.js
  await builder.build();
} else {
  // Dev server with live reload
  await builder.listen(() => import("./main.ts"));
}

/**
 * Resolve the short commit SHA at build time and write it to lib/version.ts.
 * Prefers `git`; falls back to the Deno Deploy build id, then "dev".
 */
async function stampCommitSha() {
  let sha = "";
  try {
    const out = await new Deno.Command("git", {
      args: ["rev-parse", "--short", "HEAD"],
    }).output();
    if (out.success) sha = new TextDecoder().decode(out.stdout).trim();
  } catch {
    // git binary not available in the build sandbox
  }
  if (!sha) sha = (Deno.env.get("DENO_DEPLOY_BUILD_ID") ?? "dev").slice(0, 8);

  await Deno.writeTextFile(
    "lib/version.ts",
    `// Build-time commit stamp. Overwritten by dev.ts during \`deno task build\`.\n` +
      `export const COMMIT_SHA = ${JSON.stringify(sha)};\n`,
  );
}
