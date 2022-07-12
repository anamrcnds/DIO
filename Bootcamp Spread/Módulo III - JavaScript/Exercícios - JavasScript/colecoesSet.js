let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const novoSet = new Set(arr);

    return [...novoSet];
}

console.log(valoresUnicos(array));
