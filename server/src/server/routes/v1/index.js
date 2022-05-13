import express from "express";
import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";
import orderRoute from "./order.route.js";
import appointmentRoute from "./appointment.route.js";
import doctorRoute from "./doctor.route.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
];

const userRoutes = [
  {
    path: "/users",
    route: userRoute,
  }
];

const orderRoutes = [
  {
    path: "/orders",
    route: orderRoute,
  }
];

const appointmentRoutes = [
  {
    path: "/appointments",
    route: appointmentRoute,
  }
];

const doctorRoutes = [
  {
    path: "/doctors",
    route: doctorRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

userRoutes.forEach((route) => {
  router.use(route.path, route.route);
})

orderRoutes.forEach((route) => {
  router.use(route.path, route.route);
})

appointmentRoutes.forEach((route) => {
  router.use(route.path, route.route);
})

doctorRoutes.forEach((route) => {
  router.use(route.path, route.route);
})


export default router;