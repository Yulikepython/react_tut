import React from "react"

function Joke(props) {
    return (
        <div>
            <p style={{display: props.question ? "block" : "none"}}>
                Question:{props.question}
            </p>
            <p style={{display: props.punchLine ? "block" : "none"}}>
                Answer:{props.punchLine}  
            </p>
            <hr/>
        </div>
    )
}

export default Joke