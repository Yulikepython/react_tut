import React, {Component } from "react"

import MemeGenerator from "./components/MemeGenerator"
import Header from "./components/Header"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App