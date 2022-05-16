import Joi from "joi";
import { objectId } from "./custom.validation.js";


const createService = {
    body: {
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        duration: Joi.number().required(),
    }
}

const updateService = {
    body: {
        name: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        duration: Joi.number(),
    },
    params: {
        serviceId: Joi.string().custom(objectId).required()
    }
}

const deleteService = {
    params: {
        serviceId: Joi.string().custom(objectId).required()
    }
}

const getService = {
    params: {
        serviceId: Joi.string().custom(objectId).required()
    }
}

const getServices = {
    query: {
        page: Joi.number().min(1),
        limit: Joi.number().min(1).max(100),
        search: Joi.string(),
        sortBy: Joi.string(),
        order: Joi.string().valid('asc', 'desc')
    }
}


const serviceValidation = {
    createService,
    updateService,
    deleteService,
    getService,
    getServices
}

export default serviceValidation