import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="bg-white-200">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id} className="border-b">
              <td className="py-2">{cartItem.title}</td>
              <td className="py-2">{cartItem.price}</td>
              <td className="py-2">{cartItem.quantity}</td>
              <td className="py-2">{cartItem.price * cartItem.quantity}</td>
              <td>
                <button
                className="bg-pink-200 hover:bg-gradient-to-r from-purple-500 via-purple-500 to-pink-200 text-white px-4 py-2 rounded"
                
                 onClick={() => removeFromCart(cartItem)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default CartPage;