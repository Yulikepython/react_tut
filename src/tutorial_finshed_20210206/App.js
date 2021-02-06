import React from "react"

import ContactCard from "./ContactCard"


function App() {
    return (
        <div>
            <ContactCard 
                contact = {
                    {
                        name="Yu",
                        imgUrl="https://itc.tokyo",
                        phone="xxx-xxx-xxx1",
                        email="admin@itc.tokyo",
                    },
                    {
                        name="Aya",
                        imgUrl="https://itc.tokyo",
                        phone="111-xxx-xxx",
                        email="xxx@itc.tokyo"
                    }
                }
                    
                
            />
        </div>
    )
}

export default App