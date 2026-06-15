// icone de perfil
const usuarioLogado = localStorage.getItem('usuarioLogado')
const btnEntrar = document.querySelector('.entrar')

if (usuarioLogado && btnEntrar) {
    btnEntrar.innerHTML = `
        <i class="bi bi-person-circle"></i>
        <div class="MenuPerfil">
            <span>${usuarioLogado}</span>
            <a href="#" onclick="Sair()">Sair</a>
        </div>
    `
}

function Sair() {
    localStorage.removeItem('usuarioLogado')
    window.location.reload()
}
// =========================================================================================================

// no mobile troca hover por click
document.querySelector('.entrar').addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        e.preventDefault()
        const menu = document.querySelector('.MenuPerfil')
        if (menu) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block'
        }
    }
})