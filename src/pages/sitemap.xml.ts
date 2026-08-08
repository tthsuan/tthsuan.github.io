import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const themes = await getCollection('research');
  const routes = ['', 'research/', ...themes.map((theme) => `research/${theme.id}/`), 'publications/', 'projects/', 'photography/', 'cv/'];
  const urls = routes.map((route) => `<url><loc>https://tthsuan.github.io/${route}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
