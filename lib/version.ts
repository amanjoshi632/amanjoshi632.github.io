// Build-time commit stamp. Overwritten by dev.ts during `deno task build`.
// Stays "dev" in the repo and in local dev mode; Deno Deploy bakes the real SHA.
export const COMMIT_SHA = "dev";
