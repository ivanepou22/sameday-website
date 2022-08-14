export const generatePatientNumber = () => {
  let prefix = "SD-P";
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return prefix + randomNumber;
};

export const generateDoctorNumber = () => {
  let prefix = "SD-D";
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return prefix + randomNumber;
};

export const generateAppointmentNumber = () => {
  let prefix = "SD-AP";
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return prefix + randomNumber;
};

export const generateVisitNumber = () => {
  let prefix = "SD-V";
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return prefix + randomNumber;
};

export const generateLogNumber = () => {
  let prefix = "SD-L";
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return prefix + randomNumber;
};

export const generateNext14Days = () => {
  let nxt14 = new Date(new Date().setDate(new Date().getDate() + 14));
  // format in mm/dd/yyyy
  return nxt14.toISOString().split("T")[0];
};

export const generateNext90Days = () => {
  let nxt90 = new Date(new Date().setDate(new Date().getDate() + 90));
  // format in mm/dd/yyyy
  return nxt90.toISOString().split("T")[0];
};

export const generateOrderNumber = () => {
  const prefix = "SD-ORD";
  const number = new Date().getTime();
  return (
    prefix + number.toString().slice(number.toString().length - 7) * Math.ceil(Math.random() * 2)
  );
};
