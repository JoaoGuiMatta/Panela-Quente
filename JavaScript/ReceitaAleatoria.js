const receitasFixas = [
    "../Receitas/BoloDeCenoura.html",
    "../Receitas/Feijoada.html",
    "../Receitas/Lasanha.html",
    "../Receitas/Omelete.html",
    "../Receitas/PaoDeQueijo.html",
    "../Receitas/Ratattouille.html",
    "../Receitas/Sanduiche.html",
    "../Receitas/Strudel.html",
    "../Receitas/Tapioca.html",
]

function ReceitaAleatoria() {
    const receitasUsuario = JSON.parse(localStorage.getItem('receitasUsuario')) || [];
    const totalFixas = receitasFixas.length;
    const total = totalFixas + receitasUsuario.length;

    if (total === totalFixas) {
        // Se não tem receitas de usuário, vai pra uma fixa
        const indice = Math.floor(Math.random() * totalFixas);
        window.location.href = receitasFixas[indice];
        return;
    }

    const indice = Math.floor(Math.random() * total);

    if (indice < totalFixas) {
        window.location.href = receitasFixas[indice];
    } else {
        const idxUsuario = indice - totalFixas;
        localStorage.setItem('receitaExibir', idxUsuario);
        window.location.href = '../Paginas/ReceitaUsuario.html';
    }
}