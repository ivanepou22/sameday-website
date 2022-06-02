import httpStatus from "http-status";
import { Visit } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createVisit = async (visitBody) => {
    return Visit.create(visitBody);
};


const queryVisits = async (filter, options) => {
    const visits = await Visit.paginate(filter, options);
    return visits;
}

const getVisit = async (id) => {
    return Visit.findById(id);
}

const updateVisit = async (id, visitBody) => {
    const visit = await getVisit(id);
    if (!visit) {
        throw new ApiError(httpStatus.NOT_FOUND, "Visit not found");
    }
    Object.assign(visit, visitBody);
    await visit.save();
    return visit;
}

const deleteVisit = async (id) => {
    const visit = await getVisit(id);
    if (!visit) {
        throw new ApiError(httpStatus.NOT_FOUND, "Visit not found");
    }
    await visit.remove();
    return visit;
}


export const visitService = {
    createVisit,
    getVisit,
    updateVisit,
    deleteVisit,
    queryVisits
}