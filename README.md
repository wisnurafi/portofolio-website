# Wisnu Rafi - Portfolio

Personal portfolio site for Wisnu Rafi, a Systems Software Engineer and Offensive Security Engineer. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with `tw-animate-css`
- **UI Primitives**: Radix UI, shadcn, `class-variance-authority`, `tailwind-merge`
- **Animation**: Framer Motion
- **Icons**: Hugeicons, Lucide React
- **Linting**: ESLint 9 (`eslint-config-next`)

## Project Structure

```
src/
├── app/                    # Next.js App Router entry
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page composition
│   ├── opengraph-image.tsx # Dynamic OG image
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout-level components
│   ├── shared/             # Reusable shared components
│   ├── ui/                 # UI primitives (shadcn-based)
│   ├── ScrollEffects.tsx   # Scroll-driven effects
│   └── TopNav.tsx          # Top navigation bar
├── sections/               # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Expertise.tsx
│   ├── Experience.tsx
│   ├── Stack.tsx
│   └── Contact.tsx
└── lib/                    # Utilities (e.g. cn helper)
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page auto-updates as you edit files under `src/`.

## Available Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint across the project        |

## Environment Variables

Create a `.env.local` file at the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=wsnfii60@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

`NEXT_PUBLIC_SITE_URL` is used as `metadataBase` and for Open Graph URLs in `src/app/layout.tsx`. If unset, it falls back to `https://example.com`.

The contact form posts to `src/app/api/contact/route.ts` and sends email through Resend. `RESEND_API_KEY` is required. `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are optional; the form sends to `wsnfii60@gmail.com` by default. Use a verified Resend domain for `CONTACT_FROM_EMAIL` in production.

## Fonts

Loaded via `next/font/google`:

- **Space Grotesk** - primary sans-serif (`--font-space-grotesk`)
- **Geist Mono** - monospace (`--font-geist-mono`)

## Deployment

The app is ready to deploy on any platform that supports Next.js 16. The recommended path is [Vercel](https://vercel.com/new). Set `NEXT_PUBLIC_SITE_URL` in the platform's environment settings before deploying.

```bash
npm run build
npm run start
```

## License

Open Source
