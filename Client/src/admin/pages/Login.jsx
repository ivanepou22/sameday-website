/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import same_day_logo from "../../assets/images/Sameday-original.png";
import { authSelector, loginAdmin, reset } from "../../feautures/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, user, errorMessage } = useSelector(authSelector);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(loginAdmin(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/admin/dashboard");
    }
  }, [user, dispatch, navigate]);

  return (
    <>
      <section className="bg-home d-flex bg-light align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src={same_day_logo}
                height="35"
                className="mx-auto d-block"
                alt=""
              />
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                  {isError && (
                    <div className="alert alert-danger">
                      <strong>Error!</strong> {errorMessage}
                    </div>
                  )}
                  <form
                    onSubmit={handleSubmit}
                    className="login-form mt-4 font-size-15"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                className="form-check-input align-middle"
                                type="checkbox"
                                value=""
                                id="remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <Link
                            to="/admin/forgot-password"
                            className="text-dark h6 mb-0"
                          >
                            Forgot password ?
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-orange">
                            {isLoading ? "Loading..." : "Sign In"}
                          </button>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Don't have an account ?
                          </small>{" "}
                          <Link to="/admin/register" className="text-dark fw-bold">
                            Sign Up
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

export default Login;
