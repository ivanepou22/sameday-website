import Joi from "joi";
import { objectId } from "./custom.validation.js";

const createLog = {
  body: Joi.object().keys({
    patientId: Joi.string().custom(objectId).required(),
    notes: Joi.string().required(),
    engagementType: Joi.string().required().valid("email", "phone"),
    activity: Joi.string().required(),
    initiationDirection: Joi.string().required(),
    engagementDate: Joi.date().required(),
  }),
};

const updateLog = {
  body: Joi.object()
    .keys({
      patientId: Joi.string().custom(objectId).required(),
      notes: Joi.string().required(),
      engagementType: Joi.string().required(),
      activity: Joi.string().required(),
      initiationDirection: Joi.string().required(),
      engagementDate: Joi.date().required(),
    })
    .min(1),
  params: Joi.object().keys({
    logId: Joi.string().custom(objectId).required(),
  }),
};

const getLogs = {
  query: Joi.object().keys({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    sortBy: Joi.string(),
  }),
};

const getLog = {
  params: Joi.object().keys({
    logId: Joi.string().custom(objectId).required(),
  }),
};

const deleteLog = {
  params: Joi.object().keys({
    logId: Joi.string().custom(objectId).required(),
  }),
};

const getLogsByUserId = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

const logValidation = {
  createLog,
  updateLog,
  getLogs,
  getLog,
  deleteLog,
  getLogsByUserId,
};

export default logValidation;
