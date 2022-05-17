import httpStatus from "http-status";
import { EngagementLog } from "../models/index.js";
import ApiError from "../utils/ApiError.js";

const createLog = async (logBody) => {
  return EngagementLog.create(logBody);
};

const getLogs = async (filter, options) => {
  const logs = await EngagementLog.paginate(filter, options);
  return logs;
};

const getLog = async (id) => {
  return EngagementLog.findById(id);
};

const updateLog = async (id, logBody) => {
  const log = await getLog(id);
  if (!log) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  Object.assign(log, logBody);
  await log.save();
  return log;
};

const deleteLog = async (id) => {
  const log = await getLog(id);
  if (!log) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  await log.remove();
  return log;
};

const getLogsByUserId = async (userId, filter, options) => {
  const logs = await EngagementLog.paginate({ userId }, filter, options);
  if (!logs) {
    throw new ApiError(httpStatus.NOT_FOUND, "Log not found");
  }
  return logs;
};

const logService = {
  createLog,
  getLogs,
  getLog,
  updateLog,
  deleteLog,
  getLogsByUserId,
};

export { logService };
