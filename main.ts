import "$std/dotenv/load.ts";

import { App, staticFiles } from "fresh";

export const app = new App()
  // Serve files from static/ (CSS, favicon, uploads, /admin Decap panel)
  .use(staticFiles())
  // File-system based routing (replaces the old fresh.gen.ts manifest)
  .fsRoutes();
