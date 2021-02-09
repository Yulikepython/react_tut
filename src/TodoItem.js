import React from "react"

class TodoItem extends React.Component{

    render(){
        return (
            <div className="todo-box">
                <input type="checkbox"
                name="completed" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handler(this.props.item.id)}/>
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}
export default TodoItem