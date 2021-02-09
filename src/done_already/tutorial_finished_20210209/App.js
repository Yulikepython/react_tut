import React from "react"

import Joke from "./components/Joke"

import sportQuestion from "./sampData"


function App(){
    const mappingData = sportQuestion.map((q) => <Joke 
                                            key={q.id}
                                            question={q.question}
                                            punchLine={q.answer}
                                            />);
    return (
        <div className="main-box">
            {mappingData}
        </div>
        
    )
}


export default App