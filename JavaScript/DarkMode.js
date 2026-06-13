function Darkmode() {
    const icone = document.querySelector('.DarkButton i');
    
    if (!icone) return; 
    icone.classList.add("animando");

    
    setTimeout(() => {
        document.body.classList.toggle('dark');
        
    
        if (document.body.classList.contains('dark')) {
            icone.className = 'bi bi-sun-fill'; 
        } else {
            icone.className = 'bi bi-moon-fill';
        }

     
        localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');

      
        icone.classList.remove("animando");
        icone.classList.add("aparecendo");

    
        setTimeout(() => {
            icone.classList.remove("aparecendo");
        }, 350);

    }, 350);
}

function AplicarTema() {
    const modo = localStorage.getItem('modo');
    const icone = document.querySelector('.DarkButton i');

    if (modo === 'dark') {
        document.body.classList.add('dark');
        if (icone) icone.className = 'bi bi-sun-fill';
    } else {
        document.body.classList.remove('dark');
        if (icone) icone.className = 'bi bi-moon-fill';
    }
}

// Mantém o darkmode salvo ao carregar a página
document.addEventListener('DOMContentLoaded', AplicarTema);