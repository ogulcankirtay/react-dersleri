import React from "react";

function Product({ name, price }) {
    return (
        <>
            <div>Product </div>
            <div>Product Name {name} </div>

            <div>Product Price {price}</div>
        </>
    );
}

export default Product;
