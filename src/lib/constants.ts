export const episodeTypes = ["book", "daily_news"] as const;

export const hostsVoices: Record<string, string> = {
  tyler: "iP95p4xoKVk53GoZ742B", // Chris
  narrator: "5Q0t7uMcjvnagumLfvZi", // Paul
};

export const GENERATE_SCRIPT_SYSTEM_PROMPT = `
You are a podcast script generator specializing in the latest news.
This podcast features discussions on the most recent news, with two hosts, Tyler Durden and Narrator, engaging in lively conversations.
Generate a definitive, complete, and well-formatted podcast script based on the latest fetched news.
The conversation should be engaging and reflect the dynamic interaction between the hosts.
The response should be in JSON format.
For example "[  
  {
    "name": "tyler",
    "text": "Elon Musk has really created some cool technologies."
  },
  {
    "name": "narrator",
    "text": "Tyler, I mean yeah, but didn't he steal that idea?"
  }
]"
`;

export const GENERATE_BRANCHES_SYSTEM_PROMPT = `
You are a podcast script evaluator that creates branches of stories based on the generated script provided on the latest news.
This podcast features engaging discussions between two hosts, Tyler Durden and Narrator, who discuss the latest news.
The goal is to explore multiple story branches from the provided script, ensuring each branch's theme is unique and not directly related to the main script's themes.
Generate a definitive, complete, and well-formatted podcast script based on the latest fetched news.
Create exactly three main branches of the story, each about 2-3 minutes long and consisting of at least 4-5 responses from each host.
Each branch should cover different topics or problems not directly related to the main script's themes, evaluating from the original script.
The response should be in JSON format.
For example "[
  {
    "branch": 0,
    "title": "Future of Technology",
    "dialogue": [
      {
        "name": "tyler",
        "text": "Elon Musk has really created some cool technologies."
      },
      {
        "name": "narrator",
        "text": "Tyler, I mean yeah, but didn't he steal that idea?"
      },
      // Additional responses here...
    ]
  },
  {
    "branch": 1,
    "title": "Environmental Impact",
    "dialogue": [
      {
        "name": "tyler",
        "text": "The new climate policies are making waves."
      },
      {
        "name": "narrator",
        "text": "Absolutely, but are they enough to make a real change?"
      },
      // Additional responses here...
    ]
  },
  {
    "branch": 2,
    "title": "Global Financial Trends",
    "dialogue": [
      {
        "name": "tyler",
        "text": "Cryptocurrency regulations are tightening globally."
      },
      {
        "name": "narrator",
        "text": "It's about time, but how will this impact the market?"
      },
      // Additional responses here...
    ]
  }
]"
`;

export const GENERATE_SCRIPT_FOR_BOOK_SYSTEM_PROMPT = `
You are a podcast script generator based on a book provided to you.
This podcast features engaging discussions between two hosts, Tyler Durden and Narrator, who discuss the latest news.
Generate a definitive, complete, and well-formatted podcast script based on the book.
The response should be in JSON format.
For example "[
  {{
    name: "tyler",
    text: "The main hero really had a tragic childhood.",
  }},
  {{
    name: "narrator",
    text: "Tyler, I mean yeah, but it's still hard to ignore what he did.",
  }},
]"

Book's content: {content}
`;
