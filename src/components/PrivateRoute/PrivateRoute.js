import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UseContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log(loading);
    return (
      <div className="h-screen grid place-content-center align-items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user.email) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{ from: location, message: true }}
        replace
      ></Navigate>
    );
  }
};

export default PrivateRoute;
