import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { doctorService } from "../services/index.js";

const createDoctor = catchAsync(async (req, res) => {
    const doctor = await doctorService.createDoctor(req.body);
    res.status(httpStatus.CREATED).send(doctor);
})

const getDoctors = catchAsync(async (req, res) => {
    const filter = pick(req.query, ["name"]);
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await doctorService.queryDoctors(filter, options);
    res.status(httpStatus.OK).send(result);
})

const getDoctorById = catchAsync(async (req, res) => {
    const doctor = await doctorService.getDoctorById(req.params.doctorId);
    if (!doctor) {
        throw new ApiError(httpStatus.NOT_FOUND, "Doctor not found");
    }
    res.status(httpStatus.OK).send(doctor);
})

const updateDoctorById = catchAsync(async (req, res) => {
    const doctor = await doctorService.updateDoctorById(req.params.doctorId, req.body);
    res.send(doctor);
})

const deleteDoctorById = catchAsync(async (req, res) => {
    await doctorService.deleteDoctorById(req.params.doctorId);
    res.status(httpStatus.NO_CONTENT).send();
})


export { createDoctor, getDoctorById, getDoctors, updateDoctorById, deleteDoctorById };