// add btn, time btn

import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            x: 3,
            answer:0,
        }
        this.add = this.add.bind(this)
        this.times = this.times.bind(this)
    }

    add(){
        this.setState((prevState) =>{
            return {
                answer: prevState.answer + prevState.x
            }
        })
    }

    times() {
        this.setState((prevState) => {
            return {
                answer: prevState.answer * prevState.x
            }
        }

        )
        
    }

    render() {
        return (
            <div>
                <p>first number: {this.state.x}</p>
                <p>answer: {this.state.answer}</p>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.times}>TIMES</button>
            </div>
        )
    }
}

export default App