import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/slices/productSlice";
import Product from "../components/Product";

function ProductList() {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.product);


  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div
      className="flex-row"
      style={{
        flexWrap: "wrap",
        marginTop: "25px",
      }}
    >
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
