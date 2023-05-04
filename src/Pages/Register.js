import {Outlet, Link, useNavigate} from 'react-router-dom'


import { useForm  } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    fname: yup.string().matches(/\w+\s\w+/, "Please enter exactly first name and last name").required(),
	username: yup.string().required("Enter a username"),
    email: yup.string().email("Invalid email").required("Enter Your Email!"),
    password: yup.string().min(8).max(32).required(),
    
});

const API_URL = "http://localhost/PHP_API/dbconfig.php"

const config = {
	header: {
		"Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json"
	}
}



const Register = () => {

	const navigate = useNavigate();
	
   
    //
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {

		

		const { fname, username, email, password } = data;
    	const udata = { fname, username, email, password };


    	axios.post(API_URL, udata, config)
         .then(response => {
			console.log(response.data)
			toast.success('Success Notification !', {
				position: toast.POSITION.TOP_RIGHT
			});
			// navigate("/login")
		})
		
		.catch(error => console.error(error));
			
			 reset();
    }
    
   



    return(
        <div>
			<ToastContainer/>
<div class="h-screen md:flex">

	<div
		className="relative overflow-hidden md:flex w-1/2  bg-gradient-to-r from-purple-500 via-purple-500 to-pink-200 i justify-around items-center hidden">
		 
         <img className='' src={process.env.PUBLIC_URL + "default.png"} alt='register img'></img>
		{/* <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div> */}
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
	
		<form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
			<h1 class="text-center text-gray-800 font-bold text-2xl mb-1">Register</h1>
			<p class="text-center text-sm font-normal text-gray-600 mb-7">Input your details</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none"
				{...register ("fname")}
				type="text" name="fname" id="" placeholder="Full name"  required />
				
      </div>
	  <p>{ errors.fname?.message }</p>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 outline-none border-none" type="text" name="username" id="" placeholder="Username" {...register("username")} required />
					
      </div>
	  <p>{ errors.username?.message }</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="email" id="" placeholder="Email Address" {...register("email")} required />
						
      </div>
	  <p>{ errors.email?.message }</p>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" {...register("password", {required: true})} type="password" name="password" id="" placeholder="Password"  />

        </div>
		<p>{ errors.password?.message }</p>
        

				<button type="submit" class="block w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
							<p className='text-sm ml-2'>Have an account?<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer"><span><Link to="/login">Login</Link></span></span></p>
		</form>
	</div>
	
</div>
</div>
    )
}

export default Register

