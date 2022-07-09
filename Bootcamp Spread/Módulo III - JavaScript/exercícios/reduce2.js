let carrinho = [
    {
        produto: 'sabao em po',
        preco: 10.5
    },
    {
        produto: 'shampoo',
        preco: 18
    },
    {
        produto: 'queijo',
        preco: 12
    },
]


function debitaSaldo(arr, limite) {
    let subtrair = (saldo, { preco }) => {
        return saldo - preco;
    }

    return arr.reduce(subtrair, limite);
}

console.log(`Troco: R$ ${debitaSaldo(carrinho, 60)}`);