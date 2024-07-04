import "server-only";

import { db } from "~/server/db";

export async function getEpisode(id: string) {
  const episode = await db.query.episodes.findFirst({
    where: (model, { eq }) => eq(model.id, id),
    with: {
      branches: true,
    },
    columns: {
      title: true,
      baseScript: true,
      audio: true,
      createdAt: true,
    },
  });

  return { episode };
}

export async function getEpisodes() {
  const episodes = await db.query.episodes.findMany({
    // with: {
    //   branches: true,
    // },
    orderBy: (model, { desc }) => [desc(model.createdAt)],
  });

  return { episodes };
}