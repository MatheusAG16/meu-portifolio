//Script para passar os projetos

const projetoContainer = document.querySelector("#div-projetos");
const projeto = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".projeto__btn--anterior");
const btnProximo = document.querySelector(".projeto__btn--proximo");

let currentIndex = 0;
const projetosVisiveis = 3; // Número de projetos visíveis de cada vez

btnProximo.addEventListener("click", () => {
  if (currentIndex < projeto.length - projetosVisiveis) {
    currentIndex++;
    updateProjetos();
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
