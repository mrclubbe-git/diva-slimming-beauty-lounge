const siteIcon = document.createElement("link");
siteIcon.setAttribute("rel", "icon");
siteIcon.setAttribute("type", "image/svg+xml");
siteIcon.setAttribute("href", "assets/brand/favicon.svg?v=20260615-1");
document.head.appendChild(siteIcon);

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
