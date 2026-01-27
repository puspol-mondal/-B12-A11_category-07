import React from "react";
import useAuth from "../hook/useAuth/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
