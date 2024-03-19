import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { serviceSelector, getServices } from '../feautures/services/serviceSlice';
import { useEffect } from "react";

const OrderDetails = (props) => {
    const { show, setShowOrder, order } = props;
    const dispatch = useDispatch();
    const { services } = useSelector(serviceSelector);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    const handleClose = () => {
        setShowOrder(false);
    };

    //filter services by id
    const filterService = (id) => {
        const filterService = services.filter((service) => service.id === id);
        return filterService;
    }

    return (
        <>
            <div
                className={`modal modal-blur fade bg-gray ${show ? "display-block show" : "display-none"}`}
                id="appointmentform"
                tabIndex="-1"
                onClick={handleClose}
                aria-labelledby="exampleModalLabel"
                aria-hidden={!show}
                aria-modal={show}
                role={show ? "dialog" : ""}
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered shadow rounded"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom p-3">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Order Details
                            </h5>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-3 pt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <h6><b>Order Number:</b>{` ${order?.orderNumber}`}</h6>
                                        <span><b>Order ID:</b>{` ${order?.id}`}</span><br />
                                        <span><b>Order Status:</b>{` ${order?.orderStatus}`}</span><br />
                                        <span><b>Order Date:</b>{` ${moment(order?.orderDate).format('DD-MMM-YYYY')}`}</span><br />
                                        <span><b>Home Service:</b>{` ${order?.homeService}`}</span><br />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <h6><span><strong>Name:</strong> {order?.userId?.name}</span></h6>
                                        <span><strong>Tel:</strong> {order?.userId?.phone_number}</span><br />
                                        <span><strong>Email:</strong> {order?.userId?.email}</span><br />
                                        <span><strong>Address:</strong> {order?.userId?.address}</span><br />
                                        <span><strong>Address2:</strong> {`${order?.userId?.state}, ${order?.userId?.country}`}</span><br />
                                    </div>
                                </div>
                                <hr />
                                <table className="table table-center table-padding mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{ minWidth: "300px" }}>
                                                Product
                                            </th>
                                            <th className="border-bottom text-start p-3" style={{ minWidth: "160px" }}>
                                                Price
                                            </th>
                                            <th className="border-bottom text-start p-3" style={{ minWidth: "190px" }}>
                                                Qty
                                            </th>
                                            <th className="border-bottom text-end p-3" style={{ minWidth: "50px" }}>
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order?.orderItems?.map((item) => (
                                            <tr key={item.itemId}>
                                                <td className="text-start p-3">
                                                    <Link to={`#`} className="white-space-wrap-none">
                                                        <h6 className="mb-0">{filterService(item?.itemId)[0]?.name}</h6>
                                                    </Link>
                                                </td>
                                                <td className="text-start p-3">
                                                    {
                                                        filterService(item?.itemId)[0]?.price?.toLocaleString('en-US', {
                                                            style: 'currency',
                                                            currency: 'UGX',
                                                            maximumFractionDigits: 2,
                                                        })}
                                                </td>
                                                <td className="text-start shop-list p-3">
                                                    {item?.itemQuantity}
                                                </td>
                                                <td className="text-end font-weight-bold p-3">
                                                    {(filterService(item?.itemId)[0]?.price * item?.itemQuantity).toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'UGX',
                                                        maximumFractionDigits: 2,
                                                    })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-left">
                                            <span className="font-weight-bold">Subtotal:</span>
                                        </div>
                                        <div className="text-right">
                                            {
                                            order?.homeService ? (
                                                (order?.orderTotal - 100000)?.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'UGX',
                                                    maximumFractionDigits: 2,
                                                })
                                            ) : (
                                                order?.orderTotal?.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'UGX',
                                                    maximumFractionDigits: 2,
                                                })
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-left">
                                            <span className="font-weight-bold">Home Service:</span>
                                        </div>
                                        <div className="text-right">
                                            {
                                                order?.homeService ? (100000?.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'UGX',
                                                    maximumFractionDigits: 2,
                                                })) : 0.00.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'UGX',
                                                    maximumFractionDigits: 2,
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-left">
                                            <span className="font-weight-bold">Total:</span>
                                        </div>
                                        <div className="text-right">
                                            {order?.orderTotal?.toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'UGX',
                                                maximumFractionDigits: 2,
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OrderDetails