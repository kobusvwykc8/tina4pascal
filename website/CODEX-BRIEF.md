# Brief for Codex — Tina4Pascal marketing site

You're building out the **public marketing website** for Tina4Pascal, in
`website/`. A parallax hero already exists and works well — **build the rest of
the landing page around it.** Keep it static, hand-rolled, and gorgeous.

---

## 1. Context you need

- **Tina4Pascal** is a Free Pascal framework for **HTML-driven native apps**: the
  UI is HTML + CSS, the app is an event loop, and it compiles to **one ~1.3 MB
  native binary per target** — macOS, Windows, Linux (x64/arm64), iOS, Android,
  plus smartwatch and **Tina4J** (the JS sibling). No browser embedded, no widget
  toolkit. It's the Free Pascal sibling of **Tina4Delphi**.
- **Tina4 Studio** is the IDE for building Tina4Pascal apps. It is an
  **installable desktop program** (Windows / macOS / Linux). Projects are
  **local** on the user's machine (cloud is a *future* maybe — do **not** build
  any auth/accounts now). The mockups for the Studio live in
  [`ide/mockups/`](ide/mockups/) — look at them for the product story and vibe.
- **Identity:** a warm **African-savanna sunset** with a **pink flamingo** (the
  Tina4 mascot) and a **cheetah** (speed). Magenta/pink accent. This identity is
  for the **framework site**, not just the Studio — lean into it.

## 2. What already exists — DO NOT REBUILD

The **parallax hero** is done and signed off. Treat it as fixed:

- `index.html` — the `<section class="phero">…</section>` block (7 layered
  images + copy + feature rail).
- `css/styles.css` — everything under the `---- parallax hero ----` comment
  (`.phero`, `.phero-stage`, `.player`, `.phero-copy`, `.phero-rail`, the
  `btn-magenta` / `btn-glass` buttons, etc.).
- `js/main.js` — the scroll-parallax script (`#phero-stage` layers, `PIVOT`/`K`).
- `images/Parallax - 0X.png` — the 7 depth layers.

**Do not change the hero's markup, its parallax CSS, or `main.js`'s parallax
logic.** You may *read* its tokens/classes and reuse them for visual
consistency. If you add JS, add it without disturbing the parallax IIFE.

## 3. Your scope — build the page BELOW the hero

`index.html` currently has placeholder sections after the hero (`#features`,
`#examples`, `#ide-teaser`) with `TODO` copy. **Replace/expand them** into a real
marketing landing page. Suggested sections, top to bottom:

1. **Why Tina4Pascal** — three pillars: *HTML drives everything* · *one tiny
   native binary (~1.3 MB)* · *pure Free Pascal, no browser/runtime*.
2. **One codebase, every target** — the signature section. A visual **target
   matrix**: macOS, Windows, Linux x64/arm64, iOS, Android, smartwatch, Tina4J.
   Make this feel alive (e.g. a "deploy to…" strip). This is the money shot.
3. **Meet Tina4 Studio** — the IDE, as an **installable app**. Tell its story
   using the mockup screens in `ide/mockups/` (prompt-to-app with your choice of
   AI — Claude / Codex / Cursor / local; Pascal **beside the live app**; edit the
   HTML on the **running** app; global CSS; element→handler wiring; a `Ctrl-K`
   command palette). Primary CTA: **Download for macOS / Windows / Linux**.
   (Downloads can be placeholder `#` links for now.)
4. **Examples** — a gallery: lava lamp, canvas 2D, calculator, datepicker, 3D.
   Use screenshots/GIFs; put any new images in `images/`.
5. **The Tina4 family** — sibling of Tina4Delphi; Tina4J and the
   python/php/ruby/node stacks.
6. **Get started** — install/quick-start, links to docs and GitHub
   (`https://github.com/tina4stack/tina4pascal`).
7. **Footer.**

Copy is currently placeholder — write real, tight marketing copy. The mockup's
voice is playful and confident ("The *really* clean IDE for Tina4Pascal",
"It's magic", DESIGN · CODE · BUILD · DEPLOY, SIMPLE · POWERFUL · PRODUCTIVE ·
CROSS-PLATFORM). Match that energy without overdoing it.

## 4. OUT OF SCOPE — owned by another session

- **The IDE launcher / project browser / "recent projects" dashboard** (the
  start screen you see *inside* the installed Studio, reading local projects).
  That's being designed separately. **Don't build a projects browser or any
  local-project listing.** You may keep an **"IDE" teaser** section that links to
  the ideation page at `ide/` — leave it a simple teaser + link.
- No auth, no accounts, no backend, no build tooling.

## 5. Design system

Extend the existing tokens in `css/styles.css` (`:root`) — don't fork them:

- **Accent:** flamingo magenta `#e5157f` (hover `#c20f6b`), bright `#ff3ea5` for
  highlights. Warm sunset oranges/golds as secondary. Deep navy ink for text on
  light.
- **Surfaces:** light theme is the default (`--bg #fbfaf7`, `--surface #fff`,
  text `--text #15162e`); a dark theme is already defined — keep both working.
- **Motifs from the mockup:** frosted **glass panels** (angled translucent
  cards), the DESIGN/CODE/BUILD/DEPLOY vertical rail, the bottom feature rail.
  Reuse where they fit; don't cargo-cult.
- System font stack (already set). Keep it clean and spacious; the hero does the
  drama, the body should breathe.

## 6. Technical constraints

- **Vanilla HTML/CSS/JS only** — no framework, no bundler, no build step. It must
  open by double-clicking `index.html` and work offline.
- **Responsive, mobile-first.** 16 px side gutters, no horizontal scroll at phone
  width. The hero must still look good on mobile (test it).
- **Theming:** respect the existing light/dark tokens.
- **Motion:** honour `prefers-reduced-motion` for anything you animate (the hero
  already does).
- **Accessibility:** semantic landmarks, alt text, visible focus states, AA
  contrast (mind text over imagery — use overlays/shadows like the hero does).
- **Performance:** the 7 parallax PNGs are ~11 MB total. If you touch images,
  **convert new/large images to WebP** and lazy-load below-the-fold media. Don't
  bloat the page.
- Keep the file layout: page sections in `index.html`, styles in
  `css/styles.css`, any new script appended to `js/main.js` (or a new file in
  `js/`) without touching the parallax code.

## 7. Assets & references

- Logo: `images/tina4pascal-logo.svg` / `.png`; mascot `images/tina4-robot-avatar.svg`.
- Studio story & screens: `ide/mockups/*.png` (and the interactive
  `ide/mockups/index.html`).
- Framework facts & tagline: the repo root `README.md`.
- Preview locally: `cd website && python -m http.server 8080` (or any static
  server) — the parallax needs a server/file load to run.

## 8. Definition of done

- A complete, responsive marketing landing page below the untouched hero,
  covering the sections in §3 with real copy.
- Light **and** dark themes both look right; reduced-motion respected; no
  horizontal scroll on mobile; no console errors.
- The hero (markup, parallax CSS, `main.js` parallax) is byte-for-byte unchanged.
- No projects-browser / launcher UI (that's the other session's).
