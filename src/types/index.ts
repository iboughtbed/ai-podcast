// Utility for layout

// Application

export type FeedItem = {
  title: string;
  description: string;
};

export type Feed = {
  items: FeedItem[];
};

export type PodcastScript = {
  name: string;
  text: string;
}[];
