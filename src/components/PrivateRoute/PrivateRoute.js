import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UseContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user.email) return children;
  else
    return (
      <Navigate
        to="/login"
        state={{ from: location, message: true }}
        replace
      ></Navigate>
    );
};

export default PrivateRoute;
