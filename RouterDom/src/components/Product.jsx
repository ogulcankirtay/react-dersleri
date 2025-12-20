import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  const { id, name, price } = product;

  return (
    <div
      style={{
        margin: "10px",
        backgroundColor: "lightgrey",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button onClick={()=>navigate("/product-details/" + id)}>Detaya git</button>
    </div>
  );
}

export default Product;
