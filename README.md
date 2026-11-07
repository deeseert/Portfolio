# Portfolio

My personal site. A single page built with Next.js as a static export, hosted on GitHub Pages.

## Run it

```bash
nvm use
pnpm install
pnpm dev
```

## Build it

```bash
pnpm lint
pnpm build
```

The static site ends up in `out`. GitHub Pages serves it from `/Portfolio`, so the deploy workflow sets `NEXT_PUBLIC_BASE_PATH=/Portfolio` when it builds. Pushing to `main` deploys it.

## Where things live

- `src/content` holds the copy, links and image details.
- `src/components` holds the sections. Everything is server rendered, so the page reads fine without scripts. Only `site-header` and `site-effects` run in the browser.
- `src/app/globals.css` holds the design. It relies on scroll timelines, container units and masks, so it is one component layer on top of Tailwind's reset and tokens.
- `public` holds the images and the CV.
