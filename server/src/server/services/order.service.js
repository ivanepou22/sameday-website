import httpStatus from "http-status";
import { Order } from "../models/index.js";
import ApiError from "../utils/ApiError.js";


const createOrder = async (orderBody) => {
    return Order.create(orderBody);
}

const queryOrders = async (filter, options) => {
    const orders = await Order.paginate(filter, options);
    return orders;
}

const getOrderById = async (id) => {
    return Order.findById(id);
}

const getOrderByUserId = async (userId) => {
    return Order.find({ userId });
}

const updateOrderById = async (id, orderBody) => {
    const order = await getOrderById(id);
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
    }
    Object.assign(order, orderBody);
    await order.save();
    return order;
}

const deleteOrderById = async (id) => {
    const order = await getOrderById(id);
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
    }
    await order.remove();
    return order;
}


export const orderService = {
    createOrder,
    getOrderById,
    getOrderByUserId,
    updateOrderById,
    deleteOrderById,
    queryOrders
};


