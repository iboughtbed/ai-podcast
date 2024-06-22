import { Client } from "@upstash/qstash";

import { env } from "~/env";

export const qstash = new Client({
  token: env.QSTASH_TOKEN,
});

export const queue = qstash.queue({
  queueName: "podcast-generation",
});
