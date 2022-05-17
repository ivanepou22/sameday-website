import API from "../api";

const createLog = async (log) => {
  const res = await API.post("/logs", log);
  const data = await res.json();
  return data;
};

const getLogs = async () => {
  const res = await API.get("/logs");
  const data = await res.json();
  return data;
};

const getLog = async (id) => {
  const res = await API.get(`/logs/${id}`);
  const data = await res.json();
  return data;
};

const updateLog = async (log) => {
  const res = await API.patch(`/logs/${log.id}`, log);
  const data = await res.json();
  return data;
};

const deleteLog = async (id) => {
  const res = await API.delete(`/logs/${id}`);
  const data = await res.json();
  return data;
};

export const logsService = {
  createLog,
  getLogs,
  getLog,
  updateLog,
  deleteLog,
};
