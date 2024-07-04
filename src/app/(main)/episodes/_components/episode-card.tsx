import Link from "next/link";
import type { episodeTypes } from "~/lib/constants";
import type { PodcastSegment } from "~/types";

interface EpisodeCardProps {
  episode: {
    id: string;
    title: string;
    episodeType: (typeof episodeTypes)[number];
    baseScript: PodcastSegment[];
    audio: string;
    audioKey: string;
    createdAt: Date;
  };
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.id}`}
      className="group rounded-lg border bg-background p-4 shadow-sm transition-all hover:bg-secondary/50 hover:shadow-md"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="size-16 rounded-md bg-muted"></div>
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-lg font-medium">{episode.title}</h3>
          <p className="text-sm text-muted-foreground">2 min</p>
        </div>
      </div>
    </Link>
  );
}
