import React from "react"

import Test from "./Test"
import todosData from "./todosData"
import "./style.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }
    handleCheckbox(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id ){
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
        
        const todo = this.state.todos.map(item => <Test key={item.id} obj={item} handler={this.handleCheckbox}/>)
        return (
            <div>
                {todo}
            </div>
        )
        
    }
}


export default App