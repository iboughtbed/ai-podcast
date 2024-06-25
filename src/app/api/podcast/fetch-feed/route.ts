import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

// import { env } from "~/env";
// import { redis } from "~/lib/redis";
// import type { Feed } from "~/types";

// Temprory workaround for the data fetching
// The data is already stored in the Redis database
// Perplexity does not provide API for Discover Feed

async function handler() {
  try {
    // const feed: Feed = { items: [] };

    // for (let i = 0; i < 5; i++) {
    //   const offset = i * 20;

    //   const response = await fetch(
    //     `${env.DISCOVER_FEED_URL}&offset=${offset}`,
    //     {
    //       headers: {
    //         Accept: "application/json",
    //       },
    //       next: {
    //         revalidate: 60 * 60 * 12, // 12 hours
    //       },
    //     },
    //   );

    //   const json = (await response.json()) as Feed;
    //   feed.items.push(...json.items);
    // }

    // const items = feed.items.map((item) => ({
    //   title: item.title,
    //   description: item.description,
    // }));

    // await redis.json.set("feed-items", "$", items);

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
