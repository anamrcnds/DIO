import React from "react";

const listCustomers = [
    {
        id: 1,
        name: "Maria da Silva",
    },
    {
        id: 2,
        name: "Aline Carneiro",
    },
    {
        id: 3,
        name: "José Oliveira",
    },
    {
        id: 4,
        name: "Antonio Silva",
    }
]

const App = () => {
    
    const renderCustomers = (customer, index) => {
        return (
            <li>{customer.name}</li>
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

export default App