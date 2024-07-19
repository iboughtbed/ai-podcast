import { Separator } from "~/components/ui/separator";
// import { getEpisodes } from "~/server/queries/episode";
// import { Episodes } from "./_components/episodes";

export default async function EpisodesPage() {
  // const { episodes } = await getEpisodes();

  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden py-8 md:pb-8 lg:pb-20">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
              Episodes
            </h1>
            <p className="text-balance text-sm text-muted-foreground sm:text-base">
              Explore and listen to our latest episodes
            </p>
          </div>

          <Separator className="my-8" />

          {/* <Episodes episodes={episodes} /> */}
        </div>
      </div>
    </div>
  );
}
