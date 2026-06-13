const BASE =
    window.location.hostname === "joaoguimatta.github.io"
        ? "/Panela-Quente"
        : "";

const receitas = [
    `${BASE}/Receitas/BoloDeCenoura.html`,
    `${BASE}/Receitas/Feijoada.html`,
    `${BASE}/Receitas/Lasanha.html`,
    `${BASE}/Receitas/Omelete.html`,
    `${BASE}/Receitas/PaoDeQueijo.html`,
    `${BASE}/Receitas/Ratattouille.html`,
    `${BASE}/Receitas/Sanduiche.html`,
    `${BASE}/Receitas/Strudel.html`,
    `${BASE}/Receitas/Tapioca.html`
];

function ReceitaAleatoria() {

    const indice = Math.floor(Math.random() * receitas.length);

    window.location.href = receitas[indice];

}