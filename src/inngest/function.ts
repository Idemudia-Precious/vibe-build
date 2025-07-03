import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // download step
    await step.sleep("wait-a-moment", "30s");
    // download step
    await step.sleep("wait-a-moment", "20s");
    // download step
    await step.sleep("wait-a-moment", "10s");
    return { message: `Hello ${event.data.email}!` };
  },
);
