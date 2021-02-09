import React from "react"

// function TodoItem(props){
//     return (
//         <div className="todo-box">
//             <input type="checkbox" name="completed" checked={props.item.completed} />
//             <p>{props.item.text}</p>
//         </div>
//     )
// }

class TodoItem extends React.Component{
    render(){
        return (
            <div className="todo-box">
                <input type="checkbox" name="completed" checked={this.props.item.completed} />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}
export default TodoItem