/* VERIFICA PALÍNDROMO COMPARANDO STRINGS, IMPEDINDO CARACTERES 
ESPECIAIS E ACEITANDO STRINGS COM ESPAÇOS */

let eliminaEspacos = string => string.split(' ').join('');

function verificaEspeciais(str) { 
    let caracteres = "!@#$%¨&*()-+[]`~^;':.,?|";

    for(letra in str){
        for(char in caracteres){
            if(str[letra] === caracteres[char]){
                return false;
            }
        }
    }
    return true;
}

function compara(frase){ 
    for (let i=0; i<frase.length/2; i++){
        if(frase[i] !== frase[frase.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function verificaPalindromo(string){
    if(!string) return "String não existe.";

    let frase = eliminaEspacos(string);
    let especial = verificaEspeciais(frase);

    if(especial){ 
        return compara(frase);
    }

    return "Sentença não pode conter: !@#$%¨&*()-+[]`~^;:.,?/|";
}

console.log(verificaPalindromo("anak"))