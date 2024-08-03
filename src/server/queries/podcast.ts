import "server-only";

import { z } from "zod";

import { db } from "~/server/db";

const getPodcastSchema = z.object({
  id: z.string(),
});

export async function getPodcast(input: z.infer<typeof getPodcastSchema>) {
  try {
    const parsedInput = getPodcastSchema.parse(input);

    const podcast = await db.query.podcasts.findFirst({
      where: (model, { eq }) => eq(model.id, parsedInput.id),
    });

    return {
      data: podcast,
    };
  } catch (err) {
    return {
      data: null,
    };
  }
}
