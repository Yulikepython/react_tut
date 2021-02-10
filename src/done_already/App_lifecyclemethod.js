import React, {Component} from "react"


class App extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    static getDerivedStateFromProps(){
        // return the new, updated state based upon the props
        //https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
    }

    componentDidMount(){
        //this works when the views just shows up
    }

    // maybe this doesn't exist anymore
    componentWillReceiveProps(nextProps){
        // every time when parent views send props to child views
        if (nextProps.whatever !== this.props.whatever) {

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // decide if compnent should update or not
        //return true if want it to update
        //return false if no
    }

    componentWillUnmount(){
        // when component is gone from the view
        //teardown or cleanup your code before your component disappears]
         //remove event listner
    }

    render(){
        return (
            <div>test</div>
        )
    }
}

export default App