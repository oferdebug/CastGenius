import { serve } from "inngest/next";
import { ingest } from "../../../inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: ingest,
    functions: [
        /* your functions will be passed here later! */
    ],
});