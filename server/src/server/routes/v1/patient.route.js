import express from "express";
import validate from "../../middlewares/validate.js";
import patientValidator from "../../validations/patient.validation.js"
import auth from "../../middlewares/auth.js"
import { createPatient, getPatients, getPatient, updatePatient, deletePatient } from "../../controllers/patient.controller.js"


const router = express.Router()


router.route('/')
    .get(auth('getPatients'), validate(patientValidator.getPatients), getPatients)
    .post(auth('managePatients'), validate(patientValidator.createPatient), createPatient)
router.route("/:patientId")
    .get(auth('managePatients'), validate(patientValidator.getPatient), getPatient)
    .patch(auth('managePatients'), validate(patientValidator.updatePatient), updatePatient)
    .delete(auth('managePatients'), validate(patientValidator.deletePatient), deletePatient)


export default router
