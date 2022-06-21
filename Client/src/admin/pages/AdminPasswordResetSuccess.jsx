/* eslint-disable */
import React from "react";
import { Link  } from "react-router-dom";
import { TopIcon } from "../../components";
import same_day_logo from "../../assets/images/Sameday-original.png";

const AdminPasswordResetSuccess = () => {
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
                  <h4 className="text-center">Success</h4>
                  <form className="login-form mt-4 font-size-15">
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="text-muted">
                          Your password has been reset successfully. Please click on the link below
                          to login
                        </p>
                      </div>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark text-center me-2">Click Here to Login</small>{" "}
                          <Link to="/admin" className="text-dark h6 mb-0">
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

export default AdminPasswordResetSuccess;
