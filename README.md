# Tz-Hsuan Tseng — Personal Website

An English-language academic website for conservation researcher Tz-Hsuan Tseng, built with Astro and deployed to GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

## Updating content

- Publications: `src/content/publications/`
- Field projects: `src/content/projects/`
- Photography entries: `src/content/photography/`
- Page copy: `src/pages/`

Add personal photographs later by placing optimized image files in `src/assets/` or `public/images/`, then replace the relevant `PhotoPlaceholder` components.

## Deployment

Push the `main` branch to the public repository `tthsuan/tthsuan.github.io` and select **GitHub Actions** as the Pages source. The included workflow builds and publishes the site to `https://tthsuan.github.io/`.
