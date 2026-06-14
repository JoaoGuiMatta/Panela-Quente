// ═══════════════════════════════════════════════════════════
// ExibirReceita.js
// Script APENAS para exibir receitas do usuário
// ═══════════════════════════════════════════════════════════

function exibirReceitaUsuario() {
  const idx = localStorage.getItem('receitaExibir');
  const receitas = JSON.parse(localStorage.getItem('receitasUsuario')) || [];

  if (idx === null || !receitas[idx]) {
    window.location.href = '../index.html';
    return;
  }

  const receita = receitas[idx];

  // Preenche o título e descrição
  document.getElementById('NomeReceita').textContent = receita.nome;
  document.getElementById('DescricaoReceita').textContent = receita.descricao;
  document.getElementById('TempoReceita').textContent = receita.tempo;
  document.title = 'Panela Quente - ' + receita.nome;

  // Foto se tiver
  if (receita.foto) {
    document.getElementById('FotoReceita').src = receita.foto;
    document.getElementById('FotoContainer').style.display = 'block';
  }

  // Passos do modo de preparo
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

  // Ingredientes
  const listaIngredientes = document.getElementById('ListaIngredientes');
  if (receita.ingredientes && receita.ingredientes.length > 0) {
    receita.ingredientes.forEach(function(ing) {
      const li = document.createElement('li');
      li.textContent = ing;
      listaIngredientes.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Ingredientes não informados';
    listaIngredientes.appendChild(li);
  }

  // Limpa o localStorage para não repetir
  localStorage.removeItem('receitaExibir');
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', exibirReceitaUsuario);
