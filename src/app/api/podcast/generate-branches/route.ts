import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { GENERATE_BRANCHES_SYSTEM_PROMPT } from "~/lib/constants";
import { openai } from "~/lib/openai";
import { queue } from "~/lib/qstash";
import { redis } from "~/lib/redis";
import { absoluteUrl } from "~/lib/utils";
import type { PodcastScript } from "~/types";

async function handler() {
  try {
    const generatedScript = await redis.get<PodcastScript>("generated-script");

    if (!generatedScript) {
      return new Response("Podcast script is missing", { status: 500 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: GENERATE_BRANCHES_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: JSON.stringify(generatedScript),
        },
      ],
    });

    const choice = completion.choices[0];

    if (!choice?.message.content) {
      return new Response("Something went wrong", { status: 500 });
    }

    await redis.set("generated-branches", choice.message.content);
    await queue.enqueueJSON({
      url: absoluteUrl("/api/podcast/text-to-speech/branch"),
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}

export const POST = verifySignatureAppRouter(handler, { clockTolerance: 60 });
