import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

import { env } from "~/env";
import { ruHostsVoices } from "~/lib/constants";
import { redis } from "~/lib/redis";
import { generateId } from "~/lib/utils";
import { utapi } from "~/server/uploadthing";
import type { PodcastSegment } from "~/types";

type PodcastSegmentWithIdx = PodcastSegment & {
  index: number;
};

async function handler(request: Request) {
  try {
    const segment = (await request.json()) as PodcastSegmentWithIdx;
    const voiceId = ruHostsVoices[segment.name.toLowerCase()] ?? "Adam";

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": env.XI_API_KEY,
        },
        body: JSON.stringify({
          model_id: "eleven_multilingual_v2",
          text: segment.text,
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.5,
          },
        }),
      },
    );

    const blob = await response.blob();
    const fileName = generateId();
    const file = new File([blob], fileName, { type: "audio/mpeg" });

    const { data, error } = await utapi.uploadFiles(file);

    if (!data) {
      if (error) {
        console.error(error);
      }

      return new Response("File was not uploaded", { status: 500 });
    }

    await redis.json.set(`ru:base-script:segment:${segment.index}`, "$", {
      audio: data.url,
      key: data.key,
    });

    await redis.rpush("ru:base-script:segments", segment.index);

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
