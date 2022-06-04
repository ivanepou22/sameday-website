const allRoles = {
  user: ["manageOrders", "manageAppointments", "getAppointments", "getDoctors"],
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
    "getLogs",
    "manageLogs",
    "getVisits",
    "manageVisits",
  ],
};

const roles = Object.keys(allRoles);

const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights };
