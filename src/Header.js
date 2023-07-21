import React from "react";
import add_to_cart_src from "./images/add-to-cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const result = useSelector((state) => state.cartData);
  console.warn("redux data in header ", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E Comm</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img src={add_to_cart_src} alt=""></img>
        </div>
      </Link>
    </div>
  );
}
