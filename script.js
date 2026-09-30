const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});

document.querySelectorAll("#nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "Ouvrir le menu");
  });
});

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("nom") || "").trim();
  const phone = String(data.get("telephone") || "").trim();
  const message = String(data.get("message") || "").trim();
  const text = [
    "Bonjour Vision 2000,",
    "",
    "Je suis " + name + ".",
    "Téléphone : " + phone,
    "",
    message
  ].join("\n");

  window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
});

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(() => document.querySelector("#contact input")?.focus(), 450);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".product, .services article, .advice-grid article, .about-copy, .contact-cards a").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

document.querySelector(".copyright")?.replaceChildren(
  "© " + new Date().getFullYear() + " Vision 2000. Tous droits réservés."
);


// V2 catalogue filters
 document.querySelectorAll(".filter").forEach((btn)=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach((b)=>b.classList.remove("active"));btn.classList.add("active");const filter=btn.dataset.filter;document.querySelectorAll(".product").forEach((card)=>{card.hidden=filter!=="all"&&card.dataset.category!==filter})}));


