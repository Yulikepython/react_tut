import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData.js"


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }

    render() {
        const todo = this.state.todos.map(item => <TodoItem key={item.id} item={item} handler={this.handleChange} />)
        return (
            <div className="main-box"> {todo} </div>
        )
    }
}

export default App