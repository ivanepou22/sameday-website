import httpStatus from "http-status";
import pick from "../utils/pick.js";
import catchAsync from "../utils/catchAsync.js";
import ApiError from "../utils/ApiError.js";
import { logService } from "../services/index.js";

const createLog = catchAsync(async (req, res) => {
  const log = await logService.createLog(req.body);
  res.status(httpStatus.CREATED).send(log);
});

const getLogs = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const logs = await logService.getLogs(filter, options);
  res.status(httpStatus.OK).send(logs);
});

const getLog = catchAsync(async (req, res) => {
  const log = await logService.getLog(req.params.logId);
  if (!log) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  res.status(httpStatus.OK).send(log);
});

const updateLog = catchAsync(async (req, res) => {
  const log = await logService.updateLog(req.params.logId, req.body);
  if (!log) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  res.status(httpStatus.OK).send(log);
});

const deleteLog = catchAsync(async (req, res) => {
  const log = await logService.deleteLog(req.params.logId);
  if (!log) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  res.status(httpStatus.OK).send(log);
});

const getLogByUser = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const logs = await logService.getLogsByUserId(req.params.userId, filter, options);
  res.status(httpStatus.OK).send(logs);
});

export { createLog, getLogs, getLog, updateLog, deleteLog, getLogByUser };