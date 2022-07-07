import API from "../api";

const contact = async (data) => {
  const res = await API.contact(data);
  const data = await res.json();
  return data;
};

export const contactService = {
  contact,
};
