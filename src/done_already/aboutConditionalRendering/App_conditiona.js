import React, {Component} from "react"

import Conditional from "./Conditional"

class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true,
            time: Date.now()
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false,
                time: Date.now()
            })
        }, 1500)
    }

    render(){
        return (
            <div>
                <Conditional st={this.state} />
            </div>
        )
    }
}

export default App