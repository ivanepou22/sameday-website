import Joi from "joi";
import { password, objectId } from "./custom.validation.js";

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid("user", "admin", "doctor"),
    gender: Joi.string().required().valid("male", "female", "other"),
    date_of_birth: Joi.string().required(),
    phone_number: Joi.string().required(),
    image: Joi.string().required(),
    country: Joi.string(),
    state: Joi.string(),
    zip: Joi.string(),
    address: Joi.string(),
    patientId: Joi.string().required(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      name: Joi.string(),
      country: Joi.string(),
      state: Joi.string(),
      zip: Joi.string(),
      address: Joi.string(),
      id: Joi.string(),
      date_of_birth: Joi.string(),
      gender: Joi.string().valid("male", "female", "other"),
      phone_number: Joi.string(),
      image: Joi.string(),
      role: Joi.string(),
      isEmailVerified: Joi.boolean()
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const userValidation = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

export default userValidation;
