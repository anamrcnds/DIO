let cliente1 = {
    nome: "Maria",
    produto: "Maçã",
    preco: 1.50
}

let cliente2 = {
    nome: "João",
    produto: "Jaca",
    preco: 8
}

function dadosVenda(taxa, valor1, valor2){
    console.log(
            `Cliente ${this.nome} comprou ${this.produto}. 
    O total da venda foi R$${this.preco} + R$${taxa} de estacionamento,
    doou também R$ ${valor2} em ajuda para o  cofrinho do Hospital do Cancer 
    na saída do supermercado e mais R$ ${valor1} em moedas para um mendigo. 
    O total gasto foi de R$ ${this.preco + valor1 + valor2 + taxa}`)
}

dadosVenda.apply(cliente2, [7, 1, 1])