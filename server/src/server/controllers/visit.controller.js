import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { visitService } from "../services/index.js";

const createVisit = catchAsync(async (req, res) => {
    const visit = await visitService.createVisit(req.body);
    res.status(httpStatus.CREATED).send(visit);
})

const getVisits = catchAsync(async (req, res) => {
    const filters = pick(req.query, [])
    const options = pick(req.query, ["sortBy", "limit", "page"])
    const result = await visitService.queryVisits(filters, options)
    res.status(httpStatus.OK).send(result)
})

const getVisit = catchAsync(async (req, res) => {
    const visit = await visitService.getVisit(req.params.visitId)
    if (!visit) {
        throw new ApiError(httpStatus.NOT_FOUND, "Visit not found")
    }
    res.status(httpStatus.OK).send(visit)
})

const updateVisit = catchAsync(async (req, res) => {
    const visit = await visitService.updateVisit(req.params.visitId, req.body)
    res.send(visit)
})

const deleteVisit = catchAsync(async (req, res) => {
    await visitService.deleteVisit(req.params.visitId)
    res.status(httpStatus.NO_CONTENT).send()
})


export { createVisit, getVisit, getVisits, updateVisit, deleteVisit }