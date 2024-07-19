import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { redis } from "~/lib/redis";
import { generateId, getFormattedDate } from "~/lib/utils";
import { db } from "~/server/db";
import { episodes } from "~/server/db/schema";
import { utapi } from "~/server/uploadthing";
import type { PodcastScript } from "~/types";

export const maxDuration = 60;

async function handler() {
  try {
    const generatedScript = await redis.json.get<PodcastScript>(
      "ru:generated-script",
    );

    if (!generatedScript) {
      return new Response("Script was not generated", { status: 500 });
    }

    const segments = await redis.lrange<number>(
      "ru:base-script:segments",
      0,
      -1,
    );
    const buffersWithIdx: { index: number; buffer: Buffer }[] = [];

    await Promise.all(
      segments.map(async (segmentId, index) => {
        const segment = await redis.json.get<{ audio: string }>(
          `ru:base-script:segment:${segmentId}`,
        );

        if (segment) {
          const response = await fetch(segment.audio, {
            headers: {
              Accept: "audio/mpeg",
            },
          });

          const arrayBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          buffersWithIdx.push({ index, buffer });
        }
      }),
    );

    buffersWithIdx.sort((a, b) => a.index - b.index);
    const buffers = buffersWithIdx.map((item) => item.buffer);

    const combinedBuffer = Buffer.concat(buffers);
    const blob = new Blob([combinedBuffer], { type: "audio/mpeg" });
    const fileName = generateId();
    const file = new File([blob], fileName, { type: "audio/mpeg" });

    const { data, error } = await utapi.uploadFiles(file);

    if (!data) {
      if (error) {
        console.error(error);
      }

      return new Response("File was not uploaded", { status: 500 });
    }

    await redis.json.set("ru:base-script:final-audio", "$", {
      audio: data.url,
      key: data.key,
    });

    await redis.del("ru:base-script:segments");

    const date = getFormattedDate();

    await db.insert(episodes).values({
      title: `Эпизод - ${date}`,
      episodeLanguage: "ru",
      baseScript: generatedScript,
      audio: data.url,
      audioKey: data.key,
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
