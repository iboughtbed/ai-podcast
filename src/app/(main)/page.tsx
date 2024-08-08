import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { Announcement } from "~/components/announcement";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { testimonials } from "~/config/testimonials";
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
              <Link href="#episodes" className={cn(buttonVariants())}>
                Listen now
              </Link>
              <Link
                href="/create"
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

        <div className="mx-auto mb-20 w-full max-w-5xl pb-10 pt-20">
          <div className="text-center">
            <h2 className="text-sm font-medium text-violet-500">
              What people are saying
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-3xl font-semibold tracking-[-0.015rem] text-gray-950">
              Trusted by podcasters, developers and directors
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base/6 text-gray-600">
              Join the Parallax&apos;s fast growing community
            </p>
          </div>

          <div className="relative mt-16 w-full">
            <div className="testimonials-line-top absolute inset-x-0 -top-px h-px opacity-30 max-md:hidden"></div>
            <div className="testimonials-line-right absolute inset-y-0 -right-px w-px opacity-30 max-md:hidden"></div>
            <div className="testimonials-line-bottom absolute inset-x-0 -bottom-px h-px opacity-30 max-md:hidden"></div>
            <div className="testimonials-line-right absolute inset-y-0 -left-px w-px opacity-30 max-md:hidden"></div>

            <div className="isolate grid w-full grid-cols-1 gap-2 md:grid-cols-2">
              <div className="z-10 row-span-2 flex rounded-xl shadow-2xl ring-1 ring-gray-950/5">
                <div className="flex w-full flex-col items-start p-8">
                  <Image
                    src="/images/nfactorial.png"
                    alt="garderob"
                    className="mb-10 h-10 w-auto"
                    height="200"
                    width="200"
                  />

                  <div className="font-book mt-auto text-xl text-gray-950">
                    <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["daniyar-akhmetzhanov"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-gray-950">
                        Daniyar Akhmetzhanov
                      </span>
                      <span className="mt-0.5 text-gray-600">Producer</span>
                      <span className="mt-0.5 flex items-center text-gray-600">
                        <Icons.slash />
                        nFactorial Podcast
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <Image
                        src="/images/daniyar-akhmetzhanov.png"
                        alt=""
                        className="size-12"
                        width="320"
                        height="320"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-xl bg-gray-50 shadow ring-1 ring-gray-950/5">
                <div className="flex w-full flex-col items-start p-8">
                  <div className="mb-auto text-base/6 text-gray-950">
                    <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["bahauddin-toleu"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-gray-950">
                        Bahauddin Toleu
                      </span>
                      <span className="mt-0.5 text-gray-600">Mentor</span>
                      <span className="mt-0.5 flex items-center text-gray-600">
                        <Icons.slash />
                        nFactorial Incubator
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-xl bg-gray-50 shadow ring-1 ring-gray-950/5">
                <div className="flex w-full flex-col items-start p-8">
                  <div className="mb-auto text-base/6 text-gray-950">
                    <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["jarasar-daulet"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-gray-950">
                        Jarasar Daulet
                      </span>
                      <span className="mt-0.5 text-gray-600">
                        Frontend Engineer
                      </span>
                      <span className="mt-0.5 flex items-center text-gray-600">
                        <Icons.slash />
                        Zimran
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-10 row-span-2 flex rounded-xl bg-[#D33F57] shadow-2xl ring-1 ring-[#c63a52] md:col-start-2 md:row-start-3">
                <div className="flex w-full flex-col items-start p-8">
                  <span className="mb-10 text-lg font-bold text-white">
                    Garderob
                  </span>

                  <div className="font-book mt-auto text-xl text-gray-950">
                    <p className="relative text-white before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["daulet-issatayev"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-white">
                        Daulet Issatayev
                      </span>
                      <span className="mt-0.5 text-white/80">Co-Founder</span>
                      <span className="mt-0.5 flex items-center text-white/80">
                        <Icons.slash />
                        Garderob
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <Image
                        src="/images/daulet-issatayev.png"
                        alt=""
                        className="size-12"
                        width="320"
                        height="320"
                      />
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-xl bg-gray-50 shadow ring-1 ring-gray-950/5">
                <div className="flex w-full flex-col items-start p-8">
                  <div className="mb-auto text-base/6 text-gray-950">
                    <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["alibek-seitov"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-gray-950">
                        Alibek Seitov
                      </span>
                      <span className="mt-0.5 text-gray-600">
                        Software Engineer
                      </span>
                      <span className="mt-0.5 flex items-center text-gray-600">
                        <Icons.slash />
                        nFactorial
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex rounded-xl bg-gray-50 shadow ring-1 ring-gray-950/5">
                <div className="flex w-full flex-col items-start p-8">
                  <div className="mb-auto text-base/6 text-gray-950">
                    <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
                      {testimonials["bauyrzhan-tursynbek"]}
                    </p>
                  </div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex flex-wrap text-sm">
                      <span className="w-full flex-none font-medium text-gray-950">
                        Bauyrzhan Tursynbek
                      </span>
                      <span className="mt-0.5 text-gray-600">
                        Frontend Engineer
                      </span>
                      <span className="mt-0.5 flex items-center text-gray-600">
                        <Icons.slash />
                        ioka
                      </span>
                    </div>
                    <div className="bg-black/2.5 relative flex-none overflow-hidden rounded-lg">
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                href="https://forms.gle/BR2uKfKJDB7syR3m9"
                target="_blank"
                rel="noreferrer"
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
