import { initBotId } from "botid/client/core";

// Server Actions invoked from these pages — protects the enterprise,
// university and course enrollment forms against automated/bot submissions.
initBotId({
  protect: [
    { path: "/*/entreprises", method: "POST" },
    { path: "/*/universites", method: "POST" },
    { path: "/*/formation/*", method: "POST" },
  ],
});
