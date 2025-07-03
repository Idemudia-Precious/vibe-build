import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert summarizer.  You summarize in 2 words.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `write a 2 word summary of the text: ${event.data.value}`
    )
    console.log(output);

    return { output };
  },
);
