"use strict";
// Gereric Types
function adicionaApendiceALista(array, value) {
    // function adicionaApendiceALista <T> (array: T[], value: T) { ==-->> quando se deseja que os valores desconhecidos sejam do mesmo tipo.
    return array.map(item => item + value);
}
adicionaApendiceALista([1, 2, 3], 1);
