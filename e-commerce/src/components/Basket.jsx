import React from "react";
import "../css/Basket.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  calculateTotalAmount,
  removeBasket,
} from "../redux/slices/basketSlice";

function Basket({ product }) {
  const { id, title, image, price, count } = product;

  const dispatch = useDispatch();
  return (
    <div className="flex-row" style={{ padding: "20px" }}>
      <img className="basket-image" src={image} />
      <p className="basket-title">
        {title} ({count})
      </p>
      <p style={{ width: "60px" }}> {price} ₺</p>

      <Button
        onClick={() => {
          dispatch(removeBasket(product));
          dispatch(calculateTotalAmount());
        }}
        style={{ marginLeft: "30px", backgroundColor: "rgba(216, 3, 3, 0.72)" }}
        className="add-basket-button"
        variant="contained"
      >
        Sil
      </Button>
    </div>
  );
}

export default Basket;
