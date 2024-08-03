import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { GENERATE_SCRIPT_SYSTEM_PROMPT_RU } from "~/lib/constants";
import { openai } from "~/lib/openai";
import { queue } from "~/lib/qstash";
import { redis } from "~/lib/redis";
import { absoluteUrl } from "~/lib/utils";
import type { FeedItem, PodcastScript } from "~/types";

export const maxDuration = 20;

async function handler() {
  try {
    const feed = await redis.json.get<FeedItem[]>("ru:feed-items");

    if (!feed) {
      return new Response("Feed is missing", { status: 500 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: GENERATE_SCRIPT_SYSTEM_PROMPT_RU,
        },
        {
          role: "user",
          content: JSON.stringify(feed),
        },
      ],
      response_format: {
        type: "json_object",
      },
    });

    const choice = completion.choices[0];

    if (!choice?.message.content) {
      return new Response("Something went wrong", { status: 500 });
    }

    const { script } = (await JSON.parse(choice.message.content)) as {
      script: PodcastScript;
    };

    await redis.json.set("ru:generated-script", "$", script);
    await queue.enqueueJSON({
      url: absoluteUrl("/api/podcast/ru/text-to-speech/base-script"),
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
