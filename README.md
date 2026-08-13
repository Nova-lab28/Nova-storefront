# Nova Storefront

A production-ready starting storefront for Nova, wired to the existing Supabase commerce backend.

## 1. Configure

Copy `.env.example` to `.env` and fill in the Nova Supabase project values.

The public Supabase key is safe for browser use when Row Level Security is correctly configured. Never put a Supabase service-role key in this project.

## 2. Run locally

```bash
npm install
npm run dev
```

## 3. Build

```bash
npm run build
```

## 4. Cloudflare Pages

Cloudflare Pages can connect this repository to GitHub and automatically build/deploy changes.

Suggested settings for this Vite app:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Set the `VITE_*` values as Cloudflare Pages environment variables.

## Backend integration

This storefront uses:
- `nova-products` for the public catalogue
- Supabase Auth for customer magic-link authentication
- `nova-checkout` for authenticated order creation

Payment-provider redirect/confirmation behavior can be added once the production payment credentials and exact payment flow are configured.

## Currency note

Nova's current commerce tables store transaction amounts in ZAR (`*_zar`). The business growth target can be USD without rewriting existing transaction history. Do not fabricate USD conversions for historical orders; use a dated FX rate when financial reporting requires conversion.
