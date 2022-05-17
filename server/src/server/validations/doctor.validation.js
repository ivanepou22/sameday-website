import Joi from "joi";
import { objectId } from "./custom.validation.js";


const createDoctor = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        specialities: Joi.string().required(),
    })
}

const queryDoctors = {
    query: Joi.object().keys({
        name: Joi.string(),
        specialities: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    })
}

const getDoctor = {
    params: Joi.object().keys({
        doctorId: Joi.string().custom(objectId),
    })
}

const updateDoctor = {
    params: Joi.object().keys({
        doctorId: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        specialities: Joi.string(),
    }).min(1),
}

const deleteDoctor = {
    params: Joi.object().keys({
        doctorId: Joi.string().custom(objectId),
    }),
}

const doctorValidation = {
    createDoctor,
    queryDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor,
}

export default doctorValidation;