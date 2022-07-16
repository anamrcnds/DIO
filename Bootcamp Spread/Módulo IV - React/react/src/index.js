import React from "react"
import  ReactDom from "react-dom"
import "./styles.css"

function sum(a,b){
    return a+b
}

function primeiroJSX(){
    return (
        <div>
            Introdução ao ReactJS
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
            <h1>Soma: {sum(10, 30)}</h1>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);