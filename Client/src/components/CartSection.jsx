import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  addToCart,
  cartSelector,
  clearItemFromCart,
  removeFromCart,
} from "../feautures/cart/cartSlice";

//icons
import { FcEmptyTrash } from 'react-icons/fc'

const CartSection = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector(cartSelector);

  const handleRemove = (pdt) => {
    if (pdt.quantity > 1) {
      dispatch(removeFromCart(pdt));
    } else {
      dispatch(clearItemFromCart(pdt));
    }
  };

  return (
    <>
      <section className="section font-size-15 padding-top-20">
        {
          cart.length > 0 ? (
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive bg-white shadow rounded">
                    <table className="table table-center table-padding mb-0">
                      <thead>
                        <tr>
                          <th className="border-bottom p-3" style={{ minWidth: "20px" }}></th>
                          <th className="border-bottom p-3" style={{ minWidth: "300px" }}>
                            Product
                          </th>
                          <th className="border-bottom text-center p-3" style={{ minWidth: "160px" }}>
                            Price
                          </th>
                          <th className="border-bottom text-center p-3" style={{ minWidth: "190px" }}>
                            Qty
                          </th>
                          <th className="border-bottom text-end p-3" style={{ minWidth: "50px" }}>
                            Total
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          cart.map((item) => (
                            <tr key={item.id}>
                              <td className="h5 p-3 text-center">
                                <Link
                                  onClick={() => dispatch(clearItemFromCart(item))}
                                  to="#"
                                  className="text-danger"
                                >
                                  <AiOutlineClose />
                                </Link>
                              </td>
                              <td className="p-3">
                                <div className="d-flex align-items-center">
                                  <Link to={`/service-details/${item.id}`}>
                                    <img
                                      src={item?.image}
                                      className="img-fluid avatar avatar-small rounded shadow"
                                      style={{ height: "auto" }}
                                      alt=""
                                    />
                                  </Link>
                                  <Link to={`/service-details/${item.id}`}>
                                    <h6 className="mb-0 ms-3">{item?.name}</h6>
                                  </Link>
                                </div>
                              </td>
                              <td className="text-center p-3">
                                {
                                  item?.price?.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'UGX',
                                    maximumFractionDigits: 2,
                                  })
                                }</td>
                              <td className="text-center shop-list p-3">
                                <div className="qty-icons">
                                  <button
                                    onClick={() => handleRemove(item)}
                                    className="btn btn-icon btn-primary minus"
                                  >
                                    -
                                  </button>
                                  <input
                                    min="0"
                                    name="quantity"
                                    value={item.quantity}
                                    type="number"
                                    readOnly
                                    className="btn btn-icon btn-primary qty-btn quantity margin-left-right-10"
                                  />
                                  <button
                                    onClick={() => dispatch(addToCart(item))}
                                    className="btn btn-icon btn-primary plus"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="text-end font-weight-bold p-3">
                                {
                                  item?.total?.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'UGX',
                                    maximumFractionDigits: 2,
                                  })
                                }</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-6 mt-4 pt-2">
                  <Link to="/shop" className="btn btn-primary">
                    Shop More
                  </Link>
                  <Link to="/shop" className="btn btn-soft-primary ms-2">
                    Update Cart
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                  <div className="table-responsive bg-white rounded shadow">
                    <table className="table table-center table-padding mb-0">
                      <tbody>
                        <tr>
                          <td className="h6 p-3">Subtotal</td>
                          <td className="text-end font-weight-bold p-3">
                            {
                              totalPrice?.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'UGX',
                                maximumFractionDigits: 2,
                              })
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className="h6 p-3">Taxes</td>
                          <td className="text-end font-weight-bold p-3">UGX 0</td>
                        </tr>
                        <tr className="bg-light">
                          <td className="h6 p-3">Total</td>
                          <td className="text-end font-weight-bold p-3">
                            {
                              totalPrice?.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'UGX',
                                maximumFractionDigits: 2,
                              })
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 pt-2 text-end">
                    <Link to="/checkout" className="btn btn-primary">
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="cart-empty">
                  <div className="empty-bin">
                    <FcEmptyTrash />
                  </div>
                  <span>Your Cart is Empty</span>
                </div>
              </div>
            </div>
          )
        }
      </section>
    </>
  );
};

export default CartSection;
