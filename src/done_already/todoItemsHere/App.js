import React from "react"

import TodoItem from "./TodoItem"
import todosData from "./todosData.js"

// function App() {
//     const todos = todosData.map(item => <TodoItem key={item.id} item={item} />)
//     return (
//         <div className="main-box">
//             {todos}
//         </div>
//     )
// }

class App extends React.Component {
    mapTodoItem() {
        return todosData.map(item => <TodoItem key={item.id} item={item} />)
    }
    render() {
        const todos = this.mapTodoItem()
        return (
            <div className="main-box"> {todos} </div>
        )
    }
}

export default App