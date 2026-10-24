# Thousandify

Top 1000 Spotify artists by monthly listeners, updated daily. Built with
[Astro](https://astro.build) (server-rendered on every request) and
[Supabase](https://supabase.com), deployed on Vercel.

## Setup

Create a `.env` file:

```sh
SUPABASE_URL=...
SUPABASE_PUBLISHABLE_KEY=...
```

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start the dev server at `localhost:4321`   |
| `npm run build`   | Build for Vercel (output in `.vercel/`)    |
| `npm run check`   | Type-check the project                     |
