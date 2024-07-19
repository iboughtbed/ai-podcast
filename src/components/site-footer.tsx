// import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Icons } from "~/components/icons";
import { ModeToggle } from "~/components/mode-toggle";
import { buttonVariants } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container">
        <div className="flex flex-col gap-8 pb-8 pt-6 md:py-8">
          <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            <section>
              <Link href="/" className="flex w-fit items-center space-x-2">
                <span className="font-bold">{siteConfig.name}</span>
                <span className="sr-only">Home</span>
              </Link>
            </section>
            <section className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-4">
              {siteConfig.footerNav.map((item) => (
                <div key={item.title} className="space-y-3">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <ul className="space-y-2.5">
                    {item.items.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          target={link?.external ? "_blank" : undefined}
                          rel={link?.external ? "noreferrer" : undefined}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.title}
                          <span className="sr-only">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            {/* <section className="space-y-3">
              <h4 className="text-base font-medium">
                Subscribe to our newsletter
              </h4>
              <Input />
            </section> */}
          </section>
          <section className="flex items-center space-x-4">
            <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
              Built by{" "}
              <Link
                href="https://x.com/iboughtbed"
                target="_blank"
                rel="noreferrer"
                className="font-semibold transition-colors hover:text-foreground"
              >
                iboughtbed
                <span className="sr-only">Twitter</span>
              </Link>
              .
            </div>
            <div className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  }),
                )}
              >
                <Icons.gitHub className="size-4" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </Link>
              <ModeToggle />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
