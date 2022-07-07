let num1, num2, soma;
let comparaDez, comparaVinte, iguais;

function comparaNumeros(num1, num2){

    soma = num1 + num2;

    iguais = num1 === num2 ? 'são' : 'não são';
    comparaDez = soma >= 10 ? 'maior ou igual' : 'menor ou igual';
    comparaVinte = soma <= 20 ? 'menor ou igual' : 'maior ou igual';

    console.log(`Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é ${comparaDez} à 10 e ${comparaVinte} à 20.`)
}

comparaNumeros(15, 7)










