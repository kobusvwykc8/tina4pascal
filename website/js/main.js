// Tina4Pascal website — progressive enhancement.
// SCAFFOLD: intentionally tiny. The site works with no JS; add behaviour here
// (theme toggle, mobile nav, lightbox for the IDE mockups) as the design firms up.

(function () {
  "use strict";
  // Placeholder: respect an explicit ?theme=light|dark for quick previewing.
  try {
    var t = new URLSearchParams(location.search).get("theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) { /* no-op */ }
})();
