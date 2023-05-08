import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from 'react';
import '../App.css'
import { useNavigate } from "react-router-dom";

function CartIcon({cartCount}) {
    const navigate = useNavigate();
    

    function handleClick() {
        navigate('/cart');


    }

    

    



    

    
    return (
        <div className="cart-icon" onClick={handleClick}>
            <ShoppingBagIcon class="h-6 w-6 text-gray-500" />
             <div className="cart-count">{cartCount}</div>
        </div>
    );
}

export default CartIcon;
