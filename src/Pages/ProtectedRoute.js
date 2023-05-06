import React, {useEffect, useState}from "react";
import { useAuth } from "./auth";
import { Navigate, Outlet, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost/PHP_API/verify_token.php"

const ProtectedRoute = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)

    let jwt = localStorage.getItem('jwt') || '';

    const navigate = useNavigate();

    const config = {
        headers: {
            
            Authorization: jwt ? `Bearer ${jwt}` : '',
            "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json"
        }
    }


    const checkAuth = async () =>{
        try{
        axios.get(API_URL,config)
        .then(response => {
            console.log(response)
            localStorage.getItem("token", JSON.stringify(response.data.token))
            if(response.status === 200){
                    setIsLoggedIn(true)
                       return children
                
            }else{
                setIsLoggedIn(false)
                
            }
        
        })
    }catch(error){
        console.log(error)
        setIsLoggedIn(false)
    }
    }

    useEffect(()=>{
        checkAuth()
    }, [])

    if (isLoggedIn == null){
        return(
            <div>
                LOADING...
            </div>
        )
    }
    return(
        !isLoggedIn ? navigate('/login') : (
            children || <Outlet />
        )
    )

}

export default ProtectedRoute;
