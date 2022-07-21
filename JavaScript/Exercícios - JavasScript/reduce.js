function somar(...arr) {

    let resultado = (total, num) => {
        return total + num;
    }

    return arr.reduce(resultado);
}

console.log(somar(10, 10, 46.7))


