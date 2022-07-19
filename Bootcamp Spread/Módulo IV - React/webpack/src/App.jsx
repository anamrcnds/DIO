import React from "react";
import mock from "./mock";
import Button from './components/Button'

const App = () => {

    const handleClick = (id) => {
        console.log('deletar cliente...')
        alert(`${id}`)
    }
    
    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer: ${customer.id}`}>
                <li >{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o cliente</Button></li>
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
                    {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default App