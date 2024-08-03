import { relations, sql } from "drizzle-orm";
import {
  json,
  pgEnum,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { episodeLanguages } from "~/lib/constants";
import { generateId } from "~/lib/utils";
import type { PodcastSegment } from "~/types";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `ai-podcast_${name}`);

export const episodeLanguageEnum = pgEnum("episode_language", episodeLanguages);

export const episodes = createTable("episode", {
  id: varchar("id", { length: 255 })
    .$defaultFn(() => generateId())
    .primaryKey(),
  title: varchar("title", { length: 60 }).notNull(),
  episodeLanguage: episodeLanguageEnum("episode_language").notNull(),
  baseScript: json("base_script").$type<PodcastSegment[]>().notNull(),
  audio: varchar("audio", { length: 1023 }).notNull(),
  audioKey: varchar("audio_key", { length: 1023 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const podcasts = createTable("podcast", {
  id: varchar("id", { length: 255 })
    .$defaultFn(() => generateId())
    .primaryKey(),
  authorId: varchar("author_id", { length: 255 }).notNull(),
  title: varchar("title", { length: 60 }).notNull(),
  description: varchar("description", { length: 200 }).notNull(),
});

export const podcastsRelations = relations(podcasts, ({ many }) => ({
  episodes: many(customEpisodes),
}));

export const customEpisodes = createTable("customEpisode", {
  id: varchar("id", { length: 255 })
    .$defaultFn(() => generateId())
    .primaryKey(),
  podcastId: varchar("podcast_id")
    .notNull()
    .references(() => podcasts.id),
  title: varchar("title", { length: 60 }).notNull(),
  episodeLanguage: episodeLanguageEnum("episode_language").notNull(),
  baseScript: json("base_script").$type<PodcastSegment[]>().notNull(),
  audio: varchar("audio", { length: 1023 }).notNull(),
  audioKey: varchar("audio_key", { length: 1023 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

// types

export type Episode = typeof episodes.$inferSelect;
export type NewEpisode = typeof episodes.$inferInsert;

export type CustomEpisode = typeof customEpisodes.$inferSelect;
export type NewCustomEpisode = typeof customEpisodes.$inferInsert;

export type Podcast = typeof podcasts.$inferSelect;
export type NewPodcast = typeof podcasts.$inferInsert;
