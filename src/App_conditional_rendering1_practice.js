import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state={
            isLoading: true,
            start: Date.now(),
            finsh: new Date()
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
              isLoading: false,
              finish: Date.now()
            })
        },1500)
    }
    render() {
        return (
            <div>
                {this.state.isLoading ? 
                    <h1>Loading now...</h1> : 
                    <h1>Finish Loading!! {this.state.finish - this.state.start} </h1>
                }
            </div>
        )
    }
}

export default App