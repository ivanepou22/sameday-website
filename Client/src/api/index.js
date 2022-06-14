import customFetch from "../utils/fetchInstance";
const API_URL = process.env.REACT_APP_API_URL;

class API {
  static get(url) {
    return customFetch(url);
  }

  static noAuthGet(url) {
    return fetch(`${API_URL}${url}`);
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
    return fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
  }
}

export default API;
