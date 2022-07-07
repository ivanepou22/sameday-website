import API from "../api";

const contact = async (data) => {
  const res = await API.contact(data);
  const rdata = await res.json();
  if(!res.ok) {
    throw new Error(rdata.message);
  }
  return rdata;
};

export const contactService = {
  contact,
};
