const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

if (header && toggle) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  header.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("img[data-fallback-src]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      const fallbackSrc = image.dataset.fallbackSrc;

      if (fallbackSrc && !image.src.endsWith(fallbackSrc)) {
        image.src = fallbackSrc;
      }
    },
    { once: true }
  );
});
