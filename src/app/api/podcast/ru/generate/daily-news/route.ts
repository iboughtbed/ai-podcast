import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { queue } from "~/lib/qstash";
import { absoluteUrl } from "~/lib/utils";

async function handler() {
  try {
    // fetching latest news
    await queue.enqueueJSON({
      url: absoluteUrl("/api/podcast/ru/fetch-feed"),
    });

    // script generation
    await queue.enqueueJSON({
      url: absoluteUrl("/api/podcast/ru/generate-script"),
    });

    // branch generation
    // await queue.enqueueJSON({
    //   url: absoluteUrl("/api/podcast/ru/generate-branches"),
    // });

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
