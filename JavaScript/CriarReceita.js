// adiciona os passos da receita
function adicionarPasso() {
  const passo = document.getElementById("Passo").value.trim();
  if (!passo) return;

  const lista = document.getElementById("ListaPasso");
  const item = document.createElement("li");
  item.textContent = passo;
  lista.appendChild(item);
  document.getElementById("Passo").value = "";
}

// =========================================================================================================
// converte o tempo 
function converterTempo(minutos) {
  if (minutos < 60) return minutos + " min";
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;
  return min === 0 ? horas + "h" : horas + "h " + min + "min";
}
// =========================================================================================================

// =========================================================================================================
// valida o formulario
function validarReceita() {
  const nome = document.getElementById("NomeReceita").value.trim();
  const descricao = document.getElementById("Descricao").value.trim();
  const tempo = document.getElementById("TempoReceita").value;
  const categoria = document.getElementById("Categoria").value;
  const passos = document.getElementById("ListaPasso").children.length;

  if (!nome) {
    alert("Digite o nome da receita");
    return false;
  }
  if (!descricao) {
    alert("Digite a descriÃ§Ã£o da receita");
    return false;
  }
  if (!tempo || tempo <= 0) {
    alert("Digite um tempo vÃ¡lido");
    return false;
  }
  if (categoria === "Escolha uma Categoria") {
    alert("Selecione uma categoria");
    return false;
  }
  if (passos === 0) {
    alert("Adicione pelo menos um passo");
    return false;
  }

  return true;
}
// =========================================================================================================

// =========================================================================================================
// envia o formulario
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validarReceita()) return;
// =========================================================================================================

// =========================================================================================================
// pega os ingredientes
  const ingredientesTexto = document.getElementById("Ingredientes").value.trim();
  const ingredientes = ingredientesTexto
    .split("\n")
    .map(ing => ing.trim())
    .filter(ing => ing !== "");
    // =========================================================================================================
    
  // =========================================================================================================
  // pega a foto
  const arquivo = document.getElementById("Foto").files[0];
  const reader = new FileReader();

  const criarReceita = (fotoBase64) => {
    const receita = {
      nome: document.getElementById("NomeReceita").value.trim(),
      descricao: document.getElementById("Descricao").value.trim(),
      tempo: converterTempo(parseInt(document.getElementById("TempoReceita").value)),
      categoria: document.getElementById("Categoria").value,
      foto: fotoBase64,
      passos: Array.from(document.getElementById("ListaPasso").children).map(
        (li) => li.textContent
      ),
      ingredientes: ingredientes,
    };
// =========================================================================================================

// =========================================================================================================
// salva as receitas
  const receitas = JSON.parse(localStorage.getItem("receitasUsuario")) || [];
    receitas.push(receita);
    localStorage.setItem("receitasUsuario", JSON.stringify(receitas));

    alert("Receita salva com sucesso!");
    window.location.href = "../index.html";
  };

  if (arquivo) {
    reader.onload = function (ev) {
      criarReceita(ev.target.result);
    };
    reader.readAsDataURL(arquivo);
  } else {
    criarReceita(null);
  }
});
