import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData.js"


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todo = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
        return (
            <div className="main-box"> {todo} </div>
        )
    }
}

export default App