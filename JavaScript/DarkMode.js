function Darkmode() {
    const icone = document.querySelector('.DarkButton i');
    
    if (!icone) return; // Segurança caso o ícone não exista na página

    // 1. Inicia a animação de sumir (encolher)
    icone.classList.add("animando");

    // 2. Espera os 350ms da animação de sumir para trocar o tema e o ícone
    setTimeout(() => {
        document.body.classList.toggle('dark');
        
        // Troca as classes dos ícones (mantendo o preenchido 'bi-sun-fill' se preferir)
        if (document.body.classList.contains('dark')) {
            icone.className = 'bi bi-sun-fill'; 
        } else {
            icone.className = 'bi bi-moon-fill';
        }

        // Salva a preferência no localStorage
        localStorage.setItem('modo', document.body.classList.contains('dark') ? 'dark' : 'light');

        // 3. Remove o estado de sumiço e ativa a animação de "aparecer estourando"
        icone.classList.remove("animando");
        icone.classList.add("aparecendo");

        // 4. Depois de 350ms, remove a classe de estouro para voltar ao tamanho normal
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