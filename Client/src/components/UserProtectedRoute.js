import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../feautures/auth/authSlice";

const UserProtectedRoute = () => {
  const { user, isAuthenticated } = useSelector(authSelector);

  if (user && user.role === "admin") {
    return <Navigate to="/admin" />;
  }

  return user && isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRoute;
