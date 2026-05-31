#!/usr/bin/env -S deno run -A --watch=static/,routes/

import { Builder } from "fresh/dev";

const builder = new Builder();

if (Deno.args.includes("build")) {
  // Production build -> _fresh/server.js
  await builder.build();
} else {
  // Dev server with live reload
  await builder.listen(() => import("./main.ts"));
}
