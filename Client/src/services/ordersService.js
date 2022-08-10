import API from "../api";

const createOrder = async (order) => {
  const res = await API.post("/orders", order);
  const data = await res.json();
  return data;
};

const getOrders = async (payload = 1, limit = 10) => {
  const res = await API.get(`/orders?page=${payload}&limit=${limit}`);
  const data = await res.json();
  return data;
};

const getOrder = async (id) => {
  const res = await API.get(`/orders/${id}`);
  const data = await res.json();
  return data;
};

const getOrdersByUser = async (payload = 1) => {
  const res = await API.get(`/orders?page=${payload}&limit=100`);
  const data = await res.json();
  return data;
};

const updateOrder = async (order) => {
  const res = await API.put(`/orders/${order.id}`, order);
  const data = await res.json();
  return data;
};

const deleteOrder = async (id) => {
  const res = await API.delete(`/orders/${id}`);
  const data = await res.json();
  return data;
};

const updateOrderStatus = async (order) => {
  const res = await API.patch(`/orders/${order.id}/status`, order);
  const data = await res.json();
  return data;
}

export const ordersService = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  updateOrderStatus
};
