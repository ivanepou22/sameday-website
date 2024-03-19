/* eslint-disable */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TopIcon } from "../components";
import same_day_logo from "../assets/images/Sameday-original.png";
import { sendPassReset, passwordSelector, reset } from "../feautures/password/passwordSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { isLoading, isError, errorMessage, isSuccess } = useSelector(passwordSelector);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(sendPassReset(email));
  };

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
                  <h4 className="text-center">Recover Account</h4>
                  {isSuccess && (
                    <div className="alert alert-success">
                      Password reset link has been sent to your email
                    </div>
                  )}

                  {isError && (
                    <div className="alert alert-danger">
                      <strong>Error!</strong> {errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="login-form mt-4 font-size-15">
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="text-muted">
                          Please enter your email address. You will receive a link to create a new
                          password via email.
                        </p>
                        <div className="mb-3">
                          <label className="form-label">
                            Email address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Email Address"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-orange">
                            {isLoading ? "Sending..." : "Send"}
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

export default ForgotPassword;
