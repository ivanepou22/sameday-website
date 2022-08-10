const allRoles = {
  user: [
    "manageOrders",
    "getOrders",
    "getVisits",
    "getLogs",
    "getServices",
    "manageAppointments",
    "getAppointments",
    "getDoctors",
    "getOrdersByUser",
  ],
  doctor: [
    "getUsers",
    "getDoctors",
    "manageDoctors",
    "getAppointments",
    "manageAppointments",
    "getLogs",
    "manageLogs",
    "getVisits",
    "manageVisits",
  ],
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
    "manageStatus"
  ],
};

const roles = Object.keys(allRoles);

const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights };
