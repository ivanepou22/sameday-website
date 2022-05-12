const allRoles = {
  user: ["manageOrders"],
  admin: ["getUsers", "manageUsers", "manageOrders", "manageServices", "getOrders"],
};

const roles = Object.keys(allRoles);

const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights };
