import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { queue } from "~/lib/qstash";
import { redis } from "~/lib/redis";
import { absoluteUrl } from "~/lib/utils";
import type { PodcastScript } from "~/types";

async function handler() {
  try {
    const script = await redis.json.get<PodcastScript>("en:generated-script");

    if (!script) {
      return new Response("Script was not generated", { status: 500 });
    }

    for (const [index, segment] of script.entries()) {
      await queue.enqueueJSON({
        url: absoluteUrl(`/api/podcast/en/text-to-speech/base-script/${index}`),
        body: {
          ...segment,
          index,
        },
      });
    }

    await queue.enqueueJSON({
      url: absoluteUrl("/api/podcast/en/merge-audio/base-script"),
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
