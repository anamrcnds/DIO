import React, { Component } from "react"
import  ReactDom from "react-dom"
import "./styles.css"

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água',
        }
    }

    componentDidMount(){
        window.setTimeout(() => {
            this.setState({
                copo: 'Suco',
            })
        }, 3000);
    }

    alterarCopo = () => {
        this.setState({
            copo: 'agua gelada',
        })
    }

    render() {

        const { clock, copo } = this.state;

        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);