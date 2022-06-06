import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../feautures/auth/authSlice";
import { SDRoutes } from "../../routes";

const AdminProtectedRoute = () => {
  const { user } = useSelector(authSelector);

  if (user && user.role !== "admin") {
    return <Navigate to={SDRoutes.Home.path} />;
  }

  return user ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminProtectedRoute
