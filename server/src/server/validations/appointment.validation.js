import Joi from "joi";
import { objectId, phoneNumber } from "./custom.validation.js";



const createAppointment = {
    body: Joi.object().keys({
        date: Joi.date().required(),
        time: Joi.string().required(),
        doctor: Joi.string().custom(objectId).required(),
        patient: Joi.string().custom(objectId).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().custom(phoneNumber).required(),
        department: Joi.string().required(),
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
        email: Joi.string().email(),
        phone: Joi.string().custom(phoneNumber),
        department: Joi.string(),
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