import httpStatus from "http-status";
import { Patient } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createPatient = async patientBody => {
    return Patient.create(patientBody)
}

const queryPatients = async (filter, options) => {
    const patients = await Patient.paginate(filter, options);
    return patients;
}

const getPatient = async id => {
    return Patient.findById(id);
}

const updatePatient = async (id, patientBody) => {
    const patient = await getPatient(id);
    if (!patient) {
        throw new ApiError(httpStatus.NOT_FOUND, "Patient not found");
    }
    Object.assign(patient, patientBody);
    await patient.save();
    return patient;
}

const deletePatient = async id => {
    const patient = await getPatient(id);
    if (!patient) {
        throw new ApiError(httpStatus.NOT_FOUND, "Patient not found");
    }
    await patient.remove();
    return patient;
}

export const patientService = {
    createPatient,
    queryPatients,
    getPatient,
    updatePatient,
    deletePatient,
};