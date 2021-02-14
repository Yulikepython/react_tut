import React, {Component } from "react"

import MainGenerator from "./components/MainGenerator"
import Header from "./components/Header"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainGenerator />
            </div>
        )
    }
}

export default App