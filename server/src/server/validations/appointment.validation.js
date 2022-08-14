import Joi from "joi";
import { objectId, phoneNumber } from "./custom.validation.js";

const createAppointment = {
  body: Joi.object().keys({
    appNumber: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    doctor: Joi.string().custom(objectId).required(),
    patient: Joi.string().custom(objectId).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    department: Joi.string().required(),
    comment: Joi.string().required(),
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
  body: Joi.object()
    .keys({
      date: Joi.date(),
      time: Joi.string(),
      doctor: Joi.string().custom(objectId),
      patient: Joi.string().custom(objectId),
      email: Joi.string().email(),
      phone: Joi.string().custom(phoneNumber),
      department: Joi.string(),
    })
    .min(1),
};

const updateAppointmentByUser = {
  params: Joi.object().keys({
    appointmentId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    date: Joi.date(),
    time: Joi.string(),
    comment: Joi.string(),
    id: Joi.string().custom(objectId),
  }),
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
  updateAppointmentByUser,
};

export default appointmentValidation;
