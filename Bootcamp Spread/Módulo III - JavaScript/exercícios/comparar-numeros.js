let valida1, valida2, valida3;

function ComparaNumeros(num1, num2){
    valida1 = ValidaN1(num1);
    valida2 = ValidaN2(num2);
    valida3 = ValidaNulo(num1, num2);

    if(valida1 && valida2 && valida3){
        let soma = num1 + num2;

        console.log(`Os números ${num1} e ${num2} ${SaoIguais(num1, num2)}são iguais. Sua soma é ${soma}, que é ${ComparaDez(soma)} 10 e ${ComparaVinte(soma)} 20.`);
    }else{
        console.log("Insira valores válidos!");
    }
}

let ValidaN1 = n1 => !isNaN(n1);
let ValidaN2 = n2 => !isNaN(n2);
let ValidaNulo = (n1, n2) => !((n1 === 0) && (n2 === 0));
let SaoIguais = (n1, n2) => iguais = n1 === n2 ? '' : 'não ';
let ComparaDez = soma => soma >= 10 ? 'maior ou igual' : 'menor que';
let ComparaVinte = soma => soma <= 20 ? 'menor ou igual' : 'maior que';

ComparaNumeros(10, 10);










