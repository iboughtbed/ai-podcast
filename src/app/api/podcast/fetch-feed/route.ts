import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

// import { env } from "~/env";
// import { redis } from "~/lib/redis";
// import type { Feed } from "~/types";

// Temprory workaround for the data fetching
// The data is already stored in the Redis database
// Perplexity does not provide API for Discover Feed

async function handler() {
  try {
    const response = await fetch(
      "https://www.perplexity.ai/rest/discover/feed?limit=100&version=2.9",
      {
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
            "__cflb=02DiuDyvFMmK5p9jVbVnMNSKYZhUL9aGmLHRC8T5BZ47W; pplx.visitor-id=155d6fd9-ef82-4dc0-9504-34740b367acb; _ga=GA1.1.1334287756.1719231471; next-auth.csrf-token=ffde0fe1f254e846e4ee8e10d1152074d6eac79e841eb761a16bda9b1c573ecc%7C58f85e5901b9e5eefd3e1478f8ca6fe80faad7b3bf1cafa6ac3ead8ca2b41006; next-auth.callback-url=https%3A%2F%2Fwww.perplexity.ai%2Fapi%2Fauth%2Fsignin-callback%3Fredirect%3Dhttps%253A%252F%252Fwww.perplexity.ai; _ga_SH9PRBQG23=GS1.1.1719305388.5.1.1719305427.0.0.0; AWSALB=+WI8Wx2j/XyUk8QfsJHA/758M3p9zmV0AWjJwdqjZmVw5QkLNReMN6iLNHJJrnW/ZyxBtb3zjteTo53Msadc0Qz8Ud1AHjaw7sAchyOxCz7kyCU9r5pBeRT9SEMFuEFVXjQ9jXxjn40TTIy3lqTtPc10h0VI1TFTons/u6oNmcZ8x/m3EXWFYxUDvHvNTlIBw0Cpn/eimo58LIxlpH2I/RNo1RMvlOWzQh0BAtuFvrN8N7p+hPqXRORjVqKg+eg=; AWSALBCORS=+WI8Wx2j/XyUk8QfsJHA/758M3p9zmV0AWjJwdqjZmVw5QkLNReMN6iLNHJJrnW/ZyxBtb3zjteTo53Msadc0Qz8Ud1AHjaw7sAchyOxCz7kyCU9r5pBeRT9SEMFuEFVXjQ9jXxjn40TTIy3lqTtPc10h0VI1TFTons/u6oNmcZ8x/m3EXWFYxUDvHvNTlIBw0Cpn/eimo58LIxlpH2I/RNo1RMvlOWzQh0BAtuFvrN8N7p+hPqXRORjVqKg+eg=",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
      },
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ json });

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
