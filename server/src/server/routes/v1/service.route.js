import express from "express";
import validate from "../../middlewares/validate.js";
import serviceValidation from "../../validations/service.validation.js";
import auth from "../../middlewares/auth.js";
import {
  createService,
  getService,
  getServices,
  deleteService,
  updateService,
} from "../../controllers/service.controller.js";

const router = express.Router();

router
  .route("/")
  .get(validate(serviceValidation.getServices), getServices)
  .post(auth("manageServices"), validate(serviceValidation.createService), createService);
router
  .route("/:serviceId")
  .get(validate(serviceValidation.getService), getService)
  .patch(auth("manageServices"), validate(serviceValidation.updateService), updateService)
  .delete(auth("manageServices"), validate(serviceValidation.deleteService), deleteService);

export default router;
