const BASE_URL = process.env.REACT_APP_API_URL;

let originalRequest = async (url, config) => {
  url = `${BASE_URL}${url}`;
  return fetch(url, config);
};

let refreshToken = async (refresh_token) => {
  let res = await fetch(BASE_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: refresh_token }),
  });
  let data = await res.json();
  localStorage.setItem("access_token", JSON.stringify(data.tokens.access));
  localStorage.setItem("refresh_token", JSON.stringify(data.tokens.refresh));
  return data;
};

let customFetch = async (url, config = {}) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  let refresh_token = JSON.parse(localStorage.getItem("refresh_token")).token;

  let newAccessToken;

  let expired = new Date() > new Date(access_token.expires);
  if (expired) {
    let { tokens } = await refreshToken(refresh_token);
    newAccessToken = tokens.access;
  }

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${newAccessToken || access_token.token}`,
  };

  return originalRequest(url, config);
};

export default customFetch;
