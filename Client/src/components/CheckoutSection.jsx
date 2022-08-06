/* eslint-disable */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../feautures/auth/authSlice";
import { cartSelector, clearCart, homeService } from "../feautures/cart/cartSlice";
import { createOrder, ordersSelector } from "../feautures/orders/ordersSlice";
import { updateUser } from "../feautures/user/userSlice";
import { generateOrderNumber } from "../utils/utils";

const CheckoutSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, errorMessage } = useSelector(ordersSelector);
  const { user } = useSelector(authSelector);
  const { cart, totalItems, totalPrice } = useSelector(cartSelector);
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({
    address: user.address || "",
    country: user.country || "",
    state: user.state || "",
    zip: user.zip || "",
    id: user.id,
    ...user,
  });

  const [formData, setFormData] = useState({
    orderNumber: generateOrderNumber(),
    orderDate: new Date().toLocaleDateString(),
    userId: user.id,
    orderItems: cart.map((item) => ({
      itemId: item.id,
      itemQuantity: item.quantity,
      itemPrice: item.price,
      itemName: item.name,
    })),
    orderTotal: totalPrice,
    homeService: checked,
  });

  // console.log(formData);

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateUser(userData));
    dispatch(createOrder(formData));
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <>
      <section className="section font-size-15 padding-top-20">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card rounded shadow p-4 border-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="h5 mb-0">Your cart</span>
                  <span className="badge bg-primary rounded-pill">{totalItems}</span>
                </div>
                <ul className="list-group mb-3 border">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="d-flex justify-content-between lh-sm p-3 border-bottom"
                    >
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-muted">{item.description}</small>
                      </div>
                      <span className="text-muted">
                        {item.total?.toLocaleString("en-US", {
                          style: "currency",
                          currency: "UGX",
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </li>
                  ))}
                  <li className="d-flex justify-content-between p-3">
                    <span className="text-muted">Do You Prefer Home Service ?</span>
                    <span className="text-muted">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="save-info"
                        value={checked}
                        onChange={(e) => {
                          console.log("checked " + e.target.checked);
                          // POTENTIAL BUG: If the user clicks the checkbox,
                          // the value of the checkbox will be set to "on" and price of 5000 will be added to the total
                          // however, if the user clicks the checkbox again, the value will be set to "off" and the price
                          // of 5000 will be removed from the total but the UI will still show the previous value of $price + 5000
                          // only updates when refreshing the page
                          setChecked(!checked);
                          dispatch(homeService(!checked));
                        }}
                      />
                    </span>
                  </li>
                  <li className="d-flex justify-content-between p-3">
                    <span>Total (UGX)</span>
                    <strong>
                      {totalPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "UGX",
                        maximumFractionDigits: 2,
                      })}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="card rounded shadow p-4 border-0">
                <h5 className="mb-3">Billing address</h5>
                <form onSubmit={handleSubmit} className="needs-validation">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        value={user.name.split(" ")[0]}
                        readOnly
                      />
                      <div className="invalid-feedback">Valid first name is required.</div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        value={user.name.split(" ")[1]}
                        readOnly
                      />
                      <div className="invalid-feedback">Valid last name is required.</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text bg-light text-muted border">@</span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Username"
                          value={user.name}
                          readOnly
                        />
                        <div className="invalid-feedback"> Your username is required. </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        value={user.email}
                        readOnly
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address htmlFor shipping updates.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="1234 Main St"
                        required
                        value={userData.address}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter your shipping address.</div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select
                        name="country"
                        value={userData.country}
                        onChange={handleChange}
                        className="form-select form-control"
                        id="country"
                        required
                      >
                        <option value={user?.country ? user?.country : ""}>
                          {user?.country ? user?.country : "Choose..."}
                        </option>
                        <option value="Uganda">Uganda</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Burundi">Burundi</option>
                        <option value="South Sudan">South Sudan</option>
                      </select>
                      <div className="invalid-feedback">Please select a valid country.</div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        District
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={userData.state}
                        onChange={handleChange}
                        className="form-control"
                        id="state"
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="zip"
                        placeholder=""
                        required
                        value={userData.zip}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <div className="padding-top-20 float-right">
                    <button className="btn btn-primary" type="submit">
                      {isLoading ? "Creating Order..." : "Checkout"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutSection;
