import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { load } from "cheerio";

import { env } from "~/env";
import { redis } from "~/lib/redis";
import type { FeedItem } from "~/types";

function isValidDate(date: Date) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    date.getDate() === today.getDate() || date.getDate() === yesterday.getDate()
  );
}

function extractDate(href: string, origin: string) {
  const newsFeedOrigin = new URL(env.NEWS_FEED_URL).origin;
  const financeFeedOrigin = new URL(env.FINANCE_FEED_URL).origin;

  if (origin === newsFeedOrigin) {
    return href.split("/")[1];
  } else if (origin === financeFeedOrigin) {
    const pathname = new URL(href).pathname;
    const parts = pathname.split("/");
    const year = parts[1];
    const month = parts[2];
    const day = parts[3];

    return `${year}-${month}-${day}`;
  }
}

async function fetchNews(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html",
    },
    next: {
      revalidate: 60 * 60 * 12, // 12 hours
    },
  });

  const origin = new URL(url).origin;

  const text = await response.text();
  const cheerio = load(text);

  const hrefs: string[] = [];
  const titles: string[] = [];
  const descriptions: string[] = [];
  const dates: Date[] = [];
  const items: FeedItem[] = [];

  cheerio(".all_posts_container > div > .row > div > a").each((i, el) => {
    const href = cheerio(el).attr("href");
    if (href) {
      hrefs.push(href);

      const dateString = extractDate(href, origin);
      if (dateString) {
        const date = new Date(dateString);
        dates.push(date);
      }
    }
  });

  const filteredHrefs = hrefs.filter((_, i) => {
    if (dates[i]) return isValidDate(dates[i]);
  });

  // fetch in parallel
  await Promise.all(filteredHrefs.map((href) => proccessItem(href)));

  async function proccessItem(href: string) {
    const financeFeedOrigin = new URL(env.FINANCE_FEED_URL).origin;
    const url = origin === financeFeedOrigin ? href : `${origin}${href}`;

    const response = await fetch(url, {
      headers: {
        Accept: "text/html",
      },
    });

    const text = await response.text();
    const cheerio = load(text);

    // parse title
    const title = cheerio("h1").text();
    const paragraphs: string[] = [];
    titles.push(title);

    // parse content
    cheerio(".single-content p").each((i, el) => {
      const paragraph = cheerio(el).text();
      paragraphs.push(paragraph);
    });

    const description = paragraphs.join("\n");
    descriptions.push(description);
  }

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const description = descriptions[i];

    if (!title || !description) break;

    const item: FeedItem = {
      title,
      description,
    };
    items.push(item);
  }

  return { items };
}

async function handler() {
  try {
    const { items: newsFeedItems } = await fetchNews(env.NEWS_FEED_URL);
    const { items: financeFeedItems } = await fetchNews(env.FINANCE_FEED_URL);
    const items = [...newsFeedItems, ...financeFeedItems];

    await redis.json.set("ru:feed-items", "$", items);

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
