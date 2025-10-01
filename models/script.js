navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-visible");
  const isVisible = navMenu.classList.contains("nav-menu-visible");
  navToggle.setAttribute("aria-expanded", isVisible);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function lerTexto() {
  const texto = document.getElementById("conteudo").innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR"; // idioma português do Brasil
  speechSynthesis.speak(utterance);
}
