import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

// import { env } from "~/env";
// import { redis } from "~/lib/redis";
// import type { Feed } from "~/types";

// Temprory workaround for the data fetching
// The data is already stored in the Redis database
// Perplexity does not provide API for Discover Feed

async function handler() {
  try {
    const res = await fetch(
      "https://www.perplexity.ai/rest/discover/feed?limit=20&offset=20&version=2.9",
      {
        credentials: "include",
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,kk;q=0.6",
          "cache-control": "max-age=0",
          priority: "u=0, i",
          "sec-ch-ua":
            '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie:
            "__cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGmvoZQyvjgd3UG; AWSALB=Qkvw3QFyT39MormZ33R2pLGnaJlNevc3eFSkz1HxwktCy3k6zgJItUQraDRydhHNdodzwJeXgsxvp5Ujihgw/rxXe8ByXdQo5l38Wm+H96AB3CSfkIHrbsNd8x/y; AWSALBCORS=Qkvw3QFyT39MormZ33R2pLGnaJlNevc3eFSkz1HxwktCy3k6zgJItUQraDRydhHNdodzwJeXgsxvp5Ujihgw/rxXe8ByXdQo5l38Wm+H96AB3CSfkIHrbsNd8x/y",
          // "user-agent":
          //   "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
      },
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ json });

    return new Response(JSON.stringify(json), { status: 200 });

    // const response = await fetch(env.DISCOVER_FEED_URL, {
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   next: {
    //     revalidate: 60 * 60 * 12, // 12 hours
    //   },
    // });

    // const feed = (await response.json()) as Feed;

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
