import React from "react"

import Joke from "./components/Joke"



function App(){
    return (
        <div>
            <Joke
            question="great?"
            punchLine="puching!"
            />
            <Joke
                question="good?"
                
            />
            <Joke
                question="good3?"
                punchLine="chopping!"
            />
            <Joke
                question="good4?"
                
            />
            <Joke
                question="good5?"
                punchLine="trailing!"
            />
        </div>
        
    )
}


export default App