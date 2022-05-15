import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { patientService } from "../services/index.js";


const createPatient = catchAsync(async (req, res) => {
    const patient = await patientService.createPatient(req.body);
    res.status(httpStatus.CREATED).send({ patient });
})


const getPatients = catchAsync(async (req, res) => {
    const filter = pick(req.query, []);
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await patientService.queryPatients(filter, options);
    res.status(httpStatus.OK).send(result);
})


const getPatient = catchAsync(async (req, res) => {
    const patient = await patientService.getPatient(req.params.patientId);
    if (!patient) {
        throw new ApiError(httpStatus.NOT_FOUND, "Patient not found");
    }
    res.status(httpStatus.OK).send({ patient });
})


const updatePatient = catchAsync(async (req, res) => {
    const patient = await patientService.updatePatientById(req.params.patientId, req.body);
    res.send(patient);
})


const deletePatient = catchAsync(async (req, res) => {
    await patientService.deletePatientById(req.params.patientId);
    res.status(httpStatus.NO_CONTENT).send();
})


export { createPatient, getPatients, getPatient, updatePatient, deletePatient };