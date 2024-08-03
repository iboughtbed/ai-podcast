"use server";

import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

import { openai } from "~/lib/openai";
import { db } from "~/server/db";
import { podcasts } from "~/server/db/schema";

const createPodcastSchema = z.object({
  prompt: z.string().min(2).max(1000),
});

// const podcastSchema = z.object({
//   authorId: z.string(),
//   title: z.string().min(2).max(60),
//   description: z.string().min(2).max(200),
// });

export async function createPodcast(
  input: z.infer<typeof createPodcastSchema>,
) {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("Unauthenticated");
    }

    const parsedInput = createPodcastSchema.parse(input);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You're a podcast director working at a startup that uses AI to create podcasts.
          You have to create a title and a description for a podcast user wants to create by evaluating their prompt.
          Generate a definitive, complete, and well-formatted title and description based on the prompt.
          The title should be at least 2 characters and a maximum of 60 characters.
          The description should be a minimum of 2 characters and a maximum of 200 characters.
          The response should be in JSON format.
          For example "{
            "podcast": {
              "title": "Daily news about digital business",
              "description": "Listen to the news about the hottest trends in technology, startups, and finance."
            }
          }"
          `,
        },
        {
          role: "user",
          content: parsedInput.prompt,
        },
      ],
      response_format: {
        type: "json_object",
      },
    });

    const choice = completion.choices[0];

    if (!choice?.message.content) {
      throw new Error("Failed to get respone from LLM");
    }

    const {
      podcast: { title, description },
    } = JSON.parse(choice.message.content) as {
      podcast: { title: string; description: string };
    };

    const data = await db
      .insert(podcasts)
      .values({ title, description, authorId: user.id })
      .returning({ id: podcasts.id });

    const podcast = data[0];

    if (!podcast) {
      throw new Error("Error inserting a row in podcasts table");
    }

    return {
      data: podcast,
    };
  } catch (err) {
    return {
      data: null,
    };
  }
}
