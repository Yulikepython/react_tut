import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            number: 0
        }
        this.increaseBtn = this.increaseBtn.bind(this)
        // this.decreaseBtn = this.decreaseBtn.bind(this)
    }

   increaseBtn(){
        this.setState((prevState)=>{
            return (
                {
                    number: prevState.number + 1
                }
            )
        })
    }

    // decreaseBtn(){
    //     this.setState((prevState)=>{
    //         return (
    //             {
    //                 number: prevState.number - 1
    //             }
    //         )
    //     })
    // }
    render(){
        return (
            <div>
            <h1 style={this.state.style}>ボタンを押すと数が増えるよ　→　 {this.state.number}</h1>
            <button onClick={this.increaseBtn}>add 1</button>
            {/* <button onClick={this.decreaseBtn}>subtract 1</button> */}
        </div>
        )

    }
}

export default App