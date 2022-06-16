import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feautures/auth/authSlice";
import ordersReducer from "./feautures/orders/ordersSlice";
import patientsReducer from "./feautures/patients/patientSlice";
import cartReducer from "./feautures/cart/cartSlice";
import appointmentReducer from "./feautures/appointment/appointmentSlice";
import doctorReducer from "./feautures/doctor/doctorSlice";
import imageReducer from "./feautures/image/imageSlice";
import serviceReducer from "./feautures/services/serviceSlice";
import visitReducer from "./feautures/visit/visitSlice";
import userReducer from "./feautures/user/userSlice";
import passwordReducer from "./feautures/password/passwordSlice";
import logsReducer from "./feautures/log/logSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    patient: patientsReducer,
    cart: cartReducer,
    appointment: appointmentReducer,
    doctors: doctorReducer,
    image: imageReducer,
    service: serviceReducer,
    visit: visitReducer,
    users: userReducer,
    password: passwordReducer,
    logs: logsReducer,
  },
});

export default store;
