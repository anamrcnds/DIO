function validaArray (arr, num) {
    try{
        if(!arguments.length) throw new ReferenceError("Informe valores!");

        if(typeof arr !== "object") throw new TypeError ("Array deve ser do tipo object!");

        if(typeof num !== "number") throw new TypeError ("Num deve ser do tipo number!");

        if(arr.length !== num) throw new RangeError ("Tamanho inválido!");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            // throw e;
            // console.log(e.name);
            // console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: " + e);
            console.log(e.message);
        }
    }
}

console.log(validaArray([1, 2, 3], 3))