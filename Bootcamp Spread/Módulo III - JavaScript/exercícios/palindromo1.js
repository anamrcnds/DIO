// VERIFICA PALÍNDROMO COM MÉTODOS ARRAY

function verificaPalindromo1 (string1){

    if(!string1) return;

    return string1.split("").reverse().join("") === string1;

}

console.log(verificaPalindromo1("omo")); 
