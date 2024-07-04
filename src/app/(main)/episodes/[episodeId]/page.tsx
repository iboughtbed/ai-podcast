import { notFound } from "next/navigation";

import { getEpisode } from "~/server/queries/episode";
import { ClientPage } from "./client-page";

export default async function EpisodePage({
  params,
}: {
  params: { episodeId: string };
}) {
  const { episode } = await getEpisode(params.episodeId);

  if (!episode) {
    notFound();
  }

  return <ClientPage episode={episode} />;
}
