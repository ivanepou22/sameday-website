import customFetch from "../utils/fetchInstance";

const API_URL = import.meta.env.VITE_API_URL;

class API {
  static get(url) {
    return customFetch(url);
  }

  static sendPassReset(payload) {
    return fetch(`${API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: payload }),
    });
  }
  static resetPassword(data) {
    console.log(data);
    return fetch(`${API_URL}/auth/reset-password?token=${data.token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: data.password }),
    });
  }

  static noAuthGet(url) {
    return fetch(`${API_URL}${url}`);
  }

  static contact(data) {
    return fetch(`${API_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  static post(url, data) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return customFetch(url, config);
  }
  static patch(url, data) {
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return customFetch(url, config);
  }
  static delete(url) {
    const config = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    return customFetch(url, config);
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
  static loginAdmin(data) {
    return fetch(`${API_URL}/auth/admin/login`, {
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
    const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
    return fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
  }
}

export default API;
