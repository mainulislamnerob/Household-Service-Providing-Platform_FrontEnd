import React from "react";
import { Navigate } from "react-router-dom"; // Import Navigate
import useAuthContext from "../hook/useAuthContext";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext(); // If your hook provides a loading state

  // While checking auth status, show loader
  if (loading) {
    return <Loading />;
  }

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise → allow route
  return children;
};

export default PrivateRoute;
