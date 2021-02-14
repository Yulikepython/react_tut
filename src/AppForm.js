import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "female",
            favColor: "blue",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value, type, checked} = e.target
        type === "checkbox" ? 
        this.setState({   
            [name]: checked
        }): 
        this.setState({
            [name]: value
            // [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        console.log('submit')
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
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
                <br />
                <textarea 
                    value={"this is text area"} 
                    onChange={this.handleChange} 
                />

                <br />

                <label>
                    <input 
                        name="isFriendly"
                        type="checkbox" 
                        checked={this.state.isFriendly} 
                        onChange={this.handleChange}
                    />is Friendly?
                </label>
                <br />
                <label>
                    <input 
                        name="gender"
                        type="radio" 
                        value="male"
                        checked={this.state.gender==="male"} 
                        onChange={this.handleChange}
                    />Male
                </label>
                <br />
                <label>
                    <input 
                        name="gender"
                        type="radio" 
                        value="female"
                        checked={this.state.gender==="female"} 
                        onChange={this.handleChange}
                    />Female
                </label>
                <br />
                <label>
                    Favorite Color: 
                    <select 
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>
                <h1>
                    {this.state.firstName} {this.state.lastName}
                </h1>
                <h2>You are a {this.state.gender}</h2>
                <p>Your favorite color is {this.state.favColor}</p>
                <button>Submit</button>
            </form>
        )
    }
}

export default App