// // Substituir números pares por 0 (valida e converte string numérica)

function replaceEvenNumber (array) {

    let isNumber = (number, index, array) => {
        if(isNaN(number)) {
            return true;
        }else if(typeof number === "string"){
            number = parseFloat(number);
            array[index] = number;
            return false;
        }
    }

    if(!array) return -1;
    if(!array.length) return -1;
    if(array.some(isNumber)) return "Array deve conter apenas números!"

    let isEven = number => {

        let isEvenNumber = Math.floor(number) % 2 === 0 && number > 0;

        if (isEvenNumber) {
            return number = 0;
        }
        return number;
        
    }

    return array.map(isEven)
}

console.log(replaceEvenNumber([2, 4, '16.8', "$", 10]))