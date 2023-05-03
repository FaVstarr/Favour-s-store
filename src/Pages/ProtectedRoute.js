import React, {useEffect, useState} from "react";
import { Route , redirect } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ component : Component , ...rest }) => {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        // Check if the user is authenticated by verifying the JWT token
        const token = localStorage.getItem("token");
        if (token) {
          fetch("http://localhost/PHP_API/verify_token.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.authenticated) {
                setAuthenticated(true);
              } else {
                setAuthenticated(false);
              }
            });
        } else {
          setAuthenticated(false);
        }
      }, []);
    
      return (
        <Route
          {...rest}
          render={(props) =>
            authenticated ? (
              <Component {...props} />
            ) : (
              <redirect to={{ pathname: "/login" }} />
            )
          }
        />
      );
    };


    
     

export default ProtectedRoute
