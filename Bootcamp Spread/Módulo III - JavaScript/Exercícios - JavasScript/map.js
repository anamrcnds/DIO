let valores = [10, 100];

let produtos = [
    {
        preco: 15,
    },

    {
        preco: 15,
    }
]

function mpy (valor) {
    return valor * this.preco;
}

function superMapComThis(valores, produtos) {
    return produtos.flatMap(produto => (valores.map(mpy, produto)));
}

console.log(superMapComThis(valores, produtos));