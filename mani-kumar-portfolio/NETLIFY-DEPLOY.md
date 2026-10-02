# Deploying this portfolio to Netlify

This is a TanStack Start (server-rendered) app. Netlify deploys it with
serverless functions — no extra configuration needed beyond the included
`netlify.toml`.

## Option A — Connect a Git repository (recommended)

1. Push this folder to a GitHub repository (e.g. https://github.com/Mani70K).
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `NITRO_PRESET=netlify npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. Every push to the repo redeploys the site.

## Option B — Netlify CLI

```bash
npm install
npm install -g netlify-cli
NITRO_PRESET=netlify npm run build
netlify deploy --prod --dir dist --functions .netlify/functions-internal
```

## Option C — Drag and drop (static only)

If you do NOT need server-side rendering, you can build once on your machine
(`NITRO_PRESET=netlify npm run build`) and drag the `dist` folder into
Netlify. Note: this serves only the pre-rendered shell; full SSR routing
requires Option A or B.

## Build output

- `dist/` — static assets (publish directory)
- `.netlify/functions-internal/server` — serverless function that renders pages

Reference: https://nitro.build/deploy/providers/netlify
