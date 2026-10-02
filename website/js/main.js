// Tina4Pascal website — progressive enhancement.
// The site works with no JS; this adds the scroll-driven parallax hero
// (Firewatch-style): as you scroll into the scene, layers behind a focal plane
// lag (hang back) and layers in front rush past, opening up the depth.

(function () {
  "use strict";

  // Quick theme preview: ?theme=light|dark
  try {
    var t = new URLSearchParams(location.search).get("theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) { /* no-op */ }

  // ---- scroll parallax hero ----
  var stage = document.getElementById("phero-stage");
  if (!stage) return;
  var layers = Array.prototype.slice.call(stage.querySelectorAll(".player"));
  if (!layers.length) return;

  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  if (reduce) return; // honour reduced-motion: leave layers static

  // Layers at depth == PIVOT scroll naturally; those behind it (smaller depth)
  // lag downward so they stay in view longer, those in front (larger depth) move
  // up faster and leave first — that differential is the parallax.
  var PIVOT = 0.16;
  var K = 0.62;      // overall strength (higher = more pronounced depth)
  var sy = window.scrollY || window.pageYOffset || 0;
  var ticking = false;

  function apply() {
    ticking = false;
    for (var i = 0; i < layers.length; i++) {
      var el = layers[i];
      var d = parseFloat(el.getAttribute("data-depth")) || 0;
      var ty = sy * (PIVOT - d) * K;   // >0 = lag down (background), <0 = rush up (foreground)
      el.style.transform = "translate3d(-50%, calc(-50% + " + ty.toFixed(1) + "px), 0)";
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }

  window.addEventListener("scroll", function () {
    sy = window.scrollY || window.pageYOffset || 0;
    req();
  }, { passive: true });

  apply();
})();
