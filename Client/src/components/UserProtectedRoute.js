import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../feautures/auth/authSlice";
import AuthLayout from "../components/AuthLayout";

const UserProtectedRoute = () => {
  const { user, isAuthenticated } = useSelector(authSelector);

  return user && isAuthenticated && user.role !== "admin" ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserProtectedRoute;
