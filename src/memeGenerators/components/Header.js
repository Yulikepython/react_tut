import React, {Component} from "react"

class Header extends Component{
    render(){
        return (
            <header className="header">
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" className="headerImage" />
            <p>MemeGenerator</p>
            </header>
        )
    }
}

export default Header