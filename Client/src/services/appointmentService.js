import API from "../api";

const createAppointment = async (appointment) => {
  const response = await API.post("/appointments", appointment);
  const data = await response.json();
  if (data.code) {
    throw new Error(data.message);
  }
  return data;
};

const getAppointments = async (payload = 1) => {
  const response = await API.get(`/appointments?page=${payload}&limit=100`);
  const data = await response.json();
  return data;
};

const getAppointment = async (id) => {
  const response = await API.get(`/appointments/${id}`);
  const data = await response.json();
  return data;
};

const updateAppointment = async (appointment) => {
  const response = await API.patch(
    `/appointments/${appointment.id}`,
    appointment
  );
  const data = await response.json();
  return data;
};

const updateAppointmentByUser = async (appointment) => {
  const response = await API.patch(
    `/appointments/${appointment.id}/user`,
    appointment
  );
  const data = await response.json();
  return data;
};


const deleteAppointment = async (id) => {
  const response = await API.delete(`/appointments/${id}`);
  const data = await response.json();
  return data;
};

export const appointmentService = {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  updateAppointmentByUser
};
