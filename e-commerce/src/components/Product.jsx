import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const { id,title, image, price } = product;
  const navigate=useNavigate();

  return (
    <div>
      <div className="card" onClick={() => navigate("/product-details/"+id)}>
        <img className="image" src={image} />
        <p className="title">{title}</p>
        <h5>{price} ₺</h5>
      </div>
    </div>
  );
}

export default Product;
