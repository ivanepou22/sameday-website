import express from "express";
import validate from "../../middlewares/validate.js";
import doctorValidation from "../../validations/doctor.validation.js";
import auth from "../../middlewares/auth.js";
import { createDoctor, getDoctors, getDoctorById, updateDoctorById, deleteDoctorById } from "../../controllers/doctor.controller.js";


const router = express.Router();


router.route('/')
    .get(auth('getDoctors'), validate(doctorValidation.queryDoctors), getDoctors)
    .post(auth('manageDoctors'), validate(doctorValidation.createDoctor), createDoctor);
router.route("/:doctorId")
    .get(auth('manageDoctors'), validate(doctorValidation.getDoctor), getDoctorById)
    .patch(auth('manageDoctors'), validate(doctorValidation.updateDoctor), updateDoctorById)
    .delete(auth('manageDoctors'), validate(doctorValidation.deleteDoctor), deleteDoctorById);


export default router;