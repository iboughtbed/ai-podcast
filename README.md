# AI Podcast

This is an automated AI podcast website build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

[![AI Podcast](./public/og.ong)](https://iboughtbed-ai-podcast.vercel.app/)

> **Warning**
> This project is still in development and is not ready for production use.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [NextAuth](https://next-auth.js.org)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **File Uploads:** [uploadthing](https://uploadthing.com)

## Features to be implemented

- [ ] Authentication with **NextAuth**
- [x] ORM using **Drizzle ORM**
- [x] PostgreSQL Database on **Supabase**
- [x] Redis and QStash on **Upstash**
- [x] File uploads with **uploadthing**
- [ ] Validation with **Zod**

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/iboughtbed/ai-podcast.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
