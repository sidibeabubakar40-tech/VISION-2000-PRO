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


// Vision 2000 — catalogue des verres
const glassFamilies = [
  {title:"Verres unifocaux",slug:"UNIFOCAUX",description:"Vision simple — modèles de démonstration à remplacer par les références techniques réelles.",items:["UniVision Clair","UniVision Confort","UniVision Blue","UniVision Anti-Reflet","UniVision Photo","UniVision UV","UniVision Drive","UniVision Digital","UniVision Slim","UniVision Premium","UniVision Clear Plus","UniVision Blue Plus","UniVision Photo Plus","UniVision Drive Plus","UniVision Office","UniVision Screen","UniVision Protect","UniVision Comfort+","UniVision Ultra","UniVision Prestige"]},
  {title:"Verres bifocaux",slug:"BIFOCAUX",description:"Deux zones de vision — modèles de démonstration à confirmer selon le catalogue réel.",items:["Bifo Classic","Bifo Comfort","Bifo Clear","Bifo Anti-Reflet","Bifo UV","Bifo Blue","Bifo Photo","Bifo Drive","Bifo Digital","Bifo Slim","Bifo Premium","Bifo Clear Plus","Bifo Blue Plus","Bifo Photo Plus","Bifo Office","Bifo Screen","Bifo Protect","Bifo Comfort+","Bifo Ultra","Bifo Prestige"]},
  {title:"Verres progressifs",slug:"PROGRESSIFS",description:"Vision de près, intermédiaire et de loin — modèles de démonstration.",items:["Progress Classic","Progress Comfort","Progress Clear","Progress Anti-Reflet","Progress UV","Progress Blue","Progress Photo","Progress Drive","Progress Digital","Progress Slim","Progress Premium","Progress Clear Plus","Progress Blue Plus","Progress Photo Plus","Progress Office","Progress Screen","Progress Protect","Progress Comfort+","Progress Ultra","Progress Prestige"]},
  {title:"Verres solaires",slug:"SOLAIRES",description:"Confort et protection solaire — modèles de démonstration à confirmer.",items:["Solar Classic","Solar Brown","Solar Grey","Solar Green","Solar Blue","Solar Polar","Solar Polar Brown","Solar Polar Grey","Solar Photo","Solar Drive","Solar UV+","Solar Anti-Reflet","Solar Mirror Gold","Solar Mirror Silver","Solar Gradient","Solar Sport","Solar Outdoor","Solar Premium","Solar Ultra","Solar Prestige"]}
];

const glassCatalogGrid = document.getElementById("glassCatalogGrid");
if (glassCatalogGrid) {
  glassCatalogGrid.innerHTML = glassFamilies.map(function(family) {
    return '<article class="glass-family">' +
      '<div class="glass-family-head"><div><span>' + family.slug + '</span><h3>' + family.title + '</h3></div><strong>' + family.items.length + '</strong></div>' +
      '<div class="glass-list">' +
      family.items.map(function(item, i) {
        return '<div class="glass-item"><b>' + String(i+1).padStart(2,"0") + ' · ' + item + '</b><small>EXEMPLE</small></div>';
      }).join("") +
      '</div><p class="glass-family-note">' + family.description + '</p></article>';
  }).join("");
}

const visionWhatsAppNumber = "2250768714275";
document.querySelectorAll('a[href="https://wa.me/?text=Bonjour%20Vision%202000%2C%20je%20souhaite%20des%20informations."]').forEach(function(link) {
  link.href = "https://wa.me/" + visionWhatsAppNumber + "?text=" + encodeURIComponent("Bonjour Vision 2000, je souhaite des informations.");
});

/* Catalogue 100 montures — rendu éditorial */
const catalog100Grid=document.getElementById("catalog100Grid");
if(catalog100Grid){
  const variants=["#B58A45","#69737B","#0B2D5B","#B96D76","#176AA5","#4B5964","#76563E","#9A3C3C","#173B67","#C6A878"];
  function frame(i){
    const stroke=variants[i%variants.length];
    return '<svg viewBox="0 0 220 120" role="img" aria-label="Monture '+(i+1)+'"><g fill="none" stroke="'+stroke+'" stroke-width="5" stroke-linecap="round"><ellipse cx="66" cy="62" rx="43" ry="32"/><ellipse cx="154" cy="62" rx="43" ry="32"/><path d="M109 60 C114 55 118 55 123 60"/><path d="M23 56 C12 48 9 42 5 35"/><path d="M197 56 C208 48 211 42 215 35"/></g></svg>';
  }
  catalog100Grid.innerHTML=Array.from({length:100},(_,i)=>'<article class="catalog-100-item"><span class="tag">VISION 2000</span>'+frame(i)+'<span class="num">'+String(i+1).padStart(2,"0")+'</span></article>').join("");
}
