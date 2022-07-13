// interface IUsuario {
//     id: string,
//     email: string,
// }

// interface IAdmin extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'supervisor',
// }

// function redirecione (usuario: IUsuario | IAdmin) {
//     if('cargo' in usuario) {
//         // redirecionar para a área de administração
//     }
//     //redirecionar para a área do usuário
// }

//Com ternário (?)

interface IUsuario {
    id: string,
    email: string,
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor', // transforma 'cargo' em um dado opcional
}

function redirecione (usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo);
    }
    //redirecionar para a área do usuário
}