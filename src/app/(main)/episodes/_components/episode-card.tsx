import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import type { Episode } from "~/server/db/schema";

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <p>{episode.title}</p>
            <Badge>{episode.episodeLanguage}</Badge>
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
