import API from "../api";

export const uploadImage = async (file) => {
  const res = await API.uploadImage(file);
  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data
};
