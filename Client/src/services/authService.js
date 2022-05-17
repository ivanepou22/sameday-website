import API from "../api";

const login = async (login_data) => {
  const res = await API.login(login_data);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", data.tokens.access.token);
  localStorage.setItem("refresh_token", data.tokens.refresh.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

const register = async (register_data) => {
  const res = await API.register(register_data);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", data.tokens.access.token);
  localStorage.setItem("refresh_token", data.tokens.refresh.token);
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