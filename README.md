# Fountain Bridge Website

Next.js 14 App Router website for Fountain Bridge, a community-based nonprofit in Buea, Cameroon focused on health outreach, education support, women and youth empowerment, elderly inclusion, and support for vulnerable populations.

## Research Summary

Sources checked before implementation:

- Facebook public page: `https://www.facebook.com/fountainbridge1/`
  - Visible public search snippets identify the page as `Fountain Bridge | Buea`.
  - Public snippets show roughly `476 likes` and `2 talking about this` on Facebook/Reels.
  - Public description snippet: the mission is to promote the wellbeing of vulnerable populations by providing health information, linking people to quality healthcare, empowering people, and supporting education.
  - Visible post snippets included Back to School Project 2024 and an activity held on September 5, 2024 at the Fountain Bridge head office in Buea, Cameroon.
  - No-auth browsing did not expose reliable full profile-photo, cover-photo, album, or events data. The site therefore embeds the Facebook Page Plugin for live no-auth content and uses Facebook links as the source of truth for newest media.
- Web search:
  - LinkedIn lists Fountain Bridge as a nonprofit organization headquartered in Buea, South West Region, founded in 2022, with a website listed as `https://fountain-bridge.org`.
  - `https://fountain-bridge.org/` is currently in maintenance mode with the message that the site will be available soon.
  - A public health conference speaker page lists Ngwanjoh Lengouh Njeunui as founder of Fountain Bridge and describes local health outreaches for vulnerable populations.
- Local authoritative folder:
  - Read all files in `/home/openclaw/Desktop/CollectedSiteData/foun`.
  - The refreshed folder contained `site-data.json`, `drafts/lengouhhilda-gmail-com.json`, and uploaded images for branding, hero, impact, programs, projects, and leadership.
  - This local folder was treated as the primary brand/content source.

## Design Decisions

- Palette follows the collected brand colors: deep blue `#2358D6`, green `#12805C`, warm gold, linen, and clean white.
- Typography uses Inter for clear UI text and Merriweather for a more credible editorial nonprofit voice.
- The content avoids Lorem Ipsum. Where source data was incomplete, copy was written from the organization mission, programs, and public research.
- Donation details use the collected payment/contact information and ask visitors to coordinate before donating.
- Gallery and program visuals use selected local images from the refreshed `foun/` upload folder.
- Facebook is integrated only through no-auth methods: SDK script, Page Plugin, Follow Button, and static links.

## Image Performance Update

The production image pass keeps all content, captions, filenames, and logo assets unchanged. Only non-logo uploaded JPG assets under `public/uploads/foun/` were recompressed in place.

Research applied:

- Next.js image documentation recommends `next/image` for responsive image delivery, modern format optimization, lazy loading, layout-stability handling, and placeholders.
- web.dev image performance guidance recommends lazy loading below-the-fold images so the browser can prioritize visible content.
- The active implementation therefore keeps `next/image`, adds explicit `sizes` values for responsive delivery, keeps the hero image eager with `priority`, lazy-loads normal content images through default browser behavior, and shows a branded loading state while each field/program/gallery/team image is still loading.

Asset result:

- Non-logo uploaded JPG payload changed from about `112.8 MB` to about `28.6 MB`.
- Approximate image payload saved: `84.2 MB`.
- Logo assets were intentionally skipped so association branding remains untouched.

Implementation notes:

- `src/components/LoadingImage.tsx` wraps `next/image` with a Fountain Bridge logo loading overlay and a fade-in transition.
- Existing page content is unchanged; page image render calls were switched to the wrapper only where public program, impact, gallery, hero, project, or team photos are displayed.
- If future uploaded photos are added, recompress them before deployment and keep the logo folder out of compression passes.

## Visitor Contact UX

The site includes a small client-side contact layer in `src/components/VisitorContactTools.tsx`.

Research applied:

- WhatsApp click-to-chat uses the official `https://wa.me/<international-number>?text=<encoded-message>` format so visitors can contact the organization without saving the number first.
- Browser `localStorage` persists across sessions but has no built-in expiry, so the popup stores a timestamp and suppresses itself for 10 days after the visitor clicks either `Later`, close, or the WhatsApp button.
- The back-to-top button uses the browser `window.scrollTo({ top: 0, behavior: "smooth" })` API and only appears after the visitor has scrolled down the page.

Implementation notes:

- The WhatsApp prompt appears on first visit, uses the association logo, and links to the public organization phone number from `src/data/site.ts`.
- A compact WhatsApp floating button remains available after the popup is dismissed.
- A separate back-to-top button appears in the lower-right corner after scrolling.
- No page copy or content data was changed for this UX layer.

## Tech Stack

- Next.js `14.2.35` with App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- Framer Motion for subtle section animation
- Google Fonts via `next/font`
- `next/image` remote image optimization
- Nodemailer for contact-form email delivery

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` for local overrides:

```bash
cp .env.example .env.local
```

Variables:

- `NEXT_PUBLIC_SITE_URL`: canonical site URL used for metadata.
- `NEXT_PUBLIC_FACEBOOK_PAGE_URL`: public Facebook page URL.
- `NEXT_PUBLIC_FACEBOOK_SHARE_URL`: fallback Facebook share URL.
- `SMTP_HOST`: SMTP server hostname, for example `smtp.gmail.com`.
- `SMTP_PORT`: SMTP port, usually `587` for STARTTLS or `465` for SSL.
- `SMTP_USER`: SMTP username.
- `SMTP_PASS`: SMTP password or app password.
- `CONTACT_FROM`: Sender identity shown on website contact emails.
- `CONTACT_TO`: Comma-separated recipient emails. Current intended recipients are `fountainbridge21@gmail.com,lengouhhilda@gmail.com`.

Do not commit `.env.local`; it contains private SMTP credentials and is ignored by `.gitignore`.

## Contact Form Email

The contact form in `src/components/ContactForm.tsx` posts to:

```text
POST /api/contact
```

The API route is implemented at:

```text
src/app/api/contact/route.ts
```

When a visitor submits the form, the route validates the name, email, topic, and message, then sends an email to `CONTACT_TO` using Nodemailer. The visitor's submitted email is set as `replyTo`, so Fountain Bridge can reply directly from the received message.

The private `.env.local` on the current server is configured with SMTP settings and `CONTACT_TO=fountainbridge21@gmail.com,lengouhhilda@gmail.com`. SMTP login was verified with `nodemailer.verify()` without sending a test message.

## Current Server Deployment

DNS records point to this server:

```text
ftnbridge.org      A      65.109.4.85
www.ftnbridge.org  CNAME  ftnbridge.org
```

The production Next.js app is currently running in tmux on port `3000`:

```bash
tmux attach -t fountain-bridge-site
```

Start command:

```bash
cd /home/openclaw/Desktop/fountain-bridge-association-nextjs
NEXT_PUBLIC_SITE_URL=https://ftnbridge.org PORT=3000 npm start
```

Current reachable URL:

```text
http://ftnbridge.org:3000
```

## Normal Ports and SSL

The server account used for this project cannot bind normal web ports directly:

```text
80  -> EACCES
443 -> EACCES
```

That means `http://ftnbridge.org` and `https://ftnbridge.org` require a root-level reverse proxy. Ready-to-use deployment files are included:

```text
deploy/Caddyfile
deploy/nginx-ftnbridge.org.conf
deploy/SSL_DEPLOYMENT.md
```

Recommended root-level setup is Caddy because it is open source and automatically obtains and renews Let's Encrypt certificates:

```bash
apt update
apt install -y caddy
cp /home/openclaw/Desktop/fountain-bridge-association-nextjs/deploy/Caddyfile /etc/caddy/Caddyfile
systemctl reload caddy
```

Alternative nginx + certbot instructions are documented in `deploy/SSL_DEPLOYMENT.md`.

## Vercel Deployment

1. Push this project to a Git repository or import the folder in Vercel.
2. Set framework preset to Next.js.
3. Add `NEXT_PUBLIC_SITE_URL` to the production domain if desired.
4. Deploy.

CLI deployment:

```bash
npx vercel --prod
```

## Folder Structure

```text
src/app/                 App Router pages and root layout
src/components/          Shared UI, navigation, Facebook widgets, contact form
src/app/api/contact/     Contact form email API route
src/data/site.ts         Central content, programs, team, gallery, events, links
deploy/                  Reverse proxy and SSL deployment handoff files
next.config.mjs          Image remote domain configuration
.env.example             Public environment variable placeholders
```

## Facebook Integration Notes

The site uses the Facebook JS SDK in `src/app/layout.tsx`:

```tsx
<Script
  async
  defer
  crossOrigin="anonymous"
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
  strategy="afterInteractive"
/>
```

Live feed widgets are rendered through a client component loaded with `dynamic(..., { ssr: false })` to avoid hydration issues. If Facebook blocks or delays SDK rendering, the component still shows a styled fallback card with a direct Follow button.

## Main Pages

- `/` Home
- `/about`
- `/programs`
- `/team`
- `/gallery`
- `/news`
- `/events`
- `/contact`
- `/donate`

## Verification

Run:

```bash
npm run lint
npm run build
```
