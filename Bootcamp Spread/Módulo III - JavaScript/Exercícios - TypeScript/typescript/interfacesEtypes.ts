function soma(a: number, b: number) {
    return a + b;
}
console.log(soma(2,2));

/* interfaces */

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático'
//     executarRugido(alturaEmDecibeis: number): void,
// }

// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean,
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
// }

// const felino: IFelinos = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true, 
//     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
// }

/* types */

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático',
    domestico: boolean,
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande',
}

type IDomestico = IFelino | ICanino;
// type IDomestico = IFelino & ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}