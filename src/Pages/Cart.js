import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";

function CartIcon() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    function handleClick() {
        navigate('/cart');
    }

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <div className="cart-icon" onClick={handleClick}>
            <ShoppingBagIcon class="h-6 w-6 text-gray-500" />
            {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
        </div>
    );
}

export default CartIcon;
