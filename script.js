
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Menu responsivo
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fechar menu após clicar em um link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  });
});

// Atualizar o ano automaticamente
document.getElementById("year").textContent =
  new Date().getFullYear();

// Configurar o WhatsApp da clínica
const whatsappButton = document.getElementById("whatsappButton");

// Substitua pelo número oficial da clínica com código do país.
// Exemplo de formato: 5541999999999
const whatsappNumber = "5541999999999";

const message =
  "Olá! Gostaria de informações sobre consultas odontológicas.";

whatsappButton.href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
