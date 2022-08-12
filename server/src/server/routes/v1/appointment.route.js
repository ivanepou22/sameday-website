import express from "express";
import validate from "../../middlewares/validate.js";
import appointmentValidation from "../../validations/appointment.validation.js";
import auth from "../../middlewares/auth.js";
import { createAppointment, getAppointments, getAppointment, updateAppointment, deleteAppointment, updateAppointmentByUser } from "../../controllers/appointment.controller.js";

const router = express.Router();


router.route('/')
    .get(auth('getAppointments'), validate(appointmentValidation.getAppointments), getAppointments)
    .post(auth('manageAppointments'), validate(appointmentValidation.createAppointment), createAppointment);
router.route("/:appointmentId")
    .get(auth('manageAppointments'), validate(appointmentValidation.getAppointment), getAppointment)
    .patch(auth('manageAppointments'), validate(appointmentValidation.updateAppointment), updateAppointment)
    .delete(auth('manageAppointments'), validate(appointmentValidation.deleteAppointment), deleteAppointment);

router.route("/:appointmentId/user")
.patch(auth('updateAppointments'), validate(appointmentValidation.updateAppointmentByUser), updateAppointmentByUser)

export default router;