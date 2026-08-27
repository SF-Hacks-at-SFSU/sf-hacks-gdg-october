# SF Hacks × GDG AI Hackathon

Landing page for the October 2, 2026 SF Hacks × GDG mini AI hackathon.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm test
```

## Deploy to Vercel

This is a standard Next.js project and needs no environment variables.

1. Push this directory to a GitHub repository.
2. Import that repository from the Vercel dashboard.
3. Keep the detected framework as **Next.js** and deploy with the default settings.
4. In the Vercel project, open **Settings → Domains** and add `gdg.sfhacks.io`.
5. Add the exact CNAME record Vercel displays to the `sfhacks.io` DNS zone in Cloudflare.

All Apply buttons point to `https://app.sfhacks.io/`.
