// // Substituir números pares por 0 (valida e converte string numérica)

function replace (array) {
    if(!array) return -1;

    let isNumber = (number, index, array) => {
        if(isNaN(number)) {
            return true;
        }else if(typeof number === "string"){
            number = parseFloat(number);
            array[index] = number;
            return false;
        }
    }

    if(array.some(isNumber)) return "Array deve conter apenas números!"

    let isEven = number => {

        if (Math.floor(number) % 2 === 0) {
            return number = 0;
        }
        return number;
        
    }

    return array.map(isEven)
}

console.log(replace([2, 4, '14.8', 3, 10]))