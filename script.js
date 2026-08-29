if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

//Modal para abrir/visualizar os certificados
const pdfModal = document.getElementById("pdfModal");
const pdfFrame = document.getElementById("pdfFrame");
const modalClose = document.getElementById("modalClose");
const certificadoCards = document.querySelectorAll(".certificado-card");


certificadoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const pdfPath = card.getAttribute("data-pdf");
    pdfFrame.src = pdfPath;
    pdfModal.classList.add("show");
  });
});


modalClose.addEventListener("click", () => {
  pdfModal.classList.remove("show");
  pdfFrame.src = "";
});


pdfModal.addEventListener("click", (e) => {
  if (e.target === pdfModal) {
    pdfModal.classList.remove("show");
    pdfFrame.src = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && pdfModal.classList.contains("show")) {
    pdfModal.classList.remove("show");
    pdfFrame.src = "";
  }
});
