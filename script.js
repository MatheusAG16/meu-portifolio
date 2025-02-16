//Script para passar os projetos

const projetoContainer = document.querySelector("#div-projetos");
const projetos = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".projeto__btn--anterior");
const btnProximo = document.querySelector(".projeto__btn--proximo");

let currentIndex = 0;
const projetosVisiveis = 3; // Número de projetos visíveis de cada vez

function mostrarProjetos(index) {
  projetoContainer.style.transform = `translateX(-${index * 379}px)`; // Ajuste a largura conforme necessário
}

btnAnterior.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= projetosVisiveis;
    mostrarProjetos(currentIndex);
  }
});

btnProximo.addEventListener("click", () => {
  if (currentIndex < projetos.length - projetosVisiveis) {
    currentIndex += projetosVisiveis;
    mostrarProjetos(currentIndex);
  }
});
