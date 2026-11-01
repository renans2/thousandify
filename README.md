# Thousandify

Top 1000 Spotify artists by monthly listeners, updated daily. Built with
[Astro](https://astro.build) and [Supabase](https://supabase.com), deployed on
Vercel with Incremental Static Regeneration: pages are rendered once and served
from the CDN until the scraper revalidates them after each daily run (or 12
hours pass).

## Setup

Create a `.env` file:

```sh
SUPABASE_URL=...
SUPABASE_PUBLISHABLE_KEY=...
```

On Vercel, also set `ISR_BYPASS_TOKEN` (a random string of at least 32
characters, e.g. `openssl rand -hex 32`) and redeploy. The scraper needs the
same value to revalidate the pages:

```sh
curl -H "x-prerender-revalidate: $ISR_BYPASS_TOKEN" https://thousandify.renan.foo/
```

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start the dev server at `localhost:4321`   |
| `npm run build`   | Build for Vercel (output in `.vercel/`)    |
| `npm run check`   | Type-check the project                     |
