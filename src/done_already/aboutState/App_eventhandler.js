import React from "react"

function test(){
    console.log("test")
}

class App extends React.Component {
    render() {
        return (
            <div>
                <p onMouseOver={ ()=> console.log("hovered!!")} id="textP">test</p>
                <button onClick={test}>click me</button>
            </div>
        )
    }
}

export default App