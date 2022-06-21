import React from 'react'
import { Link } from 'react-router-dom'
import same_day_logo from "../../assets/images/Sameday-original.png";

const AdminResetPassword = () => {
    return (
        <>
            <section className="bg-home d-flex bg-light align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8">
                            <img src={same_day_logo} height="35" className="mx-auto d-block" alt="" />
                            <div className="card login-page bg-white shadow mt-4 rounded border-0">
                                <div className="card-body">
                                    <h4 className="text-center">Reset Password</h4>
                                    <form className="login-form mt-4 font-size-15">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        New Password <span className="text-danger">*</span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter new Password"
                                                        name="password"
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
                                                        placeholder="Enter Password"
                                                        name="confirm_password"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-orange">
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mx-auto">
                                                <p className="mb-0 mt-3">
                                                    <small className="text-dark me-2">Remember your password ?</small>{" "}
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
    )
}

export default AdminResetPassword