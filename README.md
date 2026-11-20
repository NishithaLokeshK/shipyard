# ShipYard

A product-catalog storefront built with Next.js + TypeScript.

- **Live site:** [https://NishithaLokeshK.github.io/shipyard/](https://NishithaLokeshK.github.io/shipyard/)
- **Lighthouse Performance Score:** 100 (Mobile)

![Lighthouse Score](public/lighthouse_score.png)

## What it does

Browse a product grid and open a detail page for each product. Optimized with `next/image`, `next/font`, lazy loading, priority above-the-fold image loading, resilient loading/error states, and automated GitHub Pages CI/CD deployment.

## Key Optimizations & Features

- **Lighthouse 90+ Target:** Achieved **100/100 Mobile Performance**, 95 Accessibility, 92 Best Practices, and 100 SEO.
- **Priority Image Loading:** Added `priority` prop to the main product image in `app/products/[id]/page.tsx` for fast Largest Contentful Paint (LCP = 1.1s).
- **Layout Shift Elimination:** Configured `next/image` with explicit width/height reservations to eliminate Cumulative Layout Shift (CLS = 0).
- **Resilient Route States:**
  - `app/loading.tsx`: Resilient loading placeholder while route segments stream.
  - `app/error.tsx`: Client component error boundary with interactive retry button.
  - `app/not-found.tsx`: Friendly 404 page for missing products.
- **Automated Deployment:** GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys static export to GitHub Pages on every push to `main`.

## Run locally

```bash
npm install
npm run dev
```

Build static export:
```bash
npm run build
npx serve out
```
