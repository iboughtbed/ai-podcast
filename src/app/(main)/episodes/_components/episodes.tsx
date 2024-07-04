import type { episodeTypes } from "~/lib/constants";
import type { PodcastSegment } from "~/types";
import { EpisodeCard } from "./episode-card";

interface EpisodesProps {
  episodes: {
    id: string;
    title: string;
    episodeType: (typeof episodeTypes)[number];
    baseScript: PodcastSegment[];
    audio: string;
    audioKey: string;
    createdAt: Date;
    branches: {
      id: string;
      title: string;
      audio: string;
      audioKey: string;
      createdAt: Date;
      episodeId: string;
      branchScript: PodcastSegment[];
    }[];
  }[];
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
