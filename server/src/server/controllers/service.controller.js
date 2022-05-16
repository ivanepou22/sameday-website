import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { serviceService } from "../services/index.js";

const createService = catchAsync(async (req, res) => {
  const service = await serviceService.createService(req.body);
  res.status(httpStatus.CREATED).send({ service });
});

const getServices = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await serviceService.queryServices(filter, options);
  res.status(httpStatus.OK).send(result);
});

const getService = catchAsync(async (req, res) => {
  const service = await serviceService.getService(req.params.serviceId);
  if (!service) {
    throw new ApiError(httpStatus.NOT_FOUND, "Service not found");
  }
  res.status(httpStatus.OK).send({ service });
});

const updateService = catchAsync(async (req, res) => {
  const service = await serviceService.updateService(req.params.serviceId, req.body);
  res.send(service);
});

const deleteService = catchAsync(async (req, res) => {
  await serviceService.deleteService(req.params.serviceId);
  res.status(httpStatus.NO_CONTENT).send();
});

export { createService, getServices, getService, updateService, deleteService };
