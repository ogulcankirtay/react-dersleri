import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import "../css/ProductDetail.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from '@mui/material/Button';
import { addToBasket, calculateTotalAmount } from "../redux/slices/basketSlice";


function ProductDetail() {
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { id } = useParams();

  const { name, title, price, image, description } = selectedProduct;

  const dispatch = useDispatch();

  const[count,setCount]=useState(0);

  const addBasket=()=>{
    const payload={
      id,
      price,
      image,
      title,
      description,
      count
    }
    dispatch(addToBasket(payload))
    dispatch(calculateTotalAmount())
  }


  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count>0)
      setCount(count-1)
  }

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="body">
      <img src={image} />

      <div className="detail">
        <h2>{title}</h2>
        <p> {description}</p>
        <h1 className="price">{price} ₺</h1>

        <div className="count-div">
          <FaPlus style={{marginRight:"20px"}} className="icon" onClick={increment}/>
          <span style={{marginRight:"20px"}} className="count">{count}</span>
          <FaMinus className="icon" onClick={decrement}/>
        </div>

           <Button
           onClick={addBasket}
            style={{marginTop:"30px",backgroundColor:"rgba(216, 3, 3, 0.72)"}} className="add-basket-button" variant="contained">Sepete Ekle</Button>
      </div>
    </div>
  );
}

export default ProductDetail;
