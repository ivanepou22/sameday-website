import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Register as AdminRegister,
  ForgotPassword as AdminForgotPassword,
} from "./admin/pages";
import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route element={<UserProtectedRoute />}>
              <Route path={SDRoutes.Appointment.path} element={<Appointment />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Dashboard.path} element={<Dashboard />} />
            </Route>
            <Route path={SDRoutes.Home.path} element={<Home />} />
            <Route path={SDRoutes.About.path} element={<About />} />
            <Route path={SDRoutes.Contact.path} element={<Contact />} />
            <Route path={SDRoutes.Blogs.path} element={<Blogs />} />
            <Route path={SDRoutes.Login.path} element={<Login />} />
            <Route path={SDRoutes.Register.path} element={<Register />} />
            <Route path={SDRoutes.ForgotPassword.path} element={<ForgotPassword />} />
            <Route path={SDRoutes.Shop.path} element={<Shop />} />
            <Route path={SDRoutes.WellnessCenter.path} element={<WellnessCenter />} />
            <Route path={SDRoutes.RadiologyServices.path} element={<RadiologyServices />} />
            <Route path={SDRoutes.LaboratoryServices.path} element={<LaboratoryServices />} />
            <Route path={SDRoutes.CovidTesting.path} element={<CovidTesting />} />

            <Route element={<UserProtectedRoute />}>
              <Route path={SDRoutes.PatientDashboard.path} element={<PatientDashboard />} />
            </Route>
            <Route element={<UserProtectedRoute />}>
              <Route path={SDRoutes.PatientProfile.path} element={<PatientProfile />} />
            </Route>
            <Route path={SDRoutes.ShoppingCart.path} element={<ShoppingCart />} />
            <Route element={<UserProtectedRoute />}>
              <Route path={SDRoutes.Checkout.path} element={<Checkout />} />
            </Route>
            <Route path={SDRoutes.BlogDetails.path} element={<BlogDetails />} />
            <Route path={SDRoutes.ServiceDetails.path} element={<ServiceDetails />} />

            {/* // Admin Routes */}
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Patients.path} element={<Patients />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Appointments.path} element={<Appointments />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Doctors.path} element={<Doctors />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Services.path} element={<Services />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.PatientVisits.path} element={<PatientVisits />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.PatientLogs.path} element={<PatientLogs />} />
            </Route>
            <Route element={<AdminProtectedRoute />}>
              <Route path={SDRoutes.Orders.path} element={<Orders />} />
            </Route>

            <Route path={SDRoutes.adminLogin.path} element={<AdminLogin />} />
            <Route path={SDRoutes.adminRegister.path} element={<AdminRegister />} />
            <Route path={SDRoutes.adminForgotPassword.path} element={<AdminForgotPassword />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
