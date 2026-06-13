    const Receitas =[ "/Receitas/BoloDeCenoura.html",
        "/Receitas/Feijoada.html",
        "/Receitas/Lasanha.html",
        "/Receitas/Omelete.html",
        "/Receitas/PaoDeQueijo.html",
        "/Receitas/Ratattouille.html",
        "/Receitas/Sanduiche.html",
        "/Receitas/Tapioca.html",
        "/Receitas/Strudel.html",
    ]
    

function ReceitaAleatoria() {

    const indice = Math.floor(Math.random() * Receitas.length);

    window.location.href = Receitas[indice];
}