import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import Image from "next/image";
import { Announcement } from "~/components/announcement";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { Benefits } from "./_components/benefits";
import { PodcastTabs } from "./_components/podcast-tabs";

export default function HomePage() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden pb-10 pt-8 md:pt-16">
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
                href="/"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Create now
              </Link>
            </div>
          </div>
        </div>

        <PodcastTabs />

        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center text-[15px] font-medium">
            <div>Powering 100+ episodes on different services</div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-secondary px-3 py-1.5 text-sm font-medium ring-offset-background transition-all">
              <Icons.apple className="mr-2 size-4" />
              Apple Podcasts
            </div>
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-sm bg-secondary px-3 py-1.5 text-sm font-medium ring-offset-background transition-all">
              <Icons.spotify className="mr-2 size-4" />
              Spotify
            </div>
          </div>
        </div>

        <Separator className="mt-16" />

        <Benefits />

        <div className="relative mx-auto mb-20 w-full max-w-5xl pb-10 pt-20 md:mb-40 md:mt-20 md:pt-40">
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-full w-1/2 -translate-y-[40%] md:block">
            <Image
              alt="logo"
              src="/images/logo.png"
              className="absolute inset-0 size-full mix-blend-multiply [mask:radial-gradient(31.40625rem_18.03125rem_at_50%_13.5rem,white_27%,transparent_93%)]"
              width="1032"
              height="1364"
            />
            <div className="absolute inset-0 mix-blend-multiply [mask:radial-gradient(31.40625rem_18.03125rem_at_50%_13.5rem,white_27%,transparent_93%)]"></div>
            <div className="">
              <Image
                alt="glow"
                src="/images/cta-glow.avif"
                className="absolute left-[calc(-355/16*1rem)] top-[calc(-144/16*1rem)] w-[calc(1463/16*1rem)] max-w-none bg-white/5 opacity-50 mix-blend-overlay [mask:radial-gradient(31.40625rem_18.03125rem_at_50%_13.5rem,white_27%,transparent_93%)]"
                width="1463"
                height="1112"
              />
            </div>
          </div>
          <div className="rounded-xl border px-6 pb-14 pt-20 shadow-lg sm:px-10 sm:pb-20 lg:px-[4.5rem]">
            <h2 className="max-w-80 text-balance text-3xl font-semibold tracking-[-0.015rem] text-gray-950">
              Start now,
              <br />
              shape the future of podcasts
            </h2>
            <p className="mt-4 max-w-[26rem] text-balance text-base/6 text-gray-600">
              Create podcasts in minutes.{" "}
              <strong className="font-medium lg:text-gray-950">Free</strong> for
              your first 1 episode. No credit card required.
            </p>
            <div className="relative mt-6 flex items-center gap-2">
              <Link
                href="/episodes"
                className={cn(
                  buttonVariants({}),
                  "group bg-violet-600 font-bold hover:bg-violet-600/90 dark:text-white max-md:w-full",
                )}
              >
                <span>Listen now</span>
                <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/episodes"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "max-md:w-full",
                )}
              >
                Get demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
