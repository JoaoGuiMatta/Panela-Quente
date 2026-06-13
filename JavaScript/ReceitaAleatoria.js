const receitas = [
    "/Panela-Quente/Receitas/BoloDeCenoura.html",
    "/Panela-Quente/Receitas/Feijoada.html",
    "/Panela-Quente/Receitas/Lasanha.html",
    "/Panela-Quente/Receitas/Omelete.html",
    "/Panela-Quente/Receitas/PaoDeQueijo.html",
    "/Panela-Quente/Receitas/Ratattouille.html",
    "/Panela-Quente/Receitas/Sanduiche.html",
    "/Panela-Quente/Receitas/Strudel.html",
    "/Panela-Quente/Receitas/Tapioca.html"
];

function ReceitaAleatoria() {

    const indice = Math.floor(Math.random() * receitas.length);

    window.location.href = receitas[indice];

}