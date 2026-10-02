# Tina4Pascal website

Marketing / docs site for Tina4Pascal — *HTML-driven native apps in Free Pascal,
one codebase, six targets.*

> Status: **scaffold**. Structure and placeholders are in place; design, copy and
> content are still being decided (see the TODOs in each file).

## Layout

```
website/
  index.html              landing page (hero, features, examples, IDE teaser)
  ide/
    index.html            IDE ideation page — the write-up + mockup gallery
    mockups/              <-- DROP ANDRE'S CLAUDE-GENERATED IDE MOCKUPS HERE
                              (images AND HTML, kept in context next to the page)
  css/
    styles.css            design tokens + base styles (light/dark)
  js/
    main.js               small progressive-enhancement script
  images/
    tina4pascal-logo.svg  brand logo (copied from /branding)
    tina4pascal-logo.png
    tina4-robot-avatar.svg
```

## The IDE ideation space

Andre asked for ideation around a **Tina4Pascal IDE**. The dedicated page is
[`ide/index.html`](ide/index.html) and it already has a labelled gallery section
reserved for the mockups. The mockups — **images and HTML** — live in context
next to the page in [`ide/mockups/`](ide/mockups/), not in the general `images/`
folder. To add them:

1. Drop the mockup files (images and/or HTML) into [`ide/mockups/`](ide/mockups/).
2. In `ide/index.html`, uncomment / fill the `<!-- MOCKUP SLOT -->` entries —
   `<figure><img src="mockups/…">` for an image, or an `<iframe>`/link to
   `mockups/…` for an HTML mockup (both examples are in the file).

Nothing in the gallery is final — it's a frame to drop the generated mockups
into so we can arrange and annotate them.

## Previewing

It's static HTML — open `index.html` in a browser, or serve the folder:

```bash
cd website && python -m http.server 8080
```
