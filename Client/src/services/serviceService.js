import API from "../api";

const createService = async (service) => {
  const res = await API.post("/services", service);
  const data = await res.json();
  return data;
};
const getServices = async () => {
  const res = await API.noAuthGet("/services");
  const data = await res.json();
  return data;
};
const getService = async (id) => {
  const res = await API.get(`/services/${id}`);
  const data = await res.json();
  return data;
};
const updateService = async (service) => {
  const res = await API.patch(`/services/${service.id}`, service);
  const data = await res.json();
  return data;
};
const deleteService = async (id) => {
  const res = await API.delete(`/services/${id}`);
  const data = await res.json();
  return data;
};
export const serviceService = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
};
