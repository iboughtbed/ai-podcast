"use client";

// import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

import { Icons } from "~/components/icons";
import { cn } from "~/lib/utils";

export function CreatePodcastForm() {
  // const router = useRouter();
  const [value, setValue] = React.useState("");
  const [
    isLoading,
    // setIsLoading
  ] = React.useState(false);

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  async function onSubmit() {
    return toast.info("Подкасты доступны для лимитированных пользователей.");

    // try {
    //   setIsLoading(true);

    //   const { data } = await createPodcast({ prompt: value });
    //   if (!data) {
    //     return toast.error("Error creating the podcast, please try again");
    //   }

    //   router.push(`/p/${data.id}`);
    // } catch (err) {
    //   toast.error("Something went wrong");
    //   setIsLoading(false);
    // }
  }

  async function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.length >= 2) {
        await onSubmit();
      }
    }
  }

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "23px";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = scrollHeight > 24 ? "" : "23px !important";
    }
  }, []);

  React.useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmit();
      }}
      className="relative z-10 h-full w-full min-w-0 bg-zinc-900 p-3"
    >
      <div className="relative flex w-full flex-1 flex-col items-center gap-6 transition-all duration-300">
        <label className="sr-only" htmlFor="textarea-input">
          prompt
        </label>
        <div className="relative flex w-full min-w-0 flex-1 justify-between self-start">
          <textarea
            ref={textareaRef}
            value={value}
            onKeyDown={onKeyDown}
            onChange={(e) => setValue(e.target.value)}
            className="mr-2 min-h-[1.5rem] w-full flex-[1_0_50%] resize-none border-0 bg-transparent pl-1 pr-10 text-sm leading-relaxed text-white shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 disabled:bg-transparent disabled:opacity-80 [&_textarea]:px-0"
            maxLength={1000}
            minLength={2}
            autoFocus
            style={{ colorScheme: "dark" }}
            placeholder="A podcast about why are people afraid of change"
            spellCheck={false}
            disabled={isLoading}
          ></textarea>
        </div>
        <div className="flex w-full justify-between gap-2">
          <div className="flex flex-1 gap-1 sm:gap-2">
            <button
              type="button"
              className="flex h-8 w-fit shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-zinc-700/70 hover:text-white focus-visible:bg-zinc-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-24 sm:px-3"
            >
              <div className="flex items-center gap-1.5 focus-within:bg-zinc-700">
                <Icons.lock className="h-4 w-4 shrink-0 translate-x-[1px] sm:translate-x-[-1px]" />
                <div>Public</div>
              </div>
            </button>
          </div>
          <div className={cn(value.length < 2 && "cursor-not-allowed")}>
            <button
              className="flex h-8 w-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-transparent text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:bg-zinc-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              id="send-button"
              type="submit"
              disabled={value.length < 2 || isLoading}
            >
              <span className="sr-only">Send</span>
              <Icons.arrowRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
