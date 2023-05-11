import React, { useState } from "react";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const reduceQuantity = (id) => {
    const updatedCartItems = cartItems.map((item,cartItem)=>{
      
      if(item.id === id){
        return{...item, quantity: item.quantity - 1};
        
      }
    
      return item;
    });
   
    setCartItems(updatedCartItems);
  }

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item)=>{
      if(item.id === id){
        return{...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  return (
    <div className="bg-white-200">

<div className="navbar bg-gradient-to-r from-purple-900 via-purple-300 to-pink-200 ...">
  <div className="flex-1">
  <a href="/layout" className="  w-40"><img src={process.env.PUBLIC_URL + "cover.png"}></img></a>
</div>
  
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={process.env.PUBLIC_URL+ '/Passport.jpg'} alt="avatar" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href="/" className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
         
        </li>
        <li><a href="/">Settings</a></li>
        <li><a href='/login'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
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
              <td className="py-5">{cartItem.title}</td>
              <td className="py-5">{cartItem.price}</td>
              <td>
                <button onClick={()=> reduceQuantity(cartItem.id) }>-</button>
              </td>
              <td className="py-5">{cartItem.quantity}</td>
              <td>
              <button onClick={()=> increaseQuantity(cartItem.id) }>+</button>
              </td>
              <td className="py-5">{isNaN(cartItem.price) || isNaN(cartItem.quantity) ? '': cartItem.price * cartItem.quantity }</td>
              <td>
                <button
                className="bg-neutral hover:bg-gradient-to-r from-purple-500 via-purple-500 to-pink-200 text-white px-4 py-2 rounded"
                
                 onClick={() => removeFromCart(cartItem)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to={'/checkout'}><button className="btn btn-wide w-full">CHECK OUT</button></Link>
    </div>
  );
};




export default CartPage;