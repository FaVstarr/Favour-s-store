import {Outlet, Link} from "react-router-dom";


const cards = [
    {
        img: <img src={process.env.PUBLIC_URL + '/alexandar-todov-vDTgx5wJwao-unsplash.jpg'} alt="" />,
        title: "White Iphone",
        body: 'We have iPhones and Other complementary accessories',
        id: 1
    },
    {
        img: <img src={process.env.PUBLIC_URL + '/alvaro-perez-WMzSbKlf7PA-unsplash.jpg'} alt="" />,
        title: "Orange phone",
        body: 'We have iPhones and Other complementary accessories',
        id: 2
    },
    {
        img: <img src={process.env.PUBLIC_URL + '/lars-kaizer-qDHwqQ05pVQ-unsplash.jpg'} alt="" />,
        title: "Phone cases",
        body: 'We have Phones Cases and Other complementary accessories',
        id: 3
    },

]

const Layout = () => {

    return(
        <div>
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
  <div className="flex-1">
  <a href="/layout" className=" w-20"><img src={process.env.PUBLIC_URL + "default.png"}></img></a>
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
        <li><a href='/'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


{cards.map((cards) => (
  <div className="grid place-items-center">
     <div className="card w-96 bg-base-100 shadow-xl image-full pb-6 ">
     <figure>{cards.img}</figure>
     <div className="card-body">
       <h2 className="card-title">{cards.title}</h2>
       <p>{cards.body}</p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary">Buy Now</button>
       </div>
     </div>
   </div>
   </div>
 ))}

<div className="">


</div>





<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="bg btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>


        <Outlet />
        </div>
    )
};

export default Layout;