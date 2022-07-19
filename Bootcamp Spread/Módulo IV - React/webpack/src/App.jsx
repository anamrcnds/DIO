import React from "react";

const App = () => {

    const name = "Nome qualquer"

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('Evento clicado')
        console.log(e)
        alert(name)
    }
    
    const Button = <button onClick={showEvent}>Mostrar Evento</button>    

    return (
        <div>
            <p>Testando...</p>
            <input onChange={handleChange}/>
            {Button}
        </div>
    )
}

export default App