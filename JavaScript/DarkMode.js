function Darkmode() {
    document.body.classList.toggle('dark');
    const icone = document.querySelector('.DarkButton i');
    if (document.body.classList.contains('dark')) {
        icone.className = 'bi bi-sun'; //coloca icone de sol no darkmode
    } else {
        icone.className = 'bi bi-moon'; //coloca icone de lua no darkmode
    }
    localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');
} //Aplica o darkmode

function AplicarTema() {
    const modo = localStorage.getItem('modo');
    const icone = document.querySelector('.DarkButton i');

    if (modo === 'dark') {
        document.body.classList.add('dark');
        if (icone) icone.className = 'bi bi-sun';
    } else {
        document.body.classList.remove('dark');
        if (icone) icone.className = 'bi bi-moon';
    }
}

document.addEventListener('DOMContentLoaded', AplicarTema); //Mantem o darkmode salvo nas outras paginas