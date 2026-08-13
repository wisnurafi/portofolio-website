# Design: Wisnu Rafi Portfolio — Off-Grid Operator

## Visual world

A personal terminal belonging to someone who works below the surface: C++ systems engineer by contract, red team operator by night. The interface is a corrupted dossier — an underground operator board taped together from memory dumps, disassembly listings, encrypted comms, and field notes. It should feel like the visitor accidentally accessed a live session on a machine that was never supposed to be found.

The aesthetic is darknet underground, not corporate cyber. No clean dashboards. No symmetrical grids. Everything is slightly off: panels overlap, text decodes, signals glitch, the screen breathes.

## Mode

**Experience** — the visitor is inside the artifact. The interface recedes behind atmosphere, but content stays readable.

## Materials

- Phosphor CRT screen, heavy vignette, scanlines, signal noise.
- Taped/stapled paper panels with real paper damage: torn edges (jagged clip-path), fold creases (hard light-shadow gradient lines), crumple (feTurbulence diffuse-lighting relief), dog-eared corners, fiber noise, and ink patina.
- The room is the board: an interrogation room. Near-black plaster wall (`#040404`) with coarse+fine grain and hairline cracks that only read inside light. The pinned evidence cards are the room's only light sources — every card throws a soft warm pool on the wall behind it (accent-tinted), casts a soft wall shadow, and the red yarn runs from the cards' pin heads toward the ambient node field, flaring up wherever it crosses a light pool. The desk-lamp cursor sweep lights yarn and wall texture as it passes.
- Amber/cyan/red phosphor traces as the only color.
- Monospace voice for all functional text; a single compressed display face for huge statements.
- Photographic absence: the operator is represented by the hooded avatar, never a real face.

## Color

Background: near-black `#030405`.
Surface: deep charcoal `#0a0c0e`.
Borders: low-luminance `#1a1d21`.
Text: warm paper `#d8cfc4`.

Accents — desaturated case-file inks, never neon phosphor:
- Brass / aged amber: `#c9973f` (primary caution / highlights).
- Sage trace: `#7fae9e` (live signals / ok-state).
- Stamp red: `#b3554a` (alerts / threat markers).
- Dusty mauve: `#9c6f8e` (encrypted / classified).
Glow variants are pre-lit lighter steps of the same inks (`#d9b26a`, `#a3c9bb`, `#cc8377`, `#bb97ad`) — used for status tags and glow text.

No gradients on text. No hard offset shadows. Glows are phosphor bloom, not decoration.

## Typography

- Display / headings: `Space Grotesk`, uppercase, tight tracking, heavy weight.
- Body / data: `Geist Mono` for everything that is code, log, label, or measurement.
- Body prose: `Space Grotesk` at comfortable size, but wrapped in a panel that reads like a scanned note.

## Motion principles

- Decode: text appears as if decrypted, not typed.
- Glitch: occasional horizontal slice displacement on hover and entry.
- Scan: a single vertical phosphor line travels the viewport on loop.
- Interference: background noise layer with subtle opacity modulation.
- Float: panels drift very slightly against each other on scroll.
- No identical fade-up on every section. Entrances should feel discovered, not choreographed.

## Layout

- Hero is a full-screen boot sequence: status log on the left, operator portrait on the right, threat clock at bottom.
- Sections are asymmetric collages: some panels span wide, some are narrow strips, some slightly rotated (1–2deg), some overlap.
- No uniform grid. Content dictates panel size.
- Navigation is a top status bar, not a centered menu.

## Components

- `DossierPanel`: main surface unit. Hard border, slight rotation option, phosphor border glow on hover.
- `StatusTag`: small pill/lozenge in amber/cyan/red.
- `DecodedText`: text that reveals character-by-character with glyph scramble.
- `AsmRain`: faint assembly instruction stream in background.
- `NoiseOverlay`: SVG film grain + scanlines.
- `HexTape`: strips of hex bytes used as decorative dividers.

## Accessibility

- Reduced motion disables all continuous animations.
- Contrast maintained for body text.
- Keyboard focus ring in cyan.
- Skip-to-content link hidden until focused.
