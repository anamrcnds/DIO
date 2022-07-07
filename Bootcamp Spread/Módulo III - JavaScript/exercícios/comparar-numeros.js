let valida1, valida2, valida3;

function ComparaNumeros(num1, num2){
    valida1 = validaN1(num1);
    valida2 = validaN2(num2);
    valida3 = validaNulo(num1, num2);

    if(valida1 && valida2 && valida3){
        let soma = num1 + num2;

        console.log(`Os números ${num1} e ${num2} ${saoIguais(num1, num2)}são iguais. Sua soma é ${soma}, que é ${comparaDez(soma)} 10 e ${comparaVinte(soma)} 20.`);
    }else{
        console.log("Insira valores válidos!");
    }
}

let validaN1 = n1 => !isNaN(n1);
let validaN2 = n2 => !isNaN(n2);
let validaNulo = (n1, n2) => !((n1 === 0) && (n2 === 0));
let saoIguais = (n1, n2) => iguais = n1 === n2 ? '' : 'não ';
let comparaDez = soma => soma >= 10 ? 'maior ou igual' : 'menor que';
let comparaVinte = soma => soma <= 20 ? 'menor ou igual' : 'maior que';

comparaNumeros(10, 10);










