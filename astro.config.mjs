// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://thousandify.renan.foo",
  output: "server",
  // pages are rendered once and cached on Vercel's CDN until the scraper
  // revalidates them (a request with the bypass token in the
  // x-prerender-revalidate header); the expiration is a fallback in case the
  // scraper's request never arrives
  adapter: vercel({
    isr: {
      bypassToken: process.env.ISR_BYPASS_TOKEN,
      expiration: 60 * 60 * 12,
    },
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      SUPABASE_URL: envField.string({ context: "server", access: "secret" }),
      SUPABASE_PUBLISHABLE_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
