
//https://reactjs.org/docs/forms.html

import React, {Component} from "react"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            alertText:'fruit'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('A ' + this.state.alertText + ' was submitted: ' + this.state.value)
        event.preventDefault()
    }
    //select
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    //textarea
    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     Name:
    //                     <textarea type="text" value={this.state.value} onChange={this.handleChange} />
    //                 </label>
    //                 <input type="submit" value="Submit" />
    //             </form>
    //         </div>
    //     )
    // }

    // input 
    // render() {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>
    //                     Name:
    //                     <input type="text" value={this.state.value} onChange={this.handleChange} />
    //                 </label>
    //                 <input type="submit" value="Submit" />
    //             </form>
    //         </div>
    //     )
    // }
}

export default App