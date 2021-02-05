import React from "react"

import ContactCard from "./components/ContactCard"


function App() {
    return (
        <div>
            <ContactCard 
                name="Yu"
                imgUrl="https://itc.tokyo"
                phone="xxx-xxx-xxx1"
                email="admin@itc.tokyo"
            />
        </div>
    )
}

export default App