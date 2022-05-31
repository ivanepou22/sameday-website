const { fetch: originalFetch } = window;
const API_URL = process.env.REACT_APP_API_URL;
const access_token = localStorage.getItem("access_token");

const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refresh_token}`,
    },
  });
  const { access_token: newAccessToken, refresh_token: newRefreshToken } =
    await res.json();
  localStorage.setItem("access_token", newAccessToken);
  localStorage.setItem("refresh_token", newRefreshToken);
  return newAccessToken;
};

// create an interceptor to automatically refresh the token when it expires
window.fetch = async (...args) => {
  const [url, options] = args;
  const { headers } = options;
  const response = await originalFetch(url, options);
  if (response.status === 401) {
    const newAccessToken = await refreshToken();
    const newOptions = {
      ...options,
      headers: { ...headers, Authorization: `Bearer ${newAccessToken}` },
    };
    return originalFetch(url, newOptions);
  }
  return Promise.reject(response);
};

class API {
  static get(url) {
    return fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
  static post(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    });
  }
  static patch(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(data),
    });
  }
  static delete(url) {
    return fetch(`${API_URL}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
  static login(data) {
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  static register(data) {
    return fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export default API;
