import React, { useState, useEffect } from 'react';
import CartPage from './CartPage';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  function removeFromCart(id) {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }

  return (
    <div>
      <h1>Checkout</h1>
      <ShoppingCart items={cartItems} removeFromCart={removeFromCart} />
      <button>Complete Purchase</button>
    </div>
  );
}

export default CheckoutPage;
