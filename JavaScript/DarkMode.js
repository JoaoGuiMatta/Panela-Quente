function Darkmode() {
    document.body.classList.toggle('dark');
    const icone = document.querySelector('.DarkButton i');
    if (document.body.classList.contains('dark')) {
        icone.className = 'bi bi-sun'; //coloca icone de sol no darkmode
    } else {
        icone.className = 'bi bi-moon'; //coloca icone de lua no darkmode
    }
    localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');
}