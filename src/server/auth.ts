import { createClerkClient } from "@clerk/backend";
import { currentUser } from "@clerk/nextjs/server";
import { cache } from "react";

import { env } from "~/env";

export const getCachedUser = cache(currentUser);

export const clerkClient = createClerkClient({
  secretKey: env.CLERK_SECRET_KEY,
});
