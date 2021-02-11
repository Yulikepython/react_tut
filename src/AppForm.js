import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({firstName: e.target.value})
    }

    render(){
        return (
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange} />
                    <h1>{this.state.firstName}</h1>
            </form>
        )
    }
}

export default App