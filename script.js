//Script para passar os projetos

const projetoContainer = document.querySelector("#div-projetos");
const projeto = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".projeto__btn--anterior");
const btnProximo = document.querySelector(".projeto__btn--proximo");

let currentIndex = 0;
let projetosVisiveis = 1; // Número de projetos visíveis de cada vez

function telaMenor() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    console.log("tela menor do que 768px");
  }

  return;
}

btnProximo.addEventListener("click", () => {
  if (currentIndex < projeto.length / projetosVisiveis) {
    currentIndex++;
    updateProjetos();
    console.log("telaMenor");
  }
});

btnAnterior.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateProjetos();
  }
});

function updateProjetos() {
  projetoContainer.style.transform = `translateX(-${
    (currentIndex * 100) / projetosVisiveis
  }%)`;
}
