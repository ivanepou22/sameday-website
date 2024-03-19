import API from "../api";

const createService = async (service) => {
  const res = await API.post("/services", service);
  const data = await res.json();
  if(res.status !== 201) {
    throw new Error(data.message);
  }
  return data;
};
const getServices = async (payload = 1) => {
  const res = await API.noAuthGet(`/services?page=${payload}&limit=100`);
  const data = await res.json();
  return data;
};
const getServiceNoAuth = async (id) => {
  const res = await API.noAuthGet(`/services/${id}`);
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
  getServiceNoAuth,
  updateService,
  deleteService,
};
