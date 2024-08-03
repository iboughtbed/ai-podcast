import Image from "next/image";

import { CreatePodcastForm } from "./_components/create-podcast-form";

export default function CreatePodcastPage() {
  return (
    <div>
      <div className="relative mb-4 flex items-center justify-center py-[26vh] pt-[18vh] text-gray-900 sm:pt-[26vh]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative mb-72 h-full w-full min-w-[29rem] max-w-[96rem] sm:mb-0">
            <Image
              alt=""
              src="/v0-background.svg"
              className="pointer-events-none absolute inset-0 -z-10 -translate-x-2 select-none sm:translate-x-0"
              fill
            />
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center gap-6 px-6 text-center">
          <div className="flex w-full flex-col items-center gap-1.5">
            <h2
              className="text-4xl font-semibold tracking-tighter sm:text-5xl [@media(max-width:480px)]:text-[2rem]"
              data-testid="home-h2"
            >
              Generate. Tune. Inspire.
            </h2>
            <p>
              Generate podcasts with AI from simple
              <br className="sm:hidden" /> text prompts and images.
            </p>
          </div>
          <div className="z-10 m-auto flex w-full flex-col divide-zinc-600 overflow-hidden rounded-xl bg-[rgb(24,24,27)] shadow-lg shadow-black/40 sm:max-w-xl">
            <CreatePodcastForm />
          </div>
        </div>
      </div>
    </div>
  );
}
