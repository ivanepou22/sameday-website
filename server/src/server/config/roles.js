const allRoles = {
  user: ["manageOrders"],
  admin: [
    "getUsers",
    "manageUsers",
    "manageOrders",
    "manageServices",
    "getOrders",
    "getAppointments",
    "manageAppointments",
    "getDoctors",
    "manageDoctors",
    "managePatients",
    "getPatients",
    "getServices",
    "manageServices",
  ],
};

const roles = Object.keys(allRoles);

const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights };
