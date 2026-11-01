import type { APIRoute } from "astro";
import { getLastUpdate } from "../lib/lastUpdate";

// lastmod tells crawlers when the ranking data changed
export const GET: APIRoute = async ({ site }) => {
  const lastUpdate = await getLastUpdate();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL("/", site)}</loc>${lastUpdate ? `\n    <lastmod>${lastUpdate.date}</lastmod>` : ""}
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>${new URL("/about", site)}</loc>
  </url>
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
