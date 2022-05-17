import Joi from "joi";
import { objectId } from "./custom.validation.js";


const createLog = {
    body: {
        userId: Joi.string().custom(objectId).required(),
        comments: Joi.string().required(),
    },
};

const updateLog = {
    body: {
        comments: Joi.string().required(),
    },
    params: {
        logId: Joi.string().custom(objectId).required(),
    },
};


const getLogs = {
    query: {
        page: Joi.number().integer().min(1).default(1),
        limit: Joi.number().integer().min(1).max(100).default(10),
        sortBy: Joi.string(),
    },
};

const getLog = {
    params: {
        logId: Joi.string().custom(objectId).required(),
    },
};

const deleteLog = {
    params: {
        logId: Joi.string().custom(objectId).required(),
    },
};

const getLogsByUserId = {
    params: {
        userId: Joi.string().custom(objectId).required(),
    },
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
