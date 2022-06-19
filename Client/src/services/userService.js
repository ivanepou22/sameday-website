import API from "../api";

const getUsers = async (payload = 1) => {
  const response = await API.get(`/users?page=${payload}`);
  const data = await response.json();
  return data;
};

const getUser = async (id) => {
  const response = await API.get(`/users/${id}`);
  const data = await response.json();
  return data;
};

const updateUser = async (user) => {
  const response = await API.patch(`/users/${user.id}`, user);
  const data = await response.json();
  return data;
};

const deleteUser = async (id) => {
  const response = await API.delete(`/users/${id}`);
  const data = await response.json();
  return data;
};

const createUser = async (payload) => {
  const response = await API.post("/users/create", payload);
  const data = await response.json();
  if (!data.name) {
    throw new Error(data.message);
  }
  return data;
};

export const userService = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
