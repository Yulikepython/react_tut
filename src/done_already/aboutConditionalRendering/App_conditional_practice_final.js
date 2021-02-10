import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedin: false
        }
        this.btnHandler = this.btnHandler.bind(this)
    }

    btnHandler(){
        this.setState(prevState => ({
            isLoggedin: !prevState.isLoggedin
        }))
    }

    render(){
        let buttonText = this.state.isLoggedin ? "LOG OUT" : "LOG IN"
        let h2Text = this.state.isLoggedin ? "You are logged in" : "You  are logged out"
        return (
            <div>
                <h2>{h2Text}</h2>
                <button onClick={this.btnHandler}>{buttonText}</button>
            </div>
        )
    }
}

export default App