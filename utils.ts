import { createDefine } from "fresh";

// Shared request state across middlewares/routes (unused for this static portfolio).
export type State = Record<string, unknown>;

// App-wide `define` helper: gives type-safe handlers <-> page data wiring.
export const define = createDefine<State>();
