import API from "../api";

const createDoctor = async (doctor) => {
  const res = await API.post("/doctors", doctor);
  const data = await res.json();
  return data;
};

const getDoctors = async () => {
  const res = await API.get("/doctors");
  const data = await res.json();
  return data;
};

const getDoctor = async (id) => {
  const res = await API.get(`/doctors/${id}`);
  const data = await res.json();
  return data;
};

const updateDoctor = async (doctor) => {
  const res = await API.patch(`/doctors/${doctor.id}`, doctor);
  const data = await res.json();
  return data;
};

const deleteDoctor = async (id) => {
  const res = await API.delete(`/doctors/${id}`);
  const data = await res.json();
  return data;
};

export const doctorService = {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
};
