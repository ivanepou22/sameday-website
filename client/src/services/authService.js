import API from "../api";

const login = async (payload) => {
  const res = await API.login(payload);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access))
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh))
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
};

const register = async (payload) => {
  const res = await API.register(payload);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access))
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh))
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

const logout = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
};

export const authService = {
  login,
  register,
  logout,
};