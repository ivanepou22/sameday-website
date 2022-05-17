import httpStatus from "http-status";
import { Doctor } from "../models/index.js";
import ApiError from "../utils/ApiError.js";


const createDoctor = async (doctorBody) => {
    return Doctor.create(doctorBody);
}

const queryDoctors = async (filter, options) => {
    const doctors = await Doctor.paginate(filter, options);
    return doctors;
}

const getDoctorById = async (id) => {
    return Doctor.findById(id);
}

const updateDoctorById = async (id, doctorBody) => {
    const doctor = await getDoctorById(id);
    if (!doctor) {
        throw new ApiError(httpStatus.NOT_FOUND, "Doctor not found");
    }
    Object.assign(doctor, doctorBody);
    await doctor.save();
    return doctor;
}

const deleteDoctorById = async (id) => {
    const doctor = await getDoctorById(id);
    if (!doctor) {
        throw new ApiError(httpStatus.NOT_FOUND, "Doctor not found");
    }
    await doctor.remove();
    return doctor;
}

export const doctorService = {
    createDoctor,
    getDoctorById,
    updateDoctorById,
    deleteDoctorById,
    queryDoctors
};