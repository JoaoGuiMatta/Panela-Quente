// mantém o usuário logado e cria um icone de perfil com o nome
const usuarioLogado = localStorage.getItem('usuarioLogado')
const btnEntrar = document.querySelector('.entrar')

if (usuarioLogado && btnEntrar) {
    // troca o conteúdo do botão
    btnEntrar.innerHTML = `
        <i class="bi bi-person-circle"></i>
        <div class="MenuPerfil">
            <span>${usuarioLogado}</span>
            <a href="#" onclick="Sair()">Sair</a>
        </div>
    `
}

function Sair() {
    localStorage.removeItem('usuarioLogado') // remove o usuário logado
    window.location.reload() // recarrega a página
}