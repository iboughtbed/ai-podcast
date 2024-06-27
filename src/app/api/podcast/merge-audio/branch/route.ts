import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { queue } from "~/lib/qstash";
import { redis } from "~/lib/redis";
import { absoluteUrl } from "~/lib/utils";

export const maxDuration = 60;

async function handler() {
  try {
    const arrlen = await redis.json.arrlen("generated-branches");
    const length = arrlen[0];

    if (!length) {
      return new Response("Branches are missing", { status: 500 });
    }

    for (let i = 0; i < length; i++) {
      await queue.enqueueJSON({
        url: absoluteUrl(`/api/podcast/merge-audio/branch/${i}`),
        body: {
          branchId: i,
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
