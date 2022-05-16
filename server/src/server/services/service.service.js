import httpStatus from "http-status";
import { Service } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createService = async (serviceBody) => {
  return Service.create(serviceBody);
};

const queryServices = async (filter, options) => {
  const services = await Service.paginate(filter, options);
  return services;
};

const getService = async (serviceId) => {
  return Service.findById(serviceId);
};

const updateService = async (serviceId, serviceBody) => {
  const service = await getService(serviceId);
  if (!service) {
    throw new ApiError(httpStatus.NOT_FOUND, "Service not found");
  }
  Object.assign(service, serviceBody);
  await service.save();
  return service;
};

const deleteService = async (serviceId) => {
  const service = await getService(serviceId);
  if (!service) {
    throw new ApiError(httpStatus.NOT_FOUND, "Service not found");
  }
  await service.remove();
  return service;
};

export const serviceService = {
  createService,
  queryServices,
  getService,
  updateService,
  deleteService,
};
