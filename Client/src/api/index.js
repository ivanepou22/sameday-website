const API_URL = process.env.REACT_APP_API_URL;
const access_token = JSON.parse(localStorage.getItem("access_token"));

class API {
  static get(url) {
    return fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token?.token}`,
      },
    });
  }
  static post(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token.token}`,
      },
      body: JSON.stringify(data),
    });
  }
  static patch(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token.token}`,
      },
      body: JSON.stringify(data),
    });
  }
  static delete(url) {
    return fetch(`${API_URL}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token.token}`,
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

  static uploadImage(formData) {
    return fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
  }

  static _refreshToken() {
    const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));
    return fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refresh_token.token }),
    });
  }
}

export default API;
