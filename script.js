
const menu=document.querySelector(".menu"),nav=document.querySelector("#nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
document.getElementById("contactForm")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const text="Bonjour Vision 2000, je suis "+d.get("nom")+". Téléphone : "+d.get("telephone")+". Message : "+d.get("message");window.open("https://wa.me/?text="+encodeURIComponent(text),"_blank","noopener")});
