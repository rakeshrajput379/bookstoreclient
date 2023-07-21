import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  console.warn("Data In Cart ", cartData);
  return (
    <div>
      <h1>Cart List</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name:</td>
            <td>Color:</td>
            <td>Price</td>
            <td>Category</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="priceDetails">
          <div>
            <span>Amount</span>
            <span>0000</span>
          </div>
          <div>
            <span>Discount</span>
            <span>0000</span>
          </div>
          <div>
            <span>Tax</span>
            <span>0000</span>
          </div>
          <div>
            <span>Total</span>
            <span>0000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
