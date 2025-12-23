import React, { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  const changeTheme = () => {
    const root = document.getElementById("root");

    const newTheme = !theme;

    if (newTheme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }

    setTheme(newTheme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/logo.png"></img>
        <div className="logo-text">Oğulcan A.Ş</div>
      </div>

      <div>
        <input className="search-input" placeholder="Ara" />
        <Badge
          onClick={() => dispatch(setDrawer())}
          badgeContent={products.length}
          color="error"
        >
          <CiShoppingBasket className="icons" />
        </Badge>
        {theme ? (
          <FaMoon className="icons" onClick={changeTheme} />
        ) : (
          <CiLight className="icons" onClick={changeTheme} />
        )}
      </div>
    </div>
  );
}

export default Header;
