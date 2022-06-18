import API from "../api";

const createPatient = async (patient) => {
  const res = await API.post("/patients", patient);
  const data = await res.json();
  return data;
};

const getPatients = async (payload = 1) => {
  const res = await API.get(`/patients?page=${payload}`);
  const data = await res.json();
  return data;
};

const getPatient = async (id) => {
  const res = await API.get(`/patients/${id}`);
  const data = await res.json();
  return data;
};

const updatePatient = async (patient) => {
  const res = await API.patch(`/patients/${patient.id}`, patient);
  const data = await res.json();
  return data;
};

const deletePatient = async (id) => {
  const res = await API.delete(`/patients/${id}`);
  const data = await res.json();
  return data;
};

export const patientService = {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
};
