import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { emailService, orderService } from "../services/index.js";

const createOrder = catchAsync(async (req, res) => {
    const userId = req.user.id;
    const order = await orderService.createOrder({ userId, ...req.body });
    await emailService.sendNotifyEmail("", order, 'NEW ORDER')
    res.status(httpStatus.CREATED).send(order);
})


const getOrders = catchAsync(async (req, res) => {
    const filter = pick(req.query, []);
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await orderService.queryOrders(filter, options);
    res.status(httpStatus.OK).send(result);
})

const getOrder = catchAsync(async (req, res) => {
    const order = await orderService.getOrder(req.params.orderId);
    if (!order) {
        throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
    }
    res.status(httpStatus.OK).send(order);
})

const updateOrder = catchAsync(async (req, res) => {
    const order = await orderService.updateOrderById(req.params.orderId, req.body);
    res.send(order);
})

const deleteOrder = catchAsync(async (req, res) => {
    await orderService.deleteOrderById(req.params.orderId);
    res.status(httpStatus.NO_CONTENT).send();
})


export { createOrder, getOrders, getOrder, updateOrder, deleteOrder };