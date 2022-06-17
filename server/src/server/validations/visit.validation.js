import Joi from "joi";
import { objectId } from "./custom.validation.js";

const createVisit = {
  body: Joi.object().keys({
    visitNumber: Joi.string().required(),
    patientId: Joi.string().custom(objectId).required(),
    date: Joi.date().required(),
    location: Joi.string().required(),
    address: Joi.string().required(),
    consultation_results: Joi.string().required(),
    medication: Joi.string().required(),
    comments: Joi.string().required(),
    next_visit_14_days: Joi.date().required(),
    next_visit_90_days: Joi.date().required(),
  }),
};

const updateVisit = {
  body: Joi.object()
    .keys({
      patientId: Joi.string().custom(objectId),
      date: Joi.date(),
      location: Joi.string(),
      address: Joi.string(),
      consultation_results: Joi.string(),
      medication: Joi.string(),
      comments: Joi.string(),
      next_visit_14_days: Joi.date(),
      next_visit_90_days: Joi.date(),
    })
    .min(1),
  params: Joi.object().keys({
    visitId: Joi.string().custom(objectId).required(),
  }),
};

const deleteVisit = {
  params: Joi.object().keys({
    visitId: Joi.string().custom(objectId).required(),
  }),
};

const getVisits = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getVisit = {
  params: Joi.object().keys({
    visitId: Joi.string().custom(objectId),
  }),
};

const visitValidation = {
  createVisit,
  updateVisit,
  deleteVisit,
  getVisits,
  getVisit,
};

export default visitValidation;
