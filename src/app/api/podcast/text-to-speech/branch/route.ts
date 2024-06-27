import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { queue } from "~/lib/qstash";
import { redis } from "~/lib/redis";
import { absoluteUrl } from "~/lib/utils";
import type { PodcastBranch } from "~/types";

async function handler() {
  try {
    const branches = await redis.get<PodcastBranch[]>("generated-branches");

    if (!branches) {
      return new Response("Branches are missing", { status: 500 });
    }

    for (const [index, branch] of branches.entries()) {
      await queue.enqueueJSON({
        url: absoluteUrl(`/api/podcast/text-to-speech/branch/${index}`),
        body: {
          ...branch,
          index,
        },
      });
    }

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
