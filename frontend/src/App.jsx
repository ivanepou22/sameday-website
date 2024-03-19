import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SDRoutes } from "./routes";
import {
  Home,
  About,
  Contact,
  Blogs,
  Login,
  Register,
  ForgotPassword,
  Shop,
  CovidTesting,
  WellnessCenter,
  LaboratoryServices,
  RadiologyServices,
  PatientDashboard,
  PatientProfile,
  Appointment,
  ShoppingCart,
  Checkout,
  BlogDetails,
  ServiceDetails,
  Clinics,
  Logout,
  ResetPassword,
  EditAppoint,
} from "./pages";
import {
  Dashboard,
  Patients,
  Appointments,
  Doctors,
  Services,
  PatientVisits,
  PatientLogs,
  Orders,
  Login as AdminLogin,
  // Register as AdminRegister,
  ForgotPassword as AdminForgotPassword,
  Users,
  LogoutAdmin,
  AdminResetPassword,
} from "./admin/pages";
import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import AdminPasswordResetSuccess from "./admin/pages/AdminPasswordResetSuccess";

function App() {
  const routes = [
    {
      path: SDRoutes.Home.path,
      element: <Home />,
    },
    {
      path: SDRoutes.About.path,
      element: <About />,
    },
    {
      path: SDRoutes.Contact.path,
      element: <Contact />,
    },
    {
      path: SDRoutes.Blogs.path,
      element: <Blogs />,
    },
    {
      path: SDRoutes.Login.path,
      element: <Login />,
    },
    {
      path: SDRoutes.Register.path,
      element: <Register />,
    },
    {
      path: SDRoutes.ForgotPassword.path,
      element: <ForgotPassword />,
    },
    {
      path: SDRoutes.PasswordResetSuccess.path,
      element: <PasswordResetSuccess />,
    },
    {
      path: SDRoutes.Shop.path,
      element: <Shop />,
    },
    {
      path: SDRoutes.WellnessCenter.path,
      element: <WellnessCenter />,
    },
    {
      path: SDRoutes.RadiologyServices.path,
      element: <RadiologyServices />,
    },
    {
      path: SDRoutes.LaboratoryServices.path,
      element: <LaboratoryServices />,
    },
    {
      path: SDRoutes.CovidTesting.path,
      element: <CovidTesting />,
    },
    {
      path: SDRoutes.Clinics.path,
      element: <Clinics />,
    },
    {
      path: SDRoutes.ResetPassword.path,
      element: <ResetPassword />,
    },
    {
      element: <UserProtectedRoute />,
      children: [
        {
          path: SDRoutes.Appointment.path,
          element: <Appointment />,
        },
        {
          path: SDRoutes.EditAppoint.path,
          element: <EditAppoint />,
        },
        {
          path: SDRoutes.PatientDashboard.path,
          element: <PatientDashboard />,
        },
        {
          path: SDRoutes.Checkout.path,
          element: <Checkout />,
        },
        {
          path: SDRoutes.PatientProfile.path,
          element: <PatientProfile />,
        },
      ],
    },
    {
      path: SDRoutes.ShoppingCart.path,
      element: <ShoppingCart />,
    },
    {
      path: SDRoutes.BlogDetails.path,
      element: <BlogDetails />,
    },
    {
      path: SDRoutes.ServiceDetails.path,
      element: <ServiceDetails />,
    },
    {
      path: SDRoutes.Logout.path,
      element: <Logout />,
    },
    {
      element: <AdminProtectedRoute />,
      children: [
        {
          path: SDRoutes.Dashboard.path,
          element: <Dashboard />,
        },
        {
          path: SDRoutes.adminUsers.path,
          element: <Users />,
        },
        {
          path: SDRoutes.Patients.path,
          element: <Patients />,
        },
        {
          path: SDRoutes.Appointments.path,
          element: <Appointments />,
        },
        {
          path: SDRoutes.Doctors.path,
          element: <Doctors />,
        },
        {
          path: SDRoutes.Services.path,
          element: <Services />,
        },
        {
          path: SDRoutes.PatientVisits.path,
          element: <PatientVisits />,
        },
        {
          path: SDRoutes.PatientLogs.path,
          element: <PatientLogs />,
        },
        {
          path: SDRoutes.Orders.path,
          element: <Orders />,
        },
      ],
    },
    {
      path: SDRoutes.adminLogin.path,
      element: <AdminLogin />,
    },
    {
      path: SDRoutes.adminForgotPassword.path,
      element: <AdminForgotPassword />,
    },
    {
      path: SDRoutes.adminLogout.path,
      element: <LogoutAdmin />,
    },
    {
      path: SDRoutes.adminResetPassword.path,
      element: <AdminResetPassword />,
    },
    {
      path: SDRoutes.AdminPasswordResetSuccess.path,
      element: <AdminPasswordResetSuccess />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <>
      <ToastContainer
        position="top-right"
        containerStyle={{
          zIndex: 999999,
        }}
        toastOptions={{
          style: {
            fontSize: "14px",
            width: "300px",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
