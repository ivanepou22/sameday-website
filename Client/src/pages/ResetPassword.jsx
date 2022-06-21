/* eslint-disable */
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TopIcon } from "../components";
import same_day_logo from "../assets/images/Sameday-original.png";
import { resetPassword, passwordSelector, reset } from "../feautures/password/passwordSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, errorMessage, isSuccess } = useSelector(passwordSelector);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    token: searchParams.get("token"),
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(resetPassword(formData));
  };

  isSuccess &&
    setTimeout(() => {
      // redirect to success page
      window.location.href = "/password-reset-success";
    }, 2000);

  return (
    <>
      <TopIcon />
      <section className="bg-home d-flex bg-light align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img src={same_day_logo} height="35" className="mx-auto d-block" alt="" />
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Reset Password</h4>

                  <form onSubmit={handleSubmit} className="login-form mt-4 font-size-15">
                    {isSuccess && (
                      <div className="alert alert-success">Password reset successfully</div>
                    )}
                    {isError && <div className="alert alert-danger">{errorMessage}</div>}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            New Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter new password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Confirm Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={formData.confirmPassword}
                            required
                          />
                          {formData.password !== formData.confirmPassword && (
                            <small className="text-danger">
                              <b>Password and Confirm Password must be same</b>
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-orange">
                            {isLoading ? "Loading..." : "Reset Password"}
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">Remember your password ?</small>{" "}
                          <Link to="/login" className="text-dark h6 mb-0">
                            Sign in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
