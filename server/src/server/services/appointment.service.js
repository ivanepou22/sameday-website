import httpStatus from "http-status";
import { Appointment } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createAppointment = async (appointmentBody) => {
    return Appointment.create(appointmentBody);
}

const queryAppointments = async (filter, options) => {
    const appointments = await Appointment.paginate(filter, options);
    return appointments;
}

const getAppointmentById = async (id) => {
    return Appointment.findById(id);
}

const getAppointmentByUserId = async (userId) => {
    return Appointment.find({ userId });
}

const updateAppointmentById = async (id, appointmentBody) => {
    const appointment = await getAppointmentById(id);
    if (!appointment) {
        throw new ApiError(httpStatus.NOT_FOUND, "Appointment not found");
    }
    Object.assign(appointment, appointmentBody);
    await appointment.save();
    return appointment;
}


const deleteAppointmentById = async (id) => {
    const appointment = await getAppointmentById(id);
    if (!appointment) {
        throw new ApiError(httpStatus.NOT_FOUND, "Appointment not found");
    }
    await appointment.remove();
    return appointment;
}


export const appointmentService = {
    createAppointment,
    getAppointmentById,
    getAppointmentByUserId,
    updateAppointmentById,
    deleteAppointmentById,
    queryAppointments
};

