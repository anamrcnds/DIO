import React from "react"
import  ReactDom from "react-dom"
import "./styles.css"

const element = 'String'
const element2 = <h1>Teste</h1>

function App() {

    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);