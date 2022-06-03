import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feautures/auth/authSlice";
import ordersReducer from "./feautures/orders/ordersSlice";
import patientsReducer from "./feautures/patients/patientSlice";
import cartReducer from "./feautures/cart/cartSlice";
import appointmentReducer from "./feautures/appointment/appointmentSlice";
import doctorReducer from "./feautures/doctor/doctorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    patient: patientsReducer,
    cart: cartReducer,
    appointment: appointmentReducer,
    doctors: doctorReducer,
  },
});

export default store;
