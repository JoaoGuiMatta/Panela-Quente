// exibe a receita
function exibirReceitaUsuario() {
  const idx = localStorage.getItem('receitaExibir');
  const receitas = JSON.parse(localStorage.getItem('receitasUsuario')) || [];

  if (idx === null || idx === undefined || receitas[idx] === undefined) {
    return;
  }

  const receita = receitas[idx];

  try {
    document.getElementById('NomeReceita').textContent = receita.nome;
    document.getElementById('DescricaoReceita').textContent = receita.descricao;
    document.getElementById('TempoReceita').textContent = receita.tempo;
    document.title = 'Panela Quente - ' + receita.nome;
// =========================================================================================================


// =========================================================================================================
// foto apenas na div da receita
    if (receita.foto) {
      document.getElementById('FotoReceita').src = receita.foto;
      document.getElementById('FotoContainer').style.display = 'block';
    }

    const listaPreparo = document.getElementById('ListaPreparo');
    if (receita.passos && receita.passos.length > 0) {
      receita.passos.forEach(function(passo, i) {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="ReceitasPasso">
            <span class="Posicao">${i + 1}</span>
            <p>${passo}</p>
          </div>
        `;
        listaPreparo.appendChild(li);
      });
    }

    const listaIngredientes = document.getElementById('ListaIngredientes');
    if (receita.ingredientes && receita.ingredientes.length > 0) {
      receita.ingredientes.forEach(function(ing) {
        const li = document.createElement('li');
        li.textContent = ing;
        listaIngredientes.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Ingredientes nÃ£o informados';
      listaIngredientes.appendChild(li);
    }
  } catch (error) {
    console.error("Erro:", error);
  }

  localStorage.removeItem('receitaExibir');
}
// =========================================================================================================


// inicializando
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', exibirReceitaUsuario);
} else {
  exibirReceitaUsuario();
}
