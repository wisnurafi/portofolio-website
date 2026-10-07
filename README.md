# wisnu.rafi — Portfolio

Personal portfolio of Wisnu Rafi, Security Engineer at BeyondSoft Singapore.
Built with Next.js 16, React 19, and hand-written CSS. No CSS framework, no icon
library, no animation library.

## Design

`system24 calm` — a quiet, Discord-inspired dark theme. DM Mono everywhere,
oklch grays, one purple accent, square corners, thin labeled panels. See
`DESIGN.md` for the full concept.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — eslint

## Environment

Copy `.env.example` to `.env.local` and set your production URL:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for metadata and the Open Graph base URL.

## Structure

```
src/
  app/
    page.tsx            # composition
    layout.tsx          # DM Mono font + metadata
    globals.css         # the entire design system (custom CSS)
    opengraph-image.tsx # dynamic OG card, system24 styled
  components/
    topbar.tsx          # fixed header
    statusbar.tsx       # fixed footer bar: live visitor-time clock + section tracker
    loader.tsx          # quick boot overlay
    reveal.tsx          # one calm scroll reveal (IntersectionObserver)
    jakarta-clock.tsx   # hero clock, always Asia/Jakarta
    hero.tsx            # statement headline
    profile.tsx         # now / past / lane
    changelog.tsx       # career as release notes, expandable
    expertise.tsx
    work.tsx            # 6 projects, expandable with screenshots
    stack.tsx
    contact.tsx         # email + github only
    footer.tsx
  lib/
    data.ts             # projects, changelog, expertise, stack
```

## Notes

- Project screenshots are hotlinked from each repo's GitHub social preview
  (`opengraph.githubassets.com`). If a repo gets a custom social image, the
  portfolio picks it up automatically.
- The old evidence-board design was fully removed in the `feat/redesign-system24`
  branch. Nothing from it remains.
