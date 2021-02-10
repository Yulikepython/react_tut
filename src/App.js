import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedin: true
        }
        this.btnHandler = this.btnHandler.bind(this)
    }

    btnHandler(){
        this.setState(prevState => ({
            isLoggedin: !prevState.isLoggedin
        }))
    }

    render(){
        return (
            <div>
                { this.state.isLoggedin ? 
                    <h2>You are Logged in</h2> : 
                    <h2>You are Logged out</h2>
                }
                { this.state.isLoggedin ? 
                    <button onClick={this.btnHandler}>log out</button> : 
                    <button onClick={this.btnHandler}>log in </button>
                }
            </div>
        )
    }
}

export default App