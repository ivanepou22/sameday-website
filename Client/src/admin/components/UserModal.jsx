import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authSelector, register } from "../../feautures/auth/authSlice";

const UserModal = (props) => {
    const dispatch = useDispatch();
    const { isLoading, isError, errorMessage } = useSelector(authSelector);
    const { show, setShowModal } = props;
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        role: "",
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        const name = formData.first_name + " " + formData.last_name;
        dispatch(
            register({
                email: formData.email,
                password: formData.password,
                name,
                role: formData.role,
            })
        );
    };

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
                    className="modal-dialog modal-lg modal-dialog-centered"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom p-3">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add a User
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
                            {isError && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleSubmit} className="login-form mt-4 font-size-15" encType="multipart/form-data">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                First Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                id="f_name"
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name :"
                                                name="first_name"
                                                required
                                                value={formData.first_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Last Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                id="l_name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name :"
                                                name="last_name"
                                                required
                                                value={formData.last_name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Your Email <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Your email :"
                                                onChange={handleChange}
                                                value={formData.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="form-control doctor-name select2input"
                                            >
                                                <option value="">Select Role</option>
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                                <option value="doctor">Doctor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Password <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                id="phone"
                                                type="text"
                                                className="form-control"
                                                placeholder="Password :"
                                                required
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="float-right">
                                            <button type="submit" className="btn btn-primary">
                                                {isLoading ? "Loading..." : "Add User"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserModal