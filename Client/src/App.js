import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SDRoutes } from './routes';
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
} from './pages';
import {
  Dashboard,
  Patients,
  Appointments,
  Doctors,
  Services,
  PatientVisits,
  PatientLogs,
  Orders,
} from "./admin/pages";

function App() {
  return (
    <div className="App">
      <h1>
        <BrowserRouter>
          <Routes>
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
            <Route path={SDRoutes.PatientDashboard.path} element={<PatientDashboard />} />
            <Route path={SDRoutes.PatientProfile.path} element={<PatientProfile />} />
            <Route path={SDRoutes.Appointment.path} element={<Appointment />} />
            <Route path={SDRoutes.ShoppingCart.path} element={<ShoppingCart />} />
            <Route path={SDRoutes.Checkout.path} element={<Checkout />} />
            <Route path={SDRoutes.BlogDetails.path} element={<BlogDetails />} />
            <Route path={SDRoutes.ServiceDetails.path} element={<ServiceDetails />} />
            <Route path={SDRoutes.Dashboard.path} element={<Dashboard />} />
            <Route path={SDRoutes.Patients.path} element={<Patients />} />
            <Route path={SDRoutes.Appointments.path} element={<Appointments />} />
            <Route path={SDRoutes.Doctors.path} element={<Doctors />} />
            <Route path={SDRoutes.Services.path} element={<Services />} />
            <Route path={SDRoutes.PatientVisits.path} element={<PatientVisits />} />
            <Route path={SDRoutes.PatientLogs.path} element={<PatientLogs />} />
            <Route path={SDRoutes.Orders.path} element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </h1>
    </div>
  );
}
export default App;
