import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { appointmentService } from "../services/index.js";


const createAppointment = catchAsync(async (req, res) => {
    const appointment = await appointmentService.createAppointment(req.body);
    res.status(httpStatus.CREATED).send(appointment);
})

const getAppointments = catchAsync(async (req, res) => {
    const filter = pick(req.query, []);
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await appointmentService.queryAppointments(filter, options);
    res.status(httpStatus.OK).send(result);
})

const getAppointment = catchAsync(async (req, res) => {
    const appointment = await appointmentService.getAppointmentById(req.params.appointmentId);
    if (!appointment) {
        throw new ApiError(httpStatus.NOT_FOUND, "Appointment not found");
    }
    res.status(httpStatus.OK).send(appointment);
})

const updateAppointment = catchAsync(async (req, res) => {
    const appointment = await appointmentService.updateAppointmentById(req.params.appointmentId, req.body);
    res.send(appointment);
})

const deleteAppointment = catchAsync(async (req, res) => {
    await appointmentService.deleteAppointmentById(req.params.appointmentId);
    res.status(httpStatus.NO_CONTENT).send();
})

export { createAppointment, getAppointments, getAppointment, updateAppointment, deleteAppointment };