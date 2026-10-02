# Brief: Tina4Pascal marketing website (parallax hero)

A self-contained brief for building a **public marketing website** for
**Tina4Pascal**, fronted by the **parallax hero** you're already making from the
savanna layer images. Everything you need is below — no outside context required.

---

## 1. What is Tina4Pascal? (you'll need this to write the copy)

**Tina4Pascal** is a **Free Pascal framework for building native apps whose UI is
just HTML + CSS.** You write the interface in HTML/CSS and the app logic in
Pascal; there's **no browser embedded and no widget toolkit**. It compiles to a
**single, tiny (~1.3 MB) native binary** for each platform.

The big ideas, in plain terms:

- **HTML drives everything.** The screen is HTML + CSS. Interactions are plain
  events (a click calls a Pascal procedure). No React, no components framework,
  no WebView.
- **One codebase, every target.** The *same* app builds for **macOS, Windows,
  Linux (x64 and arm64), iOS and Android** — with **smartwatch** and **Tina4J**
  (a JavaScript sibling) in the wider family. Write once, ship native everywhere.
- **Tiny & fast.** Each build is one self-contained native binary around 1.3 MB —
  no runtime to install, no browser to ship.
- **Pure Free Pascal.** Mature, compiled, cross-platform. Tina4Pascal is the Free
  Pascal sibling of **Tina4Delphi**, part of the broader **Tina4** family
  (which also has Python, PHP, Ruby and Node stacks).

Project home: `https://github.com/tina4stack/tina4pascal`.

## 2. What is Tina4 Studio?

**Tina4 Studio** is the **IDE for building Tina4Pascal apps** — an **installable
desktop program for Windows, macOS and Linux** (a normal download-and-install
app). Projects live **locally** on the user's machine (no accounts or cloud for
now). Its headline experiences, which you can turn into marketing copy:

- **Prompt to app** — describe what you want ("add a phone field") and it builds
  it, with your **choice of AI assistant** (Claude, Codex, Cursor, or a local
  model).
- **Pascal beside the live app** — your code on one side, the actual running app
  on the other, updating as you go.
- **Design on the running app** — edit the HTML of the live app in place.
- **Global CSS, a command palette (Ctrl-K), and wiring** that links a button
  straight to the Pascal procedure that handles it.

The site should have clear **"Download Tina4 Studio for macOS / Windows / Linux"**
calls to action (placeholder `#` links are fine for now).

## 3. Brand & identity

- **Scene:** a warm **African-savanna sunset** — the same world as your parallax
  layers. A **pink flamingo** is the mascot (it should read as being **in front
  of** the cheetah); a **cheetah** signals speed. This identity is for the whole
  site, not just one section.
- **Accent colour:** flamingo **magenta** (`#e5157f`, hover `#c20f6b`; a brighter
  `#ff3ea5` for highlights) over warm sunset oranges and golds, with deep navy
  text on light surfaces.
- **Voice:** playful but confident. Reference phrases to match the energy (reuse
  or riff, don't necessarily copy verbatim): *"The really clean IDE for
  Tina4Pascal", "It's magic", DESIGN · CODE · BUILD · DEPLOY, SIMPLE · POWERFUL ·
  PRODUCTIVE · CROSS-PLATFORM.*
- **Motifs that fit the look:** frosted **glass panels** (angled translucent
  cards), a small vertical **DESIGN/CODE/BUILD/DEPLOY** rail, and a bottom
  feature rail. Use them where they help; don't force them.

## 4. The hero

You've already built the **scroll-driven parallax hero** from the savanna layers
(far sky at the back → near foreground at the front; the flamingo reads in front
of the cheetah). Keep that as the top of the page. Over it, put the brand beat:
the product name/wordmark, a one-line value proposition (e.g. *"Native apps,
written in HTML."*), and primary call-to-action buttons.

## 5. Page content below the hero (your main task)

Build a complete marketing landing page beneath the hero. Suggested sections,
top to bottom — write real, tight copy for each:

1. **Why Tina4Pascal** — three pillars: *HTML drives everything* · *one tiny
   native binary (~1.3 MB)* · *pure Free Pascal, no browser/runtime*.
2. **One codebase, every target** — the signature section. A visual **target
   line-up**: macOS, Windows, Linux x64/arm64, iOS, Android (and smartwatch /
   Tina4J in the family). Make it feel alive — e.g. a "ships to…" strip.
3. **Meet Tina4 Studio** — tell the IDE story from §2, framed as an installable
   desktop app, with the Download CTAs.
4. **Examples** — a gallery placeholder for sample apps (grid of cards with room
   for screenshots/GIFs). Lorem/placeholder art is fine; leave it easy to swap.
5. **The Tina4 family** — sibling of Tina4Delphi; mention Tina4J and the
   python/php/ruby/node stacks.
6. **Get started** — a quick-start blurb plus links to docs and GitHub.
7. **Footer.**

## 6. Out of scope

- **No in-app "project launcher" / "recent projects" / project-browser
  dashboard.** That start-screen (the thing you'd see *inside* the installed
  Studio, listing local projects) is being designed separately — don't build it.
  This deliverable is the **public marketing site** only.
- No accounts, auth, backend, or build tooling.

## 7. Constraints

- **Vanilla HTML / CSS / JS** — no framework or build step; it should open by
  double-clicking the HTML file and work offline.
- **Responsive, mobile-first** — 16 px side gutters, no horizontal scroll at
  phone width; the hero must still look good on mobile.
- **Light and dark** themes both looking right is a plus.
- Honour **`prefers-reduced-motion`** for anything animated (including the hero
  parallax).
- **Accessible:** semantic landmarks, alt text, visible focus states, AA contrast
  (use overlays/shadows for text over imagery).
- **Performance:** the savanna layers are large PNGs — export/serve them as
  **WebP** and lazy-load below-the-fold media so the page stays light.

## 8. Definition of done

A complete, responsive, accessible marketing landing page: the parallax hero on
top, then the sections in §5 with real copy, Download-Studio CTAs, light/dark
both working, reduced-motion respected, no horizontal scroll on mobile, no
console errors — and **no project-launcher/dashboard UI**.
