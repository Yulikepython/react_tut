import React from "react"

class TodoItem extends React.Component{
    constructor(props){
        super()
        this.state = {
            completedStyle: {
                fontStyle: "italic",
                color: "gray",
                textDecoration: "line-through"
        }
    }
    }
    render(){
        return (
            <div className="todo-box">
                <input type="checkbox"
                name="completed" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handler(this.props.item.id)}/>
                <p style={this.props.item.completed ? this.state.completedStyle: null}>{this.props.item.text}</p>
            </div>
        )
    }
}
export default TodoItem