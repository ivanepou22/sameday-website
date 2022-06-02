import express from "express";
import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";
import orderRoute from "./order.route.js";
import appointmentRoute from "./appointment.route.js";
import doctorRoute from "./doctor.route.js";
import patientRoute from "./patient.route.js";
import serviceRoute from "./service.route.js";
import logRoute from "./log.route.js";
import visitRoute from "./visit.route.js";

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
  },
];

const orderRoutes = [
  {
    path: "/orders",
    route: orderRoute,
  },
];

const appointmentRoutes = [
  {
    path: "/appointments",
    route: appointmentRoute,
  },
];

const doctorRoutes = [
  {
    path: "/doctors",
    route: doctorRoute,
  },
];

const patientRoutes = [
  {
    path: "/patients",
    route: patientRoute,
  },
];

const serviceRoutes = [
  {
    path: "/services",
    route: serviceRoute,
  },
];

const logRoutes = [
  {
    path: "/logs",
    route: logRoute,
  },
];

const visitRoutes = [
  {
    path: "/visits",
    route: visitRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

userRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

orderRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

appointmentRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

doctorRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

patientRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

serviceRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

logRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

visitRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
