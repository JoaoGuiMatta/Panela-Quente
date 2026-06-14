// cria o erro
function setErro(id, msg) {
  const campo = document.getElementById(id); 
  campo.style.borderColor = "red";
  let erro = campo.nextElementSibling;
  if (!erro || !erro.classList.contains("erro")) {
    // =========================================================================================================

    // =========================================================================================================
    // mostra o erro
    erro = document.createElement("small"); 
    erro.classList.add("erro"); 
    campo.after(erro); 
  }
  erro.textContent = msg;
}
// =========================================================================================================

// =========================================================================================================
// cira um a borda verde quando estiver correto
function setOk(id) {
  const campo = document.getElementById(id); 
  campo.style.borderColor = "green";
  const erro = campo.nextElementSibling; 
  if (erro && erro.classList.contains("erro")) erro.remove(); 
}
// =========================================================================================================

// =========================================================================================================
// envia formulario
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  let valido = true;

  // =========================================================================================================

  // =========================================================================================================
  // login com exatos 6 caracteres
  const login = document.getElementById("LoginAcesso").value.trim();
  if (!/^[a-zA-Z]{6}$/.test(login)) {
    // da erro caso o usuario escreva menos de 6
    setErro(
      "LoginAcesso",
      "Login deve ter exatamente 6 caracteres alfabéticos",
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
      "Senha deve ter exatamente 8 caracteres alfabéticos",
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

