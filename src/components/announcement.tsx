import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

export function Announcement() {
  return (
    <Link
      href="/episodes"
      className="group inline-flex animate-fade-up items-center rounded-full border border-purple-600 border-opacity-0 bg-muted py-1 pl-1 pr-3 text-sm font-medium outline-none ring-0 ring-purple-600 ring-opacity-0 transition-all duration-500 ease-out hover:border-opacity-100 hover:ring-[3px] hover:ring-opacity-30 focus:ring-[3px] focus:ring-opacity-30 active:border-opacity-100 active:ring-[1px] active:ring-opacity-30"
      style={{ animationDelay: "0.10s", animationFillMode: "both" }}
    >
      <Badge>New</Badge>{" "}
      <Separator className="mx-1 h-4" orientation="vertical" />{" "}
      <span className="hidden md:inline-block">
        Listen to the latest episode
      </span>
      <span className="md:hidden">Latest episode</span>
      <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
