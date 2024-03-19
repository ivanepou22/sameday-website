import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset as resetImage, UploadImage, imageSelector } from "../../feautures/image/imageSlice";
import { createUser, userSelector, reset as resetUser } from "../../feautures/user/userSlice";
import { generatePatientNumber } from "../../utils/utils";

const UserModal = (props) => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector(userSelector);
  const { imageUrl } = useSelector(imageSelector);
  const { show, setShowModal } = props;
  const [formData, setFormData] = useState({
    patientId: generatePatientNumber(),
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
    gender: "",
    phone_number: "",
    date_of_birth: "",
    address: "",
    image: "",
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

  const handleImageUpload = (e) => {
    dispatch(resetImage());
    const ps = new Promise((resolve, reject) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ggikucjk");
      resolve(dispatch(UploadImage(data)));
    });
    toast.promise(ps, {
      pending: "Uploading...",
      success: "Image uploaded successfully",
      error: "Image upload failed",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.first_name + " " + formData.last_name;
    if (imageUrl) {
      dispatch(resetUser());
      dispatch(
        createUser({
          email: formData.email,
          password: formData.password,
          name,
          role: formData.role,
          image: imageUrl,
          phone_number: formData.phone_number,
          patientId: formData.patientId,
          date_of_birth: formData.date_of_birth,
          gender: formData.gender,
          address: formData.address,
        })
      );
      handleClose();
    } else {
      toast.error("Please upload an image");
      return;
    }
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
              <form
                onSubmit={handleSubmit}
                className="login-form mt-4 font-size-15"
                encType="multipart/form-data"
              >
                <div className="row">
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
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        User Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="patientId"
                        value={formData.patientId}
                        readOnly
                        id="pNumber"
                        type="text"
                        className="form-control"
                        placeholder="Patient Number :"
                      />
                    </div>
                  </div>
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
                        Gender <span className="text-danger">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-control doctor-name select2input"
                      >
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Date of Birth : <span className="text-danger">*</span>
                      </label>
                      <input
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        type="date"
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone :"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Image <span className="text-danger">*</span>
                      </label>
                      <input
                        name="image"
                        onChange={handleImageUpload}
                        accept="image/*"
                        id="image"
                        type="file"
                        className="form-control"
                        placeholder="Your Image :"
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
                      <label className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password :"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        id="address"
                        rows="3"
                        className="form-control"
                        placeholder="Address :"
                      ></textarea>
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
  );
};

export default UserModal;
