import Joi from "joi";
import { objectId } from "./custom.validation.js";



const createAppointment = {
    body: Joi.object().keys({
        date: Joi.date().required(),
        time: Joi.string().required(),
        doctor: Joi.string().custom(objectId).required(),
        patient: Joi.string().custom(objectId).required(),
    }),
};

const getAppointments = {
    query: Joi.object().keys({
        date: Joi.date(),
        doctor: Joi.string().custom(objectId),
        patient: Joi.string().custom(objectId),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getAppointment = {
    params: Joi.object().keys({
        appointmentId: Joi.string().custom(objectId),
    }),
};

const updateAppointment = {
    params: Joi.object().keys({
        appointmentId: Joi.required().custom(objectId),
    }),
    body: Joi.object().keys({
        date: Joi.date(),
        time: Joi.string(),
        doctor: Joi.string().custom(objectId),
        patient: Joi.string().custom(objectId),
    }).min(1),
};


const deleteAppointment = {
    params: Joi.object().keys({
        appointmentId: Joi.string().custom(objectId),
    }),
};


const appointmentValidation = {
    createAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment,
};


export default appointmentValidation;