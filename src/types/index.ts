import type { Icons } from "~/components/icons";

// Utility for layout

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

// Application

export type FeedItem = {
  title: string;
  description: string;
};

export type Feed = {
  items: FeedItem[];
};

export type PodcastSegment = {
  name: string;
  text: string;
};

export type PodcastScript = PodcastSegment[];

export type PodcastBranch = {
  branch: number;
  dialogue: PodcastSegment[];
  title: string;
};
