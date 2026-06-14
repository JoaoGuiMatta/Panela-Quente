// cria o erro
function setErro(id, msg) {
  const campo = document.getElementById(id); // pega o campo pelo ID
  campo.style.borderColor = "red"; // borda fica vermelha
  let erro = campo.nextElementSibling; // verifica se jÃ¡ tem mensagem de erro depois do campo
  if (!erro || !erro.classList.contains("erro")) {
    // =========================================================================================================

    // =========================================================================================================
    // mostra o erro
    erro = document.createElement("small"); // cria um elemento small
    erro.classList.add("erro"); // adiciona a classe erro
    campo.after(erro); // coloca depois do campo
  }
  erro.textContent = msg; // escreve a mensagem de erro
}
// =========================================================================================================

// =========================================================================================================
// cira um quadrado verde quando estiver correto
function setOk(id) {
  const campo = document.getElementById(id); // pega o campo pelo ID
  campo.style.borderColor = "green"; // borda fica verde
  const erro = campo.nextElementSibling; // verifica se tem mensagem de erro
  if (erro && erro.classList.contains("erro")) erro.remove(); // remove se tiver
}
// =========================================================================================================

// =========================================================================================================
// envia formulario
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // cancela o envio padrÃ£o do formulÃ¡rio
  let valido = true; // comeÃ§a assumindo que tudo estÃ¡ ok

  // =========================================================================================================

  // =========================================================================================================
  // login com exatos 6 caracteres
  const login = document.getElementById("LoginAcesso").value.trim(); // pega o valor digitado
  if (!/^[a-zA-Z]{6}$/.test(login)) {
    // da erro caso o usuario escreva menos de 6
    setErro(
      "LoginAcesso",
      "Login deve ter exatamente 6 caracteres alfabÃ©ticos",
    );
    valido = false;
  } else {
    setOk("LoginAcesso");
  }
  // =========================================================================================================

  // =========================================================================================================
  // senha com exatos 8 caracteres
  const senha = document.getElementById("SenhaAcesso").value;
  if (!/^[a-zA-Z]{8}$/.test(senha)) {
    setErro(
      "SenhaAcesso",
      "Senha deve ter exatamente 8 caracteres alfabÃ©ticos",
    );
    valido = false;
  } else {
    setOk("SenhaAcesso");
  }

  if (!valido) return; // se tiver erro nos campos, para aqui

  // =========================================================================================================
  // login e senha salvas no local storage
  const loginSalvo = localStorage.getItem("login");
  const senhaSalva = localStorage.getItem("senha");

  // avança se seha se login forem exatamente o mesmo do cadastro
  if (login !== loginSalvo || senha !== senhaSalva) {
    setErro("LoginAcesso", "Login ou senha incorretos");
    setErro("SenhaAcesso", " ");
    return;
  }

  localStorage.setItem("usuarioLogado", login);
  window.location.href = "../index.html";
});
// =========================================================================================================
