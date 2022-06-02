/* eslint-disable */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSelector, register } from "../feautures/auth/authSlice";
import { TopIcon } from "../components";
import same_day_logo from "../assets/images/Sameday-original.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, user, errorMessage } = useSelector(authSelector);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.first_name + " " + formData.last_name;
    dispatch(
      register({
        email: formData.email,
        password: formData.password,
        name,
      })
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <>
      <TopIcon />
      <section className="bg-half-150 d-table w-100 bg-light bg-light-gray">
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
                  <h4 className="text-center">Sign Up</h4>
                  {isError && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <form
                    onSubmit={handleSubmit}
                    className="login-form mt-4 font-size-15"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="first_name"
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="last_name"
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
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
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
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
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input align-middle"
                              type="checkbox"
                              defaultChecked
                              id="accept-tnc-check"
                            />
                            <label
                              className="form-check-label"
                              for="accept-tnc-check"
                            >
                              I Accept{" "}
                              <Link to="#/" className="text-primary">
                                Terms And Condition
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-grid">
                          <button className="btn btn-orange">
                            {isLoading ? "Loading..." : "Sign Up"}
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">
                            Already have an account ?
                          </small>{" "}
                          <Link to="/login" className="text-dark fw-bold">
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

export default Register;
