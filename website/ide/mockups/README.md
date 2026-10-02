# IDE mockups — drop zone

**Andre's Claude-generated Tina4Pascal IDE mockups go here** — this folder holds
the mockups in context (images *and* HTML), kept next to the IDE page rather than
mixed into the site's general `images/` folder.

Drop the files here:

- **Image mockups** (PNG/SVG/JPG/WebP) — e.g. `01-editor-live-preview.png`
- **HTML mockup(s)** — e.g. `editor.html`, with any of their own assets alongside

Then wire them into the gallery in [`../index.html`](../index.html):

- an image → replace a `.slot` with a `<figure><img src="mockups/FILE">…</figure>`
- an HTML mockup → link it (`<a href="mockups/editor.html">`) or embed it
  (`<iframe src="mockups/editor.html">`); there's a commented example above the
  slots.

(Paths in the gallery are relative to `ide/index.html`, so they start with
`mockups/…`.)

Suggested ordering so the gallery stays self-describing:

```
01-editor-live-preview.png
02-build-targets.png
03-device-loop.png
editor.html
```

Nothing here is final — it's a staging area so we can arrange and annotate the
concepts together.
