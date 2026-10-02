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
  css/
    styles.css            design tokens + base styles (light/dark)
  js/
    main.js               small progressive-enhancement script
  images/
    tina4pascal-logo.svg  brand logo (copied from /branding)
    tina4pascal-logo.png
    tina4-robot-avatar.svg
    ide-mockups/          <-- DROP ANDRE'S CLAUDE-GENERATED IDE MOCKUPS HERE
```

## The IDE ideation space

Andre asked for ideation around a **Tina4Pascal IDE**. The dedicated page is
[`ide/index.html`](ide/index.html) and it already has a labelled gallery section
reserved for the mockups. To add them:

1. Drop the mockup image files into [`images/ide-mockups/`](images/ide-mockups/).
2. In `ide/index.html`, uncomment / fill the `<!-- MOCKUP SLOT -->` figures with
   the real filenames and captions.

Nothing in the gallery is final — it's a frame to drop the generated mockups
into so we can arrange and annotate them.

## Previewing

It's static HTML — open `index.html` in a browser, or serve the folder:

```bash
cd website && python -m http.server 8080
```
