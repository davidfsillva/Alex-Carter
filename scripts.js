// =============================
// ANIMAÇÃO DE ENTRADA HERO LEFT
// =============================
window.addEventListener("load", () => {
  const heroLeft = document.querySelector(".hero-left");

  // Estado inicial antes da animação
  heroLeft.style.opacity = 0;
  heroLeft.style.transform = "translateX(-40px)";

  // Adiciona animação após pequeno delay
  setTimeout(() => {
    heroLeft.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    heroLeft.style.opacity = 1;
    heroLeft.style.transform = "translateX(0)";
  }, 300);
});

// =============================
// ANIMAÇÃO OPCIONAL PARA BOTÃO CTA
// =============================
const ctaButton = document.querySelector(".cta");

ctaButton.addEventListener("mouseenter", () => {
  ctaButton.style.transform = "scale(1.05)";
});

ctaButton.addEventListener("mouseleave", () => {
  ctaButton.style.transform = "scale(1)";
});
