import express from "express";
import validate from "../../middlewares/validate.js";
import visitValidation from "../../validations/visit.validation.js"
import auth from "../../middlewares/auth.js";
import { createVisit, getVisits, getVisit, updateVisit, deleteVisit } from "../../controllers/visit.controller.js";

const router = express.Router();


router.route('/')
    .get(auth('getVisits'), validate(visitValidation.getVisits), getVisits)
    .post(auth('manageVisits'), validate(visitValidation.createVisit), createVisit);
router.route("/:visitId")
    .get(auth('manageVisits'), validate(visitValidation.getVisit), getVisit)
    .patch(auth('manageVisits'), validate(visitValidation.updateVisit), updateVisit)
    .delete(auth('manageVisits'), validate(visitValidation.deleteVisit), deleteVisit);



    export default router;
