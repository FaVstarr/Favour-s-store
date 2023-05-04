import React from "react";
import { useAuth } from "./auth";
import { Navigate, Route, useLocation, useNavigate, useParams } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
}

export default ProtectedRoute;
