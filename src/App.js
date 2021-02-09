import React from "react"


//try to make calcapp or something to use button on change
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            x: 3,
            y: 4,
        }
        this.equistion = this.equistion.bind(this)
    }

    equistion(){

    }

    render() {
        return (
            <div>
                <button>Next</button>
                <p></p>

            </div>
        )
    }
}


export default App