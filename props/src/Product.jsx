import React from "react";

function Product({ name, price }) {
    return (
        <div>
            <div>Product </div>
            <div>Product Name {name} </div>

            <div>Product Price {price}</div>
        </div>
    );
}

export default Product;
