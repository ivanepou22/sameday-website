import API from "../api";

const login = async (payload) => {
  const res = await API.login(payload);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access));
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh));
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
};

const register = async (payload) => {
  const res = await API.register(payload);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access));
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh));
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

const logout = async () => {
  const refresh_token = JSON.parse(localStorage.getItem("refresh_token")).token;
  const res = await API.post("/auth/logout", { refreshToken: refresh_token });
  if (!res.status === 204) {
    throw new Error(await res.json().message);
  }
  localStorage.clear();
  window.location.href = "/";
};

const logoutAdmin = async () => {
  const refresh_token = JSON.parse(localStorage.getItem("refresh_token")).token;
  const res = await API.post("/auth/logout", { refreshToken: refresh_token });
  if (!res.status === 204) {
    throw new Error(await res.json().message);
  }
  localStorage.clear();
  window.location.href = "/admin";
};

const refreshToken = async () => {
  const res = await API._refreshToken();
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access));
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh));
  return data;
};

const adminLogin = async (payload) => {
  const res = await API.loginAdmin(payload);
  const data = await res.json();
  if (!data.tokens) {
    throw new Error(data.message);
  }
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access));
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh));
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
};

const sendPassReset = async (payload) => {
  const res = await API.sendPassReset(payload);
  if (res.status !== 204) {
    const data = await res.json();
    throw new Error(data.message);
  }
  return null;
};

const resetPassword = async (payload) => {
  const res = await API.resetPassword(payload);
  if (res.status !== 204) {
    const data = await res.json();
    throw new Error(data.message);
  }
  return null;
};

export const authService = {
  login,
  register,
  logout,
  refreshToken,
  adminLogin,
  logoutAdmin,
  sendPassReset,
  resetPassword,
};
