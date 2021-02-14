// trying to https://coursework.vschool.io/travel-form/

import React, {Component} from "react"

class App extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location:"",
            wheat: false, 
            egg: false, 
            fruits: false, 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
    }

    handleChange(e){
        const {name, value, type, checked} = e.target
        type === "checkbox" ? 
        this.setState({   
            [name]: checked
        }): 
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        alert({this.state.firstName})

    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <input 
                    type="number"
                    placeholder="your age"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender==="male"}
                        onChange={this.handleChange}
                    />Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender==="female"}
                        onChange={this.handleChange}
                    />Female
                </label>
                <label>
                    you are going to: 
                    <select name="location" onChange={this.handleChange}>
                        <option value="tokyo">Tokyo</option>
                        <option value="Ayase">Ayase</option>
                        <option value="Yokohama">Yokohama</option>
                    </select>
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="wheat"
                        checked={this.state.wheat}
                        onChange={this.handleChange}
                    />Wheat
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="egg"
                        checked={this.state.egg}
                        onChange={this.handleChange}
                    />Egg
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="fruits"
                        checked={this.state.fruits}
                        onChange={this.handleChange}
                    />Fruits
                </label>
                <button>Submit</button>
                    <p>{this.state.firstName} {this.state.lastName} is {this.state.age} years old</p>
                    <p>gender is {this.state.gender}</p>
                    <p>You are going to {this.state.location}</p>
                    <p>dietary restrictions: 
                        {this.state.wheat ? "Wheat" : null}
                        {this.state.egg ? "Egg" : null}
                        {this.state.fruits ? "Fruits" : null}

                    </p>
            </form>
        )
    }
}

export default App