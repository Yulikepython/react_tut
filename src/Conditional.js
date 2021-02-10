import React, {Component } from "react"

class Conditional extends Component{
    // condition ? statement if true : statement if false
    render(props){
        return (
            <div>
                {this.props.st.isLoading ? <div>Loading...</div> : <div>Done with loading!!!</div>}
            </div>
            
        )
        // if(this.props.st.isLoading){
        //     return (
        //         <div>Loading...</div>
        //     )
        // } else {
        //     return (
        //         <div>Done with loading</div>
        //     )
            
        // }
    }
    
}

export default Conditional