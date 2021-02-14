import React, {Component} from "react"


class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.generatorClick = this.generatorClick.bind(this)
    }

    componentDidMount(){

        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(res => {
                const {memes} = res.data
                this.setState({allMemeImgs: memes})
                
            })
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    generatorClick(e){
        e.preventDefault()
        this.setState((prevState) => {
            return {
                randomImg: this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
            }
            
        })
    }

    render(){
        return (
            <div className="mainContent">
                <form className="memeForm">
                    <input 
                        type="text"
                        placeholder="text on the top"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="text on the bottom"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.generatorClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator