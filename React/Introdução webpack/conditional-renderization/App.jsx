import React from "react";

const buttonA = <button>Histórico dos clientes</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false;

const App = () => {
    
    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br/>
            {buttonA}
        </div>
    )

    const renderAddShowCustomer = () => ( 
        <div>
            Clique abaixo para cadastrar o cliente
            <br/>
            {buttonB}
        </div>
    )

    const costumer = "Cliente"

    const showCustomer = () => { 

        if(!hasCustomer) return null;

        return (
            <div>
                <h1>Nome do Cliente: Cliente</h1>
            </div>
        )
    }
    
    return (
        <div>
            <p>Testando...</p>
            {hasCustomer ? renderShowHistory() : renderAddShowCustomer()}
            <div>
                {showCustomer()}
            </div>
        </div>
    )
}

export default App