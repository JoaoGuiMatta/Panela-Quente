//pega as receitas
const receitasFixas = [
    "/Panela-Quente/Receitas/BoloDeCenoura.html",
    "/Panela-Quente/Receitas/Feijoada.html",
    "/Panela-Quente/Receitas/Lasanha.html",
    "/Panela-Quente/Receitas/Omelete.html",
    "/Panela-Quente/Receitas/PaoDeQueijo.html",
    "/Panela-Quente/Receitas/Ratattouille.html",
    "/Panela-Quente/Receitas/Sanduiche.html",
    "/Panela-Quente/Receitas/Strudel.html",
    "/Panela-Quente/Receitas/Tapioca.html",
]
// =========================================================================================================

// =========================================================================================================
// sorteia elas entre si e mostra
function ReceitaAleatoria() {
    const receitasUsuario = JSON.parse(localStorage.getItem('receitasUsuario')) || [];
    const totalFixas = receitasFixas.length;
    const total = totalFixas + receitasUsuario.length;

    if (total === totalFixas) {
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
// =========================================================================================================