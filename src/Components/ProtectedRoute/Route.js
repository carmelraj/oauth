import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, auth }) => {
  const { isLoading, isAuthenticated } = auth;
  console.log("isAuthenticated", isAuthenticated, auth);
  if (isLoading) return <div>Loading...</div>;
  if (isAuthenticated) return children;
  return <Navigate to="/" />;
};
export default ProtectedRoute;
