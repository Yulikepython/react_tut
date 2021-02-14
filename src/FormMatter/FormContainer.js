import React, {Component} from "react"

import FormComponent from "./FormComponent"

class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination:"",
            isVegan: false,
            isKosher: false, 
            isLactoseFree: false
        }
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

    // handleSubmit(e){
    //     console.log(e.target)
    // }



    render(){
        return (
            <div>
                <FormComponent 
                    handleChange={this.handleChange}
                    data={this.state} 
                />
            </div>
        )
    }
}

export default FormContainer