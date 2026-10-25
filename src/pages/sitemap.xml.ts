import type { APIRoute } from "astro";
import { getLastUpdate } from "../lib/lastUpdate";

// the ranking is the only page; lastmod tells crawlers when the data changed
export const GET: APIRoute = async ({ site }) => {
  const lastUpdate = await getLastUpdate();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL("/", site)}</loc>${lastUpdate ? `\n    <lastmod>${lastUpdate.date}</lastmod>` : ""}
    <changefreq>daily</changefreq>
  </url>
</urlset>
`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
