import React from "react";
import CartIcon from "./Cart";


const productCards = [
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'iPhone14 pro max.jpg'} alt="picture of iPhone 14" />,
        title: "Iphone 14 pro max",
        price: "1,280,000",
        id: 1,
        tags: "iphone",
        category: "phones"

    },
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'iPhone14 pro max.jpg'} alt="picture of iPhone 14" />,
        title: "Iphone 13 pro max",
        price: "1,280,000",
        id: 2,
        tags: "iphone",
        category: "phones"

    },
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'Samsung s22 ultra.jpg'} alt="picture of iPhone 14" />,
        title: "Samsung S22 Ultra",
        price: "1,280,000",
        id: 3,
        tags: "samsung",
        category: "phones"

    },
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'Tecno camon 20.jpg'} alt="picture of iPhone 14" />,
        title: "Tecno Camon 20",
        price: "1,280,000",
        id: 4,
        tags: "tecno",
        category: "phones"

    },
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'tecno spark 10c.jpg'} alt="picture of iPhone 14" />,
        title: "Tecno Spark 10C",
        price: "1,280,000",
        id: 5,
        tags: "tecno",
        category: "phones"

    },
    {
        img: <img className="object-scale-down w-60 h-60" src={process.env.PUBLIC_URL + 'iPhone14 pro max.jpg'} alt="picture of iPhone 14" />,
        title: "Iphone 14 pro max",
        price: "1,280,000",
        id: 6,
        tags: "iphone",
        category: "phones"

    }

]

const handleClick = (item) => {
    

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemsInCart = cartItems.find(cartItem => cartItem.id === item.id);

        if(itemsInCart){
            itemsInCart.quantity += 1;
        }else {
            cartItems.push({...item,quantity:1});
        }
        localStorage.setItem('cartItems',JSON.stringify(cartItems));

    
}

const Products = () => {
    return(
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

<CartIcon />
<div className="grid grid-cols-3">

    {productCards.map((productCard)=>(
        <div className="card object-scale-down w-60 h-100 pb-8 mb-4 bg-base-100 hover:shadow-xl cursor-pointer" onClick={() => handleClick(productCard)}>
        <figure>{productCard.img}</figure>
        <div className="card-body object-scale-down h-30">
          <h2 className="card-title">
            {productCard.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Price(NGN): {productCard.price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{productCard.tags}</div>
            <div className="badge badge-outline">{productCard.category}</div>
          </div>
        </div>
      </div>
    ))}

</div>

        </div>
    )
}


export default Products;