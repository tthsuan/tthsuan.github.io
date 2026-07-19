import type { APIRoute } from 'astro';

const routes = ['', 'research/', 'publications/', 'projects/', 'photography/', 'cv/'];

export const GET: APIRoute = () => {
  const urls = routes.map((route) => `<url><loc>https://tthsuan.github.io/${route}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
