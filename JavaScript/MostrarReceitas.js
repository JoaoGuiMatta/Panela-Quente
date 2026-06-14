// ==============================Ao carregar a pagina==================================================================
document.addEventListener("DOMContentLoaded", function () {
  const receitas = JSON.parse(localStorage.getItem("receitasUsuario")) || [];
  if (receitas.length === 0) return;

  const estaNaRaiz = !window.location.pathname.includes("/Paginas/");
  const prefixo = estaNaRaiz ? "" : "../";
  const paginaReceita = estaNaRaiz
    ? "Paginas/ReceitaUsuario.html"
    : "../Paginas/ReceitaUsuario.html";
  // =========================================================================================================

  // Funcao limparTexto
  function limparTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  // =========================================================================================================

  // =========================================================================================================
  // Percorre as secoes de receitas
  document.querySelectorAll(".TitulosCards").forEach(function (secao) {
    const titulo = secao.querySelector(".horario h3");
    const carrossel = secao.querySelector(".carossel");

    if (!titulo || !carrossel) return;

    const categoriaDaSecao = limparTexto(titulo.textContent);

    // Cria os cards das receitas do usuario
    receitas.forEach(function (receita, index) {
      const categoriaReceita = limparTexto(receita.categoria || "");

      if (
        !categoriaReceita.includes(categoriaDaSecao) &&
        !categoriaDaSecao.includes(categoriaReceita)
      ) {
        return;
      }

      const card = document.createElement("div");
      card.classList.add("card-receita");

      card.innerHTML = `
        <a href="${paginaReceita}" data-receita-index="${index}">
          <img src="${receita.foto || prefixo + "imagens/PanelaQuenteLogo.png"}" alt="${receita.nome}">
          <h3>${receita.nome}</h3>
          <h4>
            <img src="${prefixo}icons/Cronometro.svg" alt="" class="tempo">
            ${receita.tempo}
          </h4>
        </a>
      `;

      card.querySelector("a").addEventListener("click", function () {
        localStorage.setItem("receitaExibir", index);
      });

      carrossel.appendChild(card);
    });
    // =========================================================================================================
  });
});
// Fim Ao carregar a pagina
// =========================================================================================================
