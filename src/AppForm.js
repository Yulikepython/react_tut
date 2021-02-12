import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.targetff
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
                <textarea value={"this is text area"} />
                <input type="checkbox" checked={this.state.isFriendly} />
            </form>
        )
    }
}

export default App