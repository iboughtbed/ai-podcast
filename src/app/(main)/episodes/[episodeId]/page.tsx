export default function page() {
  return <></>;
}

// import { notFound } from "next/navigation";

// import { Separator } from "~/components/ui/separator";
// import { getEpisode } from "~/server/queries/episode";

// export default async function EpisodePage({
//   params,
// }: {
//   params: { episodeId: string };
// }) {
//   const { episode } = await getEpisode(params.episodeId);

//   if (!episode) {
//     notFound();
//   }

//   return (
//     <div className="container max-w-3xl">
//       <div className="flex flex-col">
//         <div className="relative overflow-hidden py-8 md:pb-8 lg:pb-20">
//           <div className="flex flex-col gap-1">
//             <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
//               {episode.title}
//             </h1>
//             <p className="text-balance text-sm text-muted-foreground sm:text-base">
//               duration &bull; 2 min &bull; {episode.createdAt.toDateString()}
//             </p>
//           </div>

//           <Separator className="my-8" />

//           <audio className="w-full" controls preload="auto">
//             <source src={episode.audio} type="audio/mpeg" />
//           </audio>
//         </div>
//       </div>
//     </div>
//   );
// }
