import React, {Component} from "react"

class Header extends Component{
    render(){
        return (
            <div className="header">
                <div>
                    <h2>Title</h2>
                </div>
                <div>
                    <ul className="headerLink">
                        <li>
                            link1
                        </li>
                        <li>
                            link2
                        </li>
                        <li>
                            link3
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Header