import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { GENERATE_SCRIPT_SYSTEM_PROMPT } from "~/lib/constants";
import { openai } from "~/lib/openai";
import { redis } from "~/lib/redis";
import type { FeedItem } from "~/types";

async function handler() {
  try {
    const feed = await redis.json.get<FeedItem[]>("feed-items");

    if (!feed) {
      return new Response("Feed is missing", { status: 500 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "system",
          content: GENERATE_SCRIPT_SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: JSON.stringify(feed),
        },
      ],
    });

    const choice = completion.choices[0];

    if (!choice?.message.content) {
      return new Response("Something went wrong", { status: 500 });
    }

    await redis.set("generated-script", choice.message.content);

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
