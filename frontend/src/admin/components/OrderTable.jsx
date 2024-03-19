import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ordersSelector, getOrders } from "../../feautures/orders/ordersSlice";
import moment from "moment";
import { RiAddLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import OrderDetail from "./OrderDetail";
import UpdateOrder from "./UpdateOrder";

const OrderTable = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { orders, limit, totalPages, totalResults, isLoading } = useSelector(ordersSelector);
  const [showOrder, setShowOrder] = useState(false);
  const [showEditOrder, setShowEditOrder] = useState(false);
  const [order, setOrder] = useState([]);

  React.useEffect(() => {
    dispatch(getOrders(page));
    console.log("changed");
  }, [dispatch, page]);

  const handlePageChange = (page) => {
    if (page < 1) {
      setPage(1);
    } else if (page > totalPages) {
      setPage(totalPages);
    } else {
      setPage(page);
    }
  };

  const handleOrder = (order) => {
    setOrder(order);
    setShowOrder(true);
  };

  const handleEditOrder = (order) => {
    setOrder(order);
    setShowEditOrder(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Orders</h5>
              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">SameDay Lab Works</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Orders
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link to={"#"} className="btn btn-primary">
                <RiAddLine /> Add Order
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive shadow rounded">
                <table className="table table-center bg-white mb-0">
                  <thead>
                    <tr>
                      <th className="border-bottom p-3">No.</th>
                      <th className="border-bottom p-3">Number</th>
                      <th className="border-bottom p-3">Date</th>
                      <th className="border-bottom p-3">Status</th>
                      <th className="border-bottom p-3">Total</th>
                      <th className="border-bottom p-3">Name</th>
                      <th className="border-bottom p-3">Email</th>
                      <th className="border-bottom p-3" style={{ minWidth: "150px" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      orders.map((order, index) => (
                        <tr key={order.id}>
                          <td className="p-3 white-space-wrap-none">{index + 1}</td>
                          <td className="py-3 white-space-wrap-none">
                            <Link to="#/">
                              <div className="d-flex align-items-center">
                                <span className="ms-2">{order.orderNumber}</span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3 white-space-wrap-none">
                            {moment(order.orderDate).format("YYYY-MM-DD")}
                          </td>
                          <td
                            className={`${
                              order.orderStatus === "pending"
                                ? "text-warning"
                                : order.orderStatus === "rejected"
                                ? "text-danger"
                                : order.orderStatus === "approved"
                                ? "text-success"
                                : "text-primary"
                            } p-3 white-space-wrap-none`}
                          >
                            {order.orderStatus}
                          </td>
                          <td className="p-3 white-space-wrap-none">
                            {order.orderTotal?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "UGX",
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="p-3 white-space-wrap-none">{order.userId.name}</td>
                          <td className="p-3 white-space-wrap-none">{order.userId.email}</td>
                          <td className="text-end p-3 white-space-wrap-none">
                            <Link
                              to="#/"
                              className="btn btn-icon btn-pills btn-soft-primary my-1"
                              data-bs-toggle="modal"
                              data-bs-target="#viewprofile"
                              onClick={() => handleOrder(order)}
                            >
                              <AiOutlineEye />
                            </Link>
                            <Link
                              to="#/"
                              className="btn btn-icon btn-pills btn-soft-success my-1 mx-2"
                              data-bs-toggle="modal"
                              data-bs-target="#editprofile"
                              onClick={() => handleEditOrder(order)}
                            >
                              <FaRegEdit />
                            </Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
                <span className="text-muted me-3">
                  Showing 1 - {limit > totalResults ? totalResults : limit} out of {totalResults}
                </span>
                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                  <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                    <Link
                      onClick={() => handlePageChange(page - 1)}
                      className="page-link"
                      to="#/"
                      aria-label="Previous"
                    >
                      Prev
                    </Link>
                  </li>
                  {Array.apply(null, Array(totalPages)).map((x, i) => {
                    return (
                      <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
                        <Link className="page-link" onClick={() => handlePageChange(i + 1)} to="#/">
                          {i + 1}
                        </Link>
                      </li>
                    );
                  })}
                  <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                    <Link
                      onClick={() => handlePageChange(page + 1)}
                      className="page-link"
                      to="#/"
                      aria-label="Next"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderDetail show={showOrder} setShowOrder={setShowOrder} order={order} />
      <UpdateOrder show={showEditOrder} setShowEditOrder={setShowEditOrder} order={order} />
    </>
  );
};

export default OrderTable;
