import React, {Component} from "react"

function FormComponent(props){
    return (
            <form>
                <input 
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                />
                <input 
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                />
                <input 
                    type="number"
                    placeholder="your age"
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender==="male"}
                        onChange={props.handleChange}
                    />Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender==="female"}
                        onChange={props.handleChange}
                    />Female
                </label>
                <label>
                    you are going to: 
                    <select name="destination" value={props.data.destination} onChange={props.handleChange}>
                        <option value="">Please Choose a destination</option>
                        <option value="tokyo">Tokyo</option>
                        <option value="Ayase">Ayase</option>
                        <option value="Yokohama">Yokohama</option>
                    </select>
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    />Vegan?
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    />Kosher
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    />Lactose Free?
                </label>
                <button>Submit</button>
                    <p>{props.data.firstName} {props.data.lastName} is {props.data.age} years old</p>
                    <p>gender is {props.data.gender}</p>
                    <p>You are going to {props.data.destination}</p>
                    <p>dietary restrictions: 
                        {props.data.isVegan ? "Vegan \n" : null}
                        {props.data.isKosher ? "Kosher \n" : null}
                        {props.data.isLactoseFree ? "LactosFree" : null}
                    </p>
            </form>
        )
}

export default FormComponent