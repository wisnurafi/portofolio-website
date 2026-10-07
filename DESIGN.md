# Design: wisnu.rafi — system24 calm

## Concept

A personal terminal that stays out of the way. The visual language is borrowed
from the system24 Discord theme: monochrome gray surfaces, hairline labeled
panels, monospace everything, zero decoration. The site should feel like a calm
workspace, not a demo reel.

## Rules

1. **Dark only.** One background, two panel tones, all in oklch gray.
2. **One accent.** Purple (`oklch(70% 0.12 310)`) for interactive highlights and
   the one word in the headline that matters. Green only for live status dots.
3. **DM Mono for everything.** No display font, no serif, no second voice.
4. **Square corners.** No border radius anywhere.
5. **One animation.** A single calm reveal (fade + 20px rise). Accordions open
   with a soft max-height ease. Nothing else moves.
6. **Show, don't list.** Project rows expand to real screenshots pulled from each
   repo's GitHub social preview, plus a full description, tags, and links.
7. **Calm is not flat.** The hero leads with a point of view
   ("I trust a bug after I can reproduce it twice."), the changelog treats a
   career like release notes, and the status bar works like a tmux window list
   that tracks the section you are reading.

## Anti-patterns (rejected during design)

Grid backgrounds, pill badges, fake code comments, em-dashes in copy, generic
status pills, marquee tickers, custom cursors, magnetic buttons, horizontal
scroll gimmicks. If it looks like a template, it does not ship.

## Layout

Fixed topbar (brand, section links, open-for-work chip) and fixed status bar
(visitor-local clock with timezone label, active-section window list, version).
Hero with oversized statement headline, faint oversized `wr` watermark, fact box
(base / focus / shipped). Then stacked labeled panels: profile, changelog,
expertise, work, stack, contact. Footer, then the status bar.

## Content sources

- Copy: written with the owner, in his voice.
- Project images: `https://opengraph.githubassets.com/<hash>/<owner>/<repo>`,
  resolved per repo from its `og:image` meta tag.
- Clocks: hero clock is always Asia/Jakarta (labeled `wib`); the status bar
  clock follows the visitor's timezone via `Intl`.
