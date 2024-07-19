import type { Episode } from "~/server/db/schema";
import { EpisodeCard } from "./episode-card";

interface EpisodesProps {
  episodes: Episode[];
}

export function Episodes({ episodes }: EpisodesProps) {
  return (
    <div className="flex flex-col gap-6">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
