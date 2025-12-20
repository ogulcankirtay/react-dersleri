import React from "react";
import { products } from "../data/Data";
import Product from "../components/Product";

function ProductList() {
    return (
        <div>
            {products && products.map((e) => <Product key={e.id} product={e} />)}
        </div>
    );
}

export default ProductList;
