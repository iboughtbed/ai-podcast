import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { load } from "cheerio";

import { env } from "~/env";
import { redis } from "~/lib/redis";
import type { FeedItem } from "~/types";

async function handler() {
  try {
    const response = await fetch(env.DISCOVER_FEED_URL, {
      headers: {
        Accept: "text/html",
      },
      next: {
        revalidate: 60 * 60 * 12, // 12 hours
      },
    });

    const text = await response.text();
    const cheerio = load(text);

    const titles: string[] = [];
    const descriptions: string[] = [];
    const items: FeedItem[] = [];
    const iterations = 4;

    // parse titles
    cheerio('[data-testid="thread-title"]').each((i, el) => {
      if (i < iterations) {
        titles.push(cheerio(el).text());
      }
    });

    // parse descriptions
    cheerio("div.break-word.mt-two.line-clamp-2.text-balance").each((i, el) => {
      if (i < iterations) {
        descriptions.push(cheerio(el).text());
      }
    });

    for (let i = 0; i < iterations; i++) {
      const title = titles[i];
      const description = descriptions[i];

      if (!title || !description) break;

      items.push({
        title,
        description,
      });
    }

    await redis.json.set("en:feed-items", "$", items);

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
