/* Folder-style dropdown menus in the masthead.
 *
 * The theme's greedy-nav (jquery.greedy-navigation.js) moves overflowing
 * <li> items — including our folder items — into the ".hidden-links" overflow
 * panel that opens from the "toggle menu" button. In that panel there is no
 * :hover (touch), and any click inside it closes the whole panel. So the
 * hover/focus-only CSS dropdown never opens once folded.
 *
 * This adds an explicit tap/click toggle that works in both the visible bar
 * and the overflow panel, and stops the folder tap from bubbling to the
 * greedy-nav handler that would otherwise close the overflow panel.
 */
(function () {
  "use strict";

  function init() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    function closeAll(except) {
      var open = nav.querySelectorAll(".has-children.is-open");
      for (var i = 0; i < open.length; i++) {
        if (open[i] === except) continue;
        open[i].classList.remove("is-open");
        var folder = open[i].querySelector(".menu-folder");
        if (folder) folder.setAttribute("aria-expanded", "false");
      }
    }

    function toggle(folder) {
      var item = folder.closest(".has-children");
      if (!item) return;
      var willOpen = !item.classList.contains("is-open");
      closeAll(item);
      item.classList.toggle("is-open", willOpen);
      folder.setAttribute("aria-expanded", willOpen ? "true" : "false");
    }

    // Delegate so it keeps working after greedy-nav relocates the <li>.
    // Use the CAPTURE phase: greedy-nav binds its "close the overflow panel"
    // handler on ".hidden-links", which is a *child* of #site-nav. On bubbling
    // that inner handler fires first and closes the panel before we could stop
    // it. Capturing on the ancestor runs before any descendant bubble handler,
    // so stopPropagation() here actually prevents the close.
    nav.addEventListener(
      "click",
      function (e) {
        var folder = e.target.closest(".menu-folder");
        if (!folder || !nav.contains(folder)) return;
        e.stopPropagation();
        toggle(folder);
      },
      true
    );

    // Keyboard: the label is role="button" with tabindex="0".
    nav.addEventListener("keydown", function (e) {
      var folder = e.target.closest(".menu-folder");
      if (!folder) return;
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        e.stopPropagation();
        toggle(folder);
      } else if (e.key === "Escape") {
        closeAll(null);
      }
    });

    // Tap/click anywhere else closes open folders.
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) closeAll(null);
    });

    // Greedy-nav (jquery.greedy-navigation.js) only decides how many items to
    // fold into the overflow button on load and on window "resize". Its first
    // measurement can run before web fonts / final layout settle — especially
    // with CJK fonts — which leaves items un-collapsed and the title wrapped.
    // Re-trigger its check() by dispatching a resize once things have settled.
    function renudge() {
      window.dispatchEvent(new Event("resize"));
    }
    window.addEventListener("load", renudge);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(renudge);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
