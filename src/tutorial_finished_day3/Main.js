import React from "react"

function Main(){
    const place = "Oregon"
    const time = "now"
    
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    const styles={
        color:"#F4F4F4",
        backgroundColor: "blue"
    }
    return(
        <main className="main-content">
            {`I would love to go to ${place}`}
            <h1 style={styles}>
                It is currently about {date.getHours()} o'clock!
            </h1>
            <p style={{ color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}</p>
        </main>
    )
}

export default Main