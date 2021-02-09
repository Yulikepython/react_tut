import React, {Component} from "react"
import ReactDom from "react-dom"


class App extends React.Component{
    render(){
        return (
            <div>
                <Header usernae="Yu" />
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component{
    render(props) {
        return (
            <header>
                <p>Welcom, {this.props.username}</p>
            </header>
        )
    }
}

class Greeting extends Component{
    greet(){
        const date = new Date()
        const hours = date.getHours()
        var greet
        if (hours < 12) {
            greet = "morning"
        } else if (hours >= 12 && hours < 17 ){
            greet = "afternoon"
        } else {
            greet = "night"
        }
        return greet
    }
    render(){
        const timeOfDay = this.greet()
        return (
            <h1>
                Good {timeOfDay} to you, sir or madam!
            </h1>
        )
    }
}