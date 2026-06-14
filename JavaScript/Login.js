// ═══════════════════════════════════════════
// LOGIN.JS — Panela Quente
// Validação e autenticação do login
// ═══════════════════════════════════════════

// ── FEEDBACK VISUAL ──────────────────────────
// Mostra borda vermelha e mensagem de erro no campo
function setErro(id, msg) {
  const campo = document.getElementById(id); // pega o campo pelo ID
  campo.style.borderColor = "red"; // borda fica vermelha
  let erro = campo.nextElementSibling; // verifica se já tem mensagem de erro depois do campo
  if (!erro || !erro.classList.contains("erro")) {
    // se não tiver, cria uma
    erro = document.createElement("small"); // cria um elemento small
    erro.classList.add("erro"); // adiciona a classe erro
    campo.after(erro); // coloca depois do campo
  }
  erro.textContent = msg; // escreve a mensagem de erro
}

// Mostra borda verde e remove mensagem de erro
function setOk(id) {
  const campo = document.getElementById(id); // pega o campo pelo ID
  campo.style.borderColor = "green"; // borda fica verde
  const erro = campo.nextElementSibling; // verifica se tem mensagem de erro
  if (erro && erro.classList.contains("erro")) erro.remove(); // remove se tiver
}

// ── VALIDAÇÃO DO FORMULÁRIO DE LOGIN ─────────
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // cancela o envio padrão do formulário
  let valido = true; // começa assumindo que tudo está ok

  // LOGIN — exatamente 6 caracteres alfabéticos
  const login = document.getElementById("LoginAcesso").value.trim(); // pega o valor digitado
  if (!/^[a-zA-Z]{6}$/.test(login)) {
    // ^ = início, [a-zA-Z] = só letras, {6} = exatamente 6, $ = fim
    setErro(
      "LoginAcesso",
      "Login deve ter exatamente 6 caracteres alfabéticos",
    );
    valido = false;
  } else {
    setOk("LoginAcesso");
  }

  // SENHA — exatamente 8 caracteres alfabéticos
  const senha = document.getElementById("SenhaAcesso").value;
  if (!/^[a-zA-Z]{8}$/.test(senha)) {
    setErro(
      "SenhaAcesso",
      "Senha deve ter exatamente 8 caracteres alfabéticos",
    );
    valido = false;
  } else {
    setOk("SenhaAcesso");
  }

  if (!valido) return; // se tiver erro nos campos, para aqui

  // ── VERIFICAR CONTRA O LOCALSTORAGE ──────
  // Pega o login e senha salvos no cadastro
  const loginSalvo = localStorage.getItem("login"); // pega o login salvo
  const senhaSalva = localStorage.getItem("senha"); // pega a senha salva

  // Compara o que o usuário digitou com o que foi salvo
  if (login !== loginSalvo || senha !== senhaSalva) {
    // se login ou senha estiverem errados, mostra erro
    setErro("LoginAcesso", "Login ou senha incorretos");
    setErro("SenhaAcesso", " ");
    return; // para aqui, não redireciona
  }

  // ── LOGIN CORRETO ─────────────────────────
  localStorage.setItem("usuarioLogado", login); // salva quem está logado
  window.location.href = "../index.html"; // redireciona pra página principal
});

// ── CARREGAR USUÁRIO LOGADO NO HEADER ────────
// Verifica se já tem alguém logado e mostra o nome no header
const usuarioLogado = localStorage.getItem("usuarioLogado");
if (usuarioLogado) {
  // se já estiver logado, redireciona direto pro index
  window.location.href = "../index.html";
}
