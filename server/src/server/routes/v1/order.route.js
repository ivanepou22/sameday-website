import express from "express";
import validate from "../../middlewares/validate.js";
import orderValidation from "../../validations/order.validation.js";
import auth from "../../middlewares/auth.js";
import {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  updateStatusById,
} from "../../controllers/order.controller.js";

const router = express.Router();

router
  .route("/")
  .get(auth("getOrders"), validate(orderValidation.getOrders), getOrders)
  .get(auth("getOrdersByUser"), validate(orderValidation.getOrdersByUser), getOrdersByUser)
  .post(auth("manageOrders"), validate(orderValidation.createOrder), createOrder);
router
  .route("/:orderId")
  .get(auth("manageOrders"), validate(orderValidation.getOrder), getOrder)
  .patch(auth("manageOrders"), validate(orderValidation.updateOrder), updateOrder)
  .delete(auth("manageOrders"), validate(orderValidation.deleteOrder), deleteOrder);

router
  .route("/:orderId/status")
  .patch(auth("manageStatus"), validate(orderValidation.updateStatusById), updateStatusById);

export default router;
