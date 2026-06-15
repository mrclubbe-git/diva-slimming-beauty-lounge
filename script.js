const whatsappButton = document.querySelector(".whatsapp");

if (whatsappButton) {
  const whatsappNumber = "27843891586";
  const whatsappMessage = encodeURIComponent(
    "Hi Diva Slimming and Beauty Lounge, I would like to book a consultation."
  );

  whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener";
  whatsappButton.setAttribute("aria-label", "Contact Diva on WhatsApp");
}

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
