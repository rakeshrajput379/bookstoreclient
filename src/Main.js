import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "./redux/action";
import { productList } from "./redux/productAction";
import { useSelector } from "react-redux";
import addToCartImg from "./images/add-to-cart.png";

export default function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main component ", data);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  useEffect(() => {
    dispatch(productList());
  });

  return (
    <div>
      <button onClick={() => dispatch(emptyCart(product))}>Clear Cart</button>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={addToCartImg} alt=""></img>
            <div>Name:{item.name}</div>
            <div>Name:{item.category}</div>
            <div>Name:{item.price}</div>
            <div>Name:{item.color}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
