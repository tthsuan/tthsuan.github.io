# Tz-Hsuan Tseng — Personal Website

An English-language academic website for conservation researcher Tz-Hsuan Tseng, built with Astro and deployed to GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

## Updating content

- Publications: `src/content/publications/`
- Research themes: `src/content/research/`
- Field projects: `src/content/projects/`
- Photography entries: `src/content/photography/`
- Page copy: `src/pages/`

The published, optimized photographs are stored in `public/media/`. Original photographs remain outside version control in `public/images/`.

## Deployment

Push the `main` branch to the public repository `tthsuan/tthsuan.github.io` and select **GitHub Actions** as the Pages source. The included workflow builds and publishes the site to `https://tthsuan.github.io/`.
