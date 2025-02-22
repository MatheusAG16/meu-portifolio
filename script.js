//Script para passar os projetos

const projetoContainer = document.querySelector("#div-projetos");
const projeto = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".projeto__btn--anterior");
const btnProximo = document.querySelector(".projeto__btn--proximo");

let currentIndex = 0;
let projetosVisiveis = 3; // Número de projetos visíveis de cada vez

let larguraJanela = window.innerWidth;

function mostrarTamanho() {
  larguraJanela = window.innerWidth;
  console.log(larguraJanela);
  currentIndex = 0;
  updateProjetos();
}

window.addEventListener("resize", mostrarTamanho);

btnProximo.addEventListener("click", () => {
  if (larguraJanela <= 768) {
    projetosVisiveis = 1;
  } else {
    projetosVisiveis = 3;
  }

  if (projetosVisiveis == 3) {
    if (currentIndex < projeto.length - projeto.length / 2) {
      currentIndex++;
      updateProjetos();
      console.log(`A largura da janela está em ${larguraJanela}`);
    }
  } else {
    if (currentIndex < projeto.length - 1) {
      currentIndex++;
      updateProjetos();
      console.log(`A largura da janela está em ${larguraJanela}`);
    }
  }
});

btnAnterior.addEventListener("click", () => {
  if (larguraJanela <= 768) {
    projetosVisiveis = 1;
  } else {
    projetosVisiveis = 3;
  }

  if (currentIndex > 0) {
    currentIndex--;
    updateProjetos();
    console.log(`A largura da janela está em ${larguraJanela}`);
  }
});

function updateProjetos() {
  projetoContainer.style.transform = `translateX(-${
    (currentIndex * 100) / projetosVisiveis
  }%)`;
}
