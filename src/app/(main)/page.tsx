import Link from "next/link";

import { Announcement } from "~/components/announcement";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <div className="relative flex flex-col items-center">
            <Announcement />

            <h1
              className="mt-3 animate-fade-up text-balance text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
              style={{ animationDelay: "0.20s", animationFillMode: "both" }}
            >
              AI-generated interactive podcast
            </h1>
            <p
              className="mt-3 max-w-xl animate-fade-up text-balance text-center text-muted-foreground sm:text-lg"
              style={{ animationDelay: "0.30s", animationFillMode: "both" }}
            >
              Shape the future of the podcast, by choosing your own story
            </p>
            <div
              className="mt-6 flex animate-fade-up items-center gap-2"
              style={{ animationDelay: "0.40s", animationFillMode: "both" }}
            >
              <Link href="/episodes" className={cn(buttonVariants())}>
                Listen now
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.instagram}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Icons.instagram className="mr-2 size-4" />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <div className="mx-auto aspect-video h-[80vh] bg-muted-foreground"></div>
        </div>

        <div className="relative overflow-hidden py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"></div>
      </div>
    </div>
  );
}
