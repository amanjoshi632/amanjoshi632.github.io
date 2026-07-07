// Build-time commit stamp. Overwritten by dev.ts during `deno task build`,
// but only on Deno Deploy / CI (DENO_DEPLOY_BUILD_ID or CI env set).
// Stays "dev" in the repo and in local builds; Deno Deploy bakes the real SHA.
export const COMMIT_SHA = "dev";
