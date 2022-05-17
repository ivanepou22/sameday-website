import Joi from "joi";
import { objectId } from "./custom.validation.js";

const createPatient = {
  body: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    gender: Joi.string().required().valid("Male", "Female", "Other"),
    date_of_birth: Joi.string().required(),
    address: Joi.string().required(),
    patient_number: Joi.string(),
    phone_number: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
};

const getPatients = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPatient = {
  params: Joi.object().keys({
    patientId: Joi.required().custom(objectId),
  }),
};

const updatePatient = {
  params: Joi.object().keys({
    patientId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      date_of_birth: Joi.string(),
      gender: Joi.string().valid("Male", "Female", "Other"),
      email: Joi.string().email(),
      phone_number: Joi.string(),
    })
    .min(1),
};

const deletePatient = {
  params: Joi.object().keys({
    patientId: Joi.required().custom(objectId),
  }),
};

const patientValidation = {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
};

export default patientValidation;
