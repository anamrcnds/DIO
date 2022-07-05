/// Testando comandos via terminal
console.log('Oi mundo');    

function returnEvenValues(array){
    let evenNums = [];
    for(i in array){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i])
        }else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são: ', evenNums);
}

let array = [1, 2, 3, 5, 6, 7, 8];

returnEvenValues(array);