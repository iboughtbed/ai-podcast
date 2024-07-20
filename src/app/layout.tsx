import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";

import { Analytics } from "~/components/analytics";
import { ThemeProvider } from "~/components/providers";
// import { SmoothScroll } from "~/components/smooth-scroll";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { Toaster as Sonner } from "~/components/ui/sonner";
import { siteConfig } from "~/config/site";
import { fontMono, fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Podcast", "AI Podcast", "Parallax Podcast"],
  authors: [
    {
      name: "iboughtbed",
      url: "https://github.com/iboughtbed",
    },
  ],
  creator: "iboughtbed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@iboughtbed",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen overflow-x-hidden font-sans antialiased",
            fontSans.variable,
            fontMono.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">{children}</div>
            <Analytics />
            {/* <SmoothScroll /> */}
            <TailwindIndicator />
            <Sonner richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
