"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";

import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import type { PodcastSegment } from "~/types";

interface ClientPageProps {
  episode: {
    audio: string;
    title: string;
    baseScript: PodcastSegment[];
    createdAt: Date;
    branches: {
      audio: string;
      title: string;
      id: string;
      audioKey: string;
      createdAt: Date;
      episodeId: string;
      branchScript: PodcastSegment[];
    }[];
  };
}

export function ClientPage({ episode }: ClientPageProps) {
  const [audioEnded, setAudioEnded] = React.useState(false);
  const [currentBranch, setCurrentBranch] = React.useState<{
    audio: string;
    title: string;
  } | null>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const audioElement = audioRef.current;

    function handleAudioEnd() {
      setAudioEnded(true);
    }

    if (audioElement) {
      audioElement.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleAudioEnd);
      }
    };
  });

  function handleBranch(branch: { audio: string; title: string }) {
    setCurrentBranch(branch);
  }

  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden py-8 md:pb-8 lg:pb-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
              {episode.title}
            </h1>
            <p className="text-balance text-sm text-muted-foreground sm:text-base">
              duration &bull; 2 min &bull; {episode.createdAt.toDateString()}
            </p>
          </div>

          <Separator className="my-8" />

          <audio ref={audioRef} className="w-full" controls preload="auto">
            <source src={episode.audio} type="audio/mpeg" />
          </audio>

          <Separator className="my-8" />

          <div
            className={cn(
              "flex flex-col items-center gap-2",
              !audioEnded && "hidden",
              currentBranch !== null && "hidden",
            )}
          >
            {episode.branches.map((branch, index) => (
              <Button
                key={index}
                className="w-full text-wrap"
                onClick={() => handleBranch(branch)}
              >
                {branch.title}
              </Button>
            ))}
          </div>

          <Separator className="my-8" />

          {currentBranch !== null && (
            <>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
                  {currentBranch.title}
                </h1>
              </div>

              <Separator className="my-8" />

              <audio className="w-full" controls preload="auto">
                <source src={currentBranch.audio} type="audio/mpeg" />
              </audio>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
