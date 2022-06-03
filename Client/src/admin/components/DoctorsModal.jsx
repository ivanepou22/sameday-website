/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doctorSelector } from "../../feautures/doctor/doctorSlice";

const DoctorsModal = (props) => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector(doctorSelector);
  const { show, setShowModal } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialities: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`modal modal-blur fade bg-gray ${
          show ? "display-block show" : "display-none"
        }`}
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
                Add a Doctor
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
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="name"
                        id="f_name"
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name :"
                        onChange={handleChange}
                        value={formData.name}
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
                        Image <span className="text-danger">*</span>
                      </label>
                      <input
                        name="image"
                        id="image"
                        type="file"
                        className="form-control"
                        placeholder="Your image :"
                        onChange={handleChange}
                        value={formData.image}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Your Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone :"
                        onChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Specialties</label>
                      <select className="form-control doctor-name select2input">
                        <option defaultValue="">Select Specialty</option>
                        <option defaultValue="CA">General Doctor</option>
                        <option defaultValue="CR">Pediatrician</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="float-right">
                      <button type="submit" className="btn btn-primary">
                        { isLoading ? "Loading..." : "Add Doctor" }
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

export default DoctorsModal;
