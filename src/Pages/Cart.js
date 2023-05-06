import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from 'react';
import '../App.css'

function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingBagIcon class="h-6 w-6 text-gray-500" />

      <div className="cart-count">0</div>
    </div>
  );
}

export default CartIcon;
