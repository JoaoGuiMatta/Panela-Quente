// mascaras via JQuery
$("#Cpf").mask("000.000.000-00", { reverse: true });
$("#Cep").mask("00000-000");
$("#Cel").mask("(00) 00000-0000");
$("#Tel").mask("(00) 0000-0000");
$("#Nasc").mask("00/00/0000");
//==========================================================================================================

//==========================================================================================================
// muda etapa do cadastro
function Avancar(numero) {
  if (numero === 2 && !validarEtapa1()) return;
  if (numero === 3 && !validarEtapa2()) return;
  document
    .querySelectorAll(".Etapas")
    .forEach((e) => (e.style.display = "none"));
  document.getElementById(`Etapa${numero}`).style.display = "block";
}
//==========================================================================================================

//==========================================================================================================
// volta etapa anterior
function Voltar(numero) {
  document
    .querySelectorAll(".Etapas")
    .forEach((e) => (e.style.display = "none"));
  document.getElementById(`Etapa${numero}`).style.display = "block";
}
//==========================================================================================================

//==========================================================================================================
// valida etapa 1
function validarEtapa1() {
  let valido = true; 

  // verifica se o nome do usuario esta vazio
  const nome = document.getElementById("NomeUsuario").value.trim();
  if (nome.length < 15 || nome.length > 60 || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
    Erro("NomeUsuario", "Nome deve ter entre 15 e 60 caracteres alfabéticos");
    valido = false;
  } else {
    setOk("NomeUsuario");
  }


  // verifica de o nome materno está vazio
  const nomeMae = document.getElementById("NomeMae").value.trim();
  if (!nomeMae) {
    Erro("NomeMae", "Campo obrigatório");
    valido = false;
  } else {
    setOk("NomeMae");
  }

  // verifica se a data de nascimento está vazia
  const nasc = document.getElementById("Nasc").value;
  if (!nasc) {
    Erro("Nasc", "Campo obrigatório");
    valido = false;
  } else {
    setOk("Nasc");
  }

  // verifica se o usuario escolheu alguma opçao
  const sexo = document.getElementById("Sexo").value;
  if (sexo === "Selecione") {
    Erro("Sexo", "Selecione uma opção");
    valido = false;
  } else {
    setOk("Sexo");
  }

  // verifica se o cpf tem 11 digitos
  const cpf = document.getElementById("Cpf").value.replace(/\D/g, "");
  if (cpf.length !== 11) {
    Erro("Cpf", "CPF inválido");
    valido = false;
  } else {
    setOk("Cpf");
  }


  // verifica se o numero de celular está vazio
  const cel = document.getElementById("Cel").value;
  if (!cel) {
    Erro("Cel", "Campo obrigatório");
    valido = false;
  } else {
    setOk("Cel");
  }

  return valido; // Se tudo estiver ok retorna TRUE, caso contrario retorna FALSE
}
//==========================================================================================================

//==========================================================================================================
// validar etapa2
function validarEtapa2() {
  let valido = true;

  //verifica se o cep é tem 8 digitos
  const cep = document.getElementById("Cep").value.replace(/\D/g, "");
  if (cep.length !== 8) {
    Erro("Cep", "CEP inválido");
    valido = false;
  } else {
    setOk("Cep");
  }

  const logradouro = document.getElementById("Logradouro").value.trim();
  if (!logradouro) {
    Erro("Logradouro", "Campo obrigatório");
    valido = false;
  } else {
    setOk("Logradouro");
  }

  const numero = document.getElementById("Numero").value.trim();
  if (!numero) {
    Erro("Numero", "Campo obrigatório");
    valido = false;
  } else {
    setOk("Numero");
  }

  return valido;
}
//==========================================================================================================

//==========================================================================================================
// mensagem de erro
function Erro(id, msg) {
  const campo = document.getElementById(id);
  campo.style.borderColor = "red";
  let erro = campo.nextElementSibling;
  if (!erro || !erro.classList.contains("erro")) {
    erro = document.createElement("small");
    erro.classList.add("erro");
    campo.after(erro);
  }
  erro.textContent = msg;
  return false;
}
//==========================================================================================================

// bloco verde caso a credencial esteja correta 
function setOk(id) {
  const campo = document.getElementById(id);
  campo.style.borderColor = "green";
  const erro = campo.nextElementSibling;
  if (erro && erro.classList.contains("erro")) erro.remove();
  return true;
}
//==========================================================================================================

//==========================================================================================================
// validar etapa3
function validarEtapa3() {
  let valido = true;

  // verifica se o login tem 6 caracteres alfabéticos
  const login = document.getElementById("LoginCad").value.trim();
  if (!/^[a-zA-Z]{6}$/.test(login)) {
    Erro("LoginCad", "Login deve ter exatamente 6 caracteres alfabéticos");
    valido = false;
  } else {
    setOk("LoginCad");
  }

  // verifica se a senha tem 8 caracteres alfabeticos
  const senha = document.getElementById("SenhaCad").value;
  if (!/^[a-zA-Z]{8}$/.test(senha)) {
    Erro("SenhaCad", "Senha deve ter exatamente 8 caracteres alfabéticos");
    valido = false;
  } else {
    setOk("SenhaCad");
  }

  // verifica se a confirmação de senha e a senha original são as mesmas
  const confirmar = document.getElementById("ConfirmarSenha").value;
  if (confirmar !== senha) {
    Erro("ConfirmarSenha", "Senhas não coincidem");
    valido = false;
  } else {
    setOk("ConfirmarSenha");
  }

  return valido;
}
//==========================================================================================================

//==========================================================================================================
// salva em LocalStorage
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validarEtapa3()) return;

  const usuario = {
    nome: document.getElementById("NomeUsuario").value.trim(),
    login: document.getElementById("LoginCad").value.trim(),
    senha: document.getElementById("SenhaCad").value,
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  localStorage.setItem("login", usuario.login);
  localStorage.setItem("senha", usuario.senha);
  localStorage.setItem("usuarioLogado", usuario.login);

  alert("Cadastro realizado! Redirecionando...");
  window.location.href = "../index.html";
});
//==========================================================================================================

//==========================================================================================================
// busca o CEP pelo ViaCep
document.getElementById("Cep").addEventListener("blur", function () {
  const cep = this.value.replace(/\D/g, "");
  if (cep.length !== 8) return;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) return;
      document.getElementById("Logradouro").value = data.logradouro;
      document.getElementById("Bairro").value = data.bairro;
      document.getElementById("Cidade").value = data.localidade;
      document.getElementById("Estado").value = data.uf;
    });
});
//==========================================================================================================
