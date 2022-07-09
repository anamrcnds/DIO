function filtraPares (num) {
    return num % 2 === 0;
}

function apenasPares(...arr){
    return arr.filter(filtraPares);
}

console.log(apenasPares(1, 3, 9, 8, 10, 4, 20, 18, 60).sort((a,b) => a - b));

// function ordenaUTF(...arr) {
//     let ordena = num => {
//         return `Valor: ${num} ===> ${String(num).charCodeAt(0)}\n`;
//     }

//     return arr.flatMap(ordena).sort();
// }

// console.log(ordenaUTF(1, 3, 9, 8, 10, 4, 20, 18, 60))