/* eslint-disable */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appointmentSelector,
  createAppointment,
} from "../../feautures/appointment/appointmentSlice";

const AppointmentModal = (props) => {
  const { show, setShowModal, doctors, patients } = props;
  const dispatch = useDispatch();
  const {isLoading, isError, errorMessage } = useSelector(appointmentSelector);

  const handleClose = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctor: "",
    patient: "",
    comment: "",
    phone: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAppointment(formData));
    handleClose();
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
                Book an Appointment
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient Name <span className="text-danger">*</span>
                      </label>
                      <select
                        name="patient"
                        value={formData.patient}
                        onChange={handleChange}
                        className="form-control department-name select2input"
                      >
                        <option value="">Select Patient</option>
                        {patients
                          ?.filter((pt) => pt.role === "user")
                          .map((pt, index) => (
                            <option key={index} value={pt.id}>
                              {pt.name}
                            </option>
                          ))}
                      </select>
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="form-control department-name select2input"
                      >
                        <option defaultValue="EY">Eye Care</option>
                        <option defaultValue="GY">Gynecologist</option>
                        <option defaultValue="PS">Psychotherapist</option>
                        <option defaultValue="OR">Orthopedic</option>
                        <option defaultValue="DE">Dentist</option>
                        <option defaultValue="GA">Gastrologist</option>
                        <option defaultValue="UR">Urologist</option>
                        <option defaultValue="NE">Neurologist</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Doctor</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="form-control doctor-name select2input"
                      >
                        <option value="">Select Doctor</option>
                        {doctors?.map((doc, index) => (
                          <option key={index} value={doc.id}>
                            {doc.full_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Date : </label>
                      <input
                        name="date"
                        type="date"
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="input-time">
                        Time :{" "}
                      </label>
                      <input
                        name="time"
                        type="time"
                        className="form-control timepicker"
                        id="input-time"
                        placeholder="03:30 PM"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="comment"
                        id="comment"
                        rows="4"
                        className="form-control"
                        placeholder="Your Message :"
                        value={formData.comment}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        {isLoading ? "Loading..." : "Book an Appointment"}
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

export default AppointmentModal;
