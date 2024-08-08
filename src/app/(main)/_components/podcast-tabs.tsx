"use client";

import Image from "next/image";
import * as React from "react";

import { Icons } from "~/components/icons";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

export function PodcastTabs() {
  const [tab, setTab] = React.useState("apple");
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <div
      className="relative mb-4 animate-fade-up pb-10 pt-16"
      style={{ animationDelay: "0.50s", animationFillMode: "both" }}
      id="episodes"
    >
      <div className="pointer-events-none absolute left-[-100px] top-[-10%] hidden select-none xl:block">
        <Image
          alt="floating faces with different expressions"
          src="/images/faces-left-cut.png"
          className="aspect-[1160 / 490]"
          height="1160"
          width="301"
        />
      </div>

      <div className="relative mx-auto flex flex-col items-center">
        <div className="w-full [perspective:800px]">
          <div className="mx-auto min-h-[510px] max-w-4xl rounded-xl backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
            <Tabs
              defaultValue="apple"
              className="h-full w-full"
              value={tab}
              onValueChange={setTab}
            >
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="apple">
                  <Icons.apple className="mr-2 size-4" />
                  Apple Podcasts
                </TabsTrigger>
                <TabsTrigger value="spotify">
                  <Icons.spotify className="mr-2 size-4" />
                  Spotify
                </TabsTrigger>
              </TabsList>

              <div
                className={cn(
                  "shadow-xl transition-opacity duration-1000",
                  isVisible ? "opacity-100" : "opacity-0",
                  tab === "spotify" ? "block" : "hidden",
                )}
              >
                <iframe
                  src="https://open.spotify.com/embed/show/3hrNivV4vsniRBO90ecaGa?theme=0"
                  className="h-[250px] w-full rounded-[10px]"
                ></iframe>
              </div>

              <div
                className={cn(
                  "shadow-lg transition-opacity duration-1000",
                  isVisible ? "opacity-100" : "opacity-0",
                  tab === "apple" ? "block" : "hidden",
                )}
              >
                <iframe
                  src="https://embed.podcasts.apple.com/kz/podcast/parallax-podcast/id1757812144?theme=light"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  className="h-[450px] w-full overflow-hidden rounded-[10px]"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                ></iframe>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-150px] top-[-18%] hidden select-none xl:block">
        <Image
          alt="floating faces with different expressions"
          src="/images/faces-right.png"
          className="aspect-[1160 / 490]"
          height="1160"
          width="490"
        />
      </div>
    </div>
  );
}
