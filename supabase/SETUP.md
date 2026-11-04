# Shared customer reviews (Supabase)

The site uses a small server-side API to store reviews in Supabase. The Supabase service-role key stays on the server. New reviews are private until Himal approves them in the Supabase dashboard. Customers edit or delete their own post using the private review ID and edit key created at submission time.

## 1. Create a Supabase project

Create a project at [supabase.com](https://supabase.com/). Open **SQL Editor**, create a query, paste all of [`schema.sql`](./schema.sql), and run it. This creates a private table with row-level security enabled and no direct access for website visitors.

## 2. Add server environment variables

In Supabase, open **Project Settings → API Keys** (or **Connect**) and copy the project URL and the server-only `secret` key (`sb_secret_…`). Add these to `.env.local` in the website folder:

```text
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SECRET_KEY=your-server-secret-key
```

Never put this secret in a `NEXT_PUBLIC_` variable, send it in chat, or commit it to GitHub. `.env.local` is ignored by Git. If your Supabase project only exposes the older JWT-based `service_role` key, set `SUPABASE_SERVICE_ROLE_KEY` to that value instead.

Restart the local site after saving `.env.local`. The feedback page will switch from browser-only storage to shared review storage when `/api/reviews` reports that the database is connected.

## 3. Configure Vercel

In the Vercel project, open **Settings → Environment Variables** and add `SUPABASE_URL` and `SUPABASE_SECRET_KEY` for **Production**, **Preview**, and **Development** as needed. Save them and redeploy so the server routes receive the values.

## 4. Approve customer reviews

Open **Table Editor → customer_reviews**. New rows have `is_published = false` and do not appear publicly. Read each comment, then set `is_published` to `true` to publish it. Set it back to `false` to hide it. If a customer edits a published review, it returns to the approval queue.

Customers can edit or delete their own review with the private ID and edit key shown after posting. They should save both somewhere safe; anyone who has both can change that review.

## Notes

- This database integration runs in Next.js server routes, so it requires the Vercel deployment (or another Next.js server). A GitHub Pages-only static export cannot run the `/api/reviews` routes.
- Until the Supabase environment variables are configured, the page falls back to reviews saved in the current browser only.
- The public review feed returns approved comments only. The service-role key and stored edit-key hashes are never returned by the API.
