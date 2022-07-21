// Crie uma função que recebe o array alunos e um número que irá representar a média final;
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

let alunos = [
    {
        nome: "Fabio",
        nota: 2,
    },
    {
        nome: "Maria",
        nota: 9,
    },
    {
        nome: "Joice",
        nota: 6,
    },
    {
        nome: "Pedro",
        nota: 4,
    },
    {
        nome: "Luiz",
        nota: 3,
    },
    {
        nome: "Julia",
        nota: 5,
    },
    {
        nome: "Marcos",
        nota: 7.5,
    },
]

function aprovados (alunos, media) {
    let notasAprovados = ({nota}) => {
        if( nota >= media ) {
            return nota];
        }
    }

    return alunos.filter(notasAprovados);
    
}


console.log(aprovados(alunos, 5))
