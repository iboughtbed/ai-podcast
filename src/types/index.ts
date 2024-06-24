// Utility for layout

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
