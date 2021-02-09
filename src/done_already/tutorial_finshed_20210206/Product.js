import React from "react"

function Product(props){
    return (
        <div>
            <ul className="product-list">
                <li>
                    名前: {props.name}
                </li>
                <li>
                    値段: {props.price.toLocaleString("ja", { style: "currency", currency: "JPY" })}
                </li>
                <li>
                    産地: {props.whereFrom}
                </li>
            </ul>
        </div>
    )
}

export default Product