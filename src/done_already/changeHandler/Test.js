import React from "react"

class Test extends React.Component{
    render(){
        return (
            <div className="todo-box">
                <input type="checkbox"
                checked={this.props.obj.completed}
                onChange={() => this.props.handler(this.props.obj.id)}/>
                <p>{this.props.obj.text}</p>
            </div>
        )
    }
}

export default Test