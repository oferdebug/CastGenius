import { inngest } from "../client";

/** Typed payload for test/hello.world; enforces event.data.email in handler. */
interface HelloWorldPayload {
  email: string;
}

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    const data = event.data as HelloWorldPayload;
    const raw = data.email;
    const email =
      typeof raw === "string" && raw.trim() !== "" ? raw.trim() : null;
    if (email === null) {
      return { message: "Hello! (No email provided.)" };
    }
    return { message: `Hello ${email}!` };
  },
);
