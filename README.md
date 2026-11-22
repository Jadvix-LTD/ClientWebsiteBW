# Beaver and Weaver – Basic Website

Corporate website for **Beaver and Weaver Engineering Services Ltd. (BWENSE)**: BIM, CAD and engineering detailing services for the UK, Europe and North America.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Every page is statically generated; the only server code is the enquiry form endpoint.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

Copy `.env.example` to `.env.local` and fill in the values you have.

## Where to edit content

| What | File |
| --- | --- |
| Company name, email, phone, company number, markets | `lib/site.ts` |
| Services (cards, service pages, footer, form dropdown, sitemap) | `lib/services.ts` – add an object to add a service |
| Benefits, 7-stage process, industries, FAQ | `lib/content.ts` |
| Page copy | `app/**/page.tsx` |
| Illustrations | `public/images/*.svg` |
| Logo, mark and favicons | `public/brand/`, `app/icon.png`, `app/apple-icon.png` |
| Colours and fonts | `app/globals.css` (palette sampled from the logo), `app/layout.tsx` (Montserrat + Source Sans 3) |

## Design direction

Polished with the [unslop](https://github.com/heydamir/unslop) skill by Damir Sokolovsky (CC BY 4.0).

- **Character:** exact, dependable, quietly technical. **World:** the drawing office.
- **One moment:** the dark hero with the coordinated 3D model is the only place with rich colour. Everything else stays quiet: an ink ramp tinted toward the logo navy (`app/globals.css`), royal blue only for actions, cyan only in the model and the logo.
- **Signature:** structural grid bubbles on a dash-dot gridline, used only for the seven-stage process (`.gridline`, `.bubble`).
- **Rules to keep:** sentence case everywhere, heading weight 500, hairline borders instead of shadows, no gradients or coloured shadows in the UI, 4px spacing grid, buttons 8px radius and cards 12px.

## Pages

`/` · `/about` · `/services` · `/services/[slug]` (6) · `/industries` · `/careers` · `/contact` · `/privacy-policy` · `/cookie-policy`

## SEO

- Per-page titles, descriptions and canonical URLs (`lib/seo.ts`)
- Open Graph / Twitter cards with a generated share image (`app/opengraph-image.tsx`)
- JSON-LD: ProfessionalService, Service, BreadcrumbList, FAQPage
- `sitemap.xml`, `robots.txt`, web manifest
- Semantic headings (one H1 per page) and descriptive alt text on every image
- Set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying

## Enquiry form

`POST /api/enquiry` validates the submission (name, company, business email, service, description, deadline, consent, up to 5 files) and emails it, with attachments, through SMTP. Configure `SMTP_*`, `ENQUIRY_TO` and `ENQUIRY_FROM`.

- In development without SMTP, enquiries are printed to the server console.
- In production without SMTP, the form returns a friendly error pointing to the email address.
- **Hosting note:** serverless platforms limit request size (Vercel: ~4.5 MB). For large drawings, host on a Node server/VPS or switch the upload to direct-to-storage (e.g. S3 pre-signed URLs). Limits live in `lib/enquiry.ts`.

## Analytics & consent

Google Analytics loads **only after** a visitor clicks "Accept analytics". Set `NEXT_PUBLIC_GA_ID` to enable it; with no ID, no banner is shown and no analytics cookies are set. Search Console verification: `NEXT_PUBLIC_GSC_VERIFICATION`.

## Before launch – needs client input

- [ ] Confirm domain and business email (placeholder: `enquiries@bwense.com`)
- [ ] Phone number, registered address and Companies House number (`lib/site.ts`)
- [ ] Review mission, vision, values and service wording
- [ ] Confirm the software listed per service matches the team's actual tools
- [ ] Have the privacy and cookie policies reviewed
