/* Folder-style dropdown menus in the masthead: click/keyboard toggle */
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

    // Delegated, capture phase
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

    // Re-run greedy-nav's measurement after load and web fonts
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
