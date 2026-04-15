# NottsHack

This is a Next.js 16 App Router site configured to deploy on Cloudflare Workers using `@opennextjs/cloudflare`.

## Local Development

Install dependencies:

```bash
npm install
```

Run the standard Next.js dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare Preview

Preview the production build locally in the Cloudflare Workers runtime:

```bash
npm run preview
```

This runs an OpenNext build and starts a local Wrangler preview server.

## Deploy

Deploy the app to Cloudflare Workers:

```bash
npm run deploy
```

If you want Cloudflare env vars to remain managed in the dashboard, use:

```bash
npx opennextjs-cloudflare deploy -- --keep-vars
```

## Environment Variables

Set `NEXT_PUBLIC_SITE_URL` to the canonical public site URL so metadata and Open Graph URLs are stable in production.

Examples:

```bash
NEXT_PUBLIC_SITE_URL=https://nottshack.example.com
```

For local Workers preview, you can optionally add a `.dev.vars` file with:

```bash
NEXTJS_ENV=development
```

For production deployments on Cloudflare:

- Set build-time variables in the Cloudflare dashboard under build variables and secrets.
- Set runtime variables in the Cloudflare dashboard under Worker environment variables or secrets.
- Keep `.env*` and `.dev.vars` local; do not commit them.

## Useful Commands

```bash
npm run build
npm run preview
npm run deploy
npm run cf-typegen
```

## Notes

- `wrangler.jsonc` defines the Worker entrypoint and asset binding for the OpenNext output.
- `open-next.config.ts` enables the Cloudflare adapter configuration.
- `public/_headers` sets long-lived caching headers for `/_next/static/*` assets.

