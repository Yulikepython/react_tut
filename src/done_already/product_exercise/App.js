import { render } from "@testing-library/react"
import React from "react"

import productData from "./productData"
import Product from "./components/Product"

function App(){
    const productDataMapped = productData.map(prod => <Product
                                            key={prod.id}
                                            name={prod.name}
                                            price={prod.price}
                                            whereFrom={prod.whereFrom}
                                        />)
    return (
        <div>
            { productDataMapped }
        </div>
    )
}

export default App