import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { env } from "~/env";
import { redis } from "~/lib/redis";
import type { Feed } from "~/types";

async function handler() {
  try {
    console.log("Here 9");

    const response = await fetch(env.DISCOVER_FEED_URL, {
      next: {
        revalidate: 60 * 60 * 12, // 12 hours
      },
    });

    console.log("Here 17");

    const feed = (await response.json()) as Feed;

    console.log("Here 21");

    const items = feed.items.map((item) => ({
      title: item.title,
      description: item.description,
    }));

    console.log("Here 28");

    await redis.json.set("feed-items", "$", items);

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
