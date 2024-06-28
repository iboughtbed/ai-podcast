import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { queue } from "~/lib/qstash";
import { absoluteUrl } from "~/lib/utils";
import type { PodcastBranch } from "~/types";

type PodcastBranchWithIdx = PodcastBranch & {
  index: number;
};

async function handler(request: Request) {
  try {
    const branch = (await request.json()) as PodcastBranchWithIdx;

    for (const [index, segment] of branch.dialogue.entries()) {
      await queue.enqueueJSON({
        url: absoluteUrl(
          `/api/podcast/text-to-speech/branch/${branch.branch}/${index}`,
        ),
        body: {
          ...segment,
          branchId: branch.branch,
          index,
        },
      });
    }

    await queue.enqueueJSON({
      url: absoluteUrl(`/api/podcast/merge-audio/branch/${branch.branch}`),
      body: {
        branchId: branch.branch,
      },
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
