import type { FooterItem, MainNavItem } from "~/types";

const links = {
  instagram: "https://instagram.com/prllx.podcast",
  github: "https://github.com/iboughtbed",
};

export const siteConfig = {
  name: "Parallax Podcast",
  url: "https://iboughtbed-ai-podcast.vercel.app",
  ogImage: "https://iboughtbed-ai-podcast.vercel.app/og.png",
  description: "Daily Interactive AI Podcast",
  links,
  mainNav: [
    { title: "Episodes", href: "/#episodes" },
    { title: "Contact", href: "/" },
    { title: "About", href: "/" },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Help",
      items: [
        { title: "Contact", href: "#", external: false },
        { title: "Terms", href: "#", external: false },
        { title: "Privacy", href: "#", external: false },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
        {
          title: "TikTok",
          href: links.instagram,
          external: true,
        },
        {
          title: "GitHub",
          href: links.github,
          external: true,
        },
      ],
    },
    {
      title: "Resources",
      items: [{ title: "Feature requests", href: "#", external: false }],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "#", external: false },
        { title: "Blog", href: "#", external: false },
      ],
    },
  ] satisfies FooterItem[],
};

export type SiteConfig = typeof siteConfig;
