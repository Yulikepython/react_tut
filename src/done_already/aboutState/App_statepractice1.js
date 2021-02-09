import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn:false        }
    }

    evaluator(){
        var evaluation
        if (this.state.isLoggedIn){
            evaluation = "in"
        } else {
            evaluation = "out"
        }
        return evaluation
    }
    render(){
        var inOut = this.evaluator()
        return(
            <div>
                <h1>You are currently logged {inOut} </h1>
            </div>
        )
    }
}

export default App