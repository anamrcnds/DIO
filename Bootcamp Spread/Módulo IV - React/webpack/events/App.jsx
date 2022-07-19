import React from "react";

const listCustomers = [
    {
        id: 1,
        name: "Maria da Silva",
        skills: ['React', 'NOde', 'CSS']
    },
    {
        id: 2,
        name: "Aline Carneiro",
        skills: ['Python', 'NOde', 'NOSql']
    },
    {
        id: 3,
        name: "José Oliveira",
        skills: ['C#', 'Go', 'CSS']
    },
    {
        id: 4,
        name: "Antonio Silva",
        skills: ['Eclipse', 'NOde', 'Java']
    }
]

const App = () => {

    const handleClick = (e, id) => {
        console.log('deletar cliente...')
        alert(`${id}`)
    }
    
    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer: ${customer.id}`}>
                <li >{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente x</button></li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

const renderSkills = (skill, index) => {
    return (
        <div style={{paddingLeft: '30px'}} key={`Skill-${index}`}>
            <li key={`skill- ${index}`}>{skill}</li>
        </div>
    )
}

    return (
        <div>
            <p>Testando...</p>
            <div>
                <ul>
                    {listCustomers.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}


// import React from "react";

// const App = () => {

//     const name = "Nome qualquer"

//     const handleChange = (e) => {
//         const { value } = e.target;
//         console.log(value)
//     }

//     const showEvent = (e) => {
//         console.log('Evento clicado')
//         console.log(e)
//         alert(name)
//     }
    
//     const Button = <button onClick={showEvent}>Mostrar Evento</button>    

//     return (
//         <div>
//             <p>Testando...</p>
//             <input onChange={handleChange}/>
//             {Button}
//         </div>
//     )
// }

// export default App