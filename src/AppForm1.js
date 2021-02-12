import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
            // [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <form>
                <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName}
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName}
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App