import Joi from "joi";
import { objectId } from "./custom.validation.js";

const createOrder = {
    body: Joi.object().keys({
        userId: Joi.string().custom(objectId),
        orderDate: Joi.date().required(),
        orderItems: Joi.array().items(
            Joi.object().keys({
                itemId: Joi.string().custom(objectId).required(),
                itemQuantity: Joi.number().required(),
            })
        ).required(),
        orderTotal: Joi.number().required(),
    }),
};

const getOrders = {
    query: Joi.object().keys({
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId),
    }),
};

const updateOrder = {
    params: Joi.object().keys({
        orderId: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        orderStatus: Joi.string().valid("pending", "approved", "rejected", "delivered"),
    }),
};

const deleteOrder = {
    params: Joi.object().keys({
        orderId: Joi.string().custom(objectId),
    }),
};

const orderValidation = {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};


export default orderValidation;