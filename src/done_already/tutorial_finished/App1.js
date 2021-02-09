import { render } from "@testing-library/react"
import React from "react"

import Footer from "./Footer"

function App(){
    return (
        <div>
            <nav>
            <h1> Hellow again</h1>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            </nav>
            <main>
                <p>This is my main contents...</p>
            </main>
            <Footer />
        </div>
        
        )
}

export default App