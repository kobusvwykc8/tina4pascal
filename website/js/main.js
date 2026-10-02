// Tina4Pascal website — progressive enhancement.
// The site works with no JS; this adds the parallax hero motion.

(function () {
  "use strict";

  // Quick theme preview: ?theme=light|dark
  try {
    var t = new URLSearchParams(location.search).get("theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) { /* no-op */ }

  // ---- parallax hero ----
  var stage = document.getElementById("phero-stage");
  if (!stage) return;
  var layers = Array.prototype.slice.call(stage.querySelectorAll(".player"));
  if (!layers.length) return;

  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  if (reduce) return; // honour reduced-motion: leave layers static

  var SCROLL_K = 0.18;  // how far layers drift as the hero scrolls away
  var MOUSE_K  = 90;    // px of mouse-driven sway for the nearest layer
  var mx = 0, my = 0, sy = window.scrollY || window.pageYOffset || 0;
  var ticking = false;

  function apply() {
    ticking = false;
    for (var i = 0; i < layers.length; i++) {
      var el = layers[i];
      var d = parseFloat(el.getAttribute("data-depth")) || 0;
      var tx = mx * d * MOUSE_K;
      var ty = (-sy * d * SCROLL_K) + (my * d * MOUSE_K);
      el.style.transform =
        "translate3d(calc(-50% + " + tx.toFixed(1) + "px), calc(-50% + " + ty.toFixed(1) + "px), 0)";
    }
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }

  window.addEventListener("scroll", function () {
    sy = window.scrollY || window.pageYOffset || 0; req();
  }, { passive: true });

  window.addEventListener("mousemove", function (e) {
    mx = (e.clientX / window.innerWidth) - 0.5;
    my = (e.clientY / window.innerHeight) - 0.5;
    req();
  }, { passive: true });

  apply();
})();
