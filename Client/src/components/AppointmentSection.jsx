import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../feautures/auth/authSlice";
import {
  appointmentSelector,
  createAppointment,
} from "../feautures/appointment/appointmentSlice";
import { doctorSelector, getDoctors } from "../feautures/doctor/doctorSlice";

const AppointmentSection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const { isLoading, isError, errorMessage } = useSelector(appointmentSelector);
  const { doctors } = useSelector(doctorSelector);

  const [formData, setFormData] = useState({
    patient: user.id,
    email: user.email,
    phone: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAppointment({
        patient: formData.patient,
        doctor: formData.doctor[0],
        email: formData.email,
        phone: formData.phone[0],
        time: formData.time[0],
        date: new Date(formData.date[0]),
        department: formData.department[0],
        comment: formData.comment[0],
      })
    );
    //clear form
    setFormData({
      patient: user.id,
      email: user.email,
      phone: "",
      date: "",
      time: "",
      department: "",
      doctor: "",
      comment: "",
    });

  };

  useEffect(() => {
    dispatch(getDoctors());
  }
    , [dispatch]);



  return (
    <>
      <section className="section font-size-15 padding-top-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow rounded overflow-hidden">
                <ul
                  className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0"
                      id="clinic-booking"
                      data-bs-toggle="pill"
                      href="#pills-clinic"
                      role="tab"
                      aria-controls="pills-clinic"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h4 className="title fw-normal mb-0">
                          Book An Appointment
                        </h4>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-clinic"
                    role="tabpanel"
                    aria-labelledby="clinic-booking"
                  >
                    {isError && (
                      <div className="alert alert-danger">{errorMessage}</div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Patient Name
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="Patient Name :"
                              value={user.name}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
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
                              value={user.email}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
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
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Date : <span className="text-danger">*</span>
                            </label>
                            <input
                              name="date"
                              type="date"
                              className="flatpickr flatpickr-input form-control"
                              id="checkin-date"
                              value={formData.date}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="input-time">
                              Time : <span className="text-danger">*</span>
                            </label>
                            <input
                              name="time"
                              type="time"
                              className="form-control timepicker"
                              id="input-time"
                              placeholder="03:30 PM"
                              value={formData.time}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Departments</label>
                            <select
                              value={formData.department}
                              onChange={handleChange}
                              name="department"
                              className="form-control department-name select2input"
                            >
                              <option value="">Select Department</option>
                              <option value="Wellness">Wellness</option>
                              <option value="Radiology">Radiology</option>
                              <option value="Covid">Covid Testing</option>
                              <option value="Laboratory">Laboratory Services</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Doctor</label>
                            <select
                              value={formData.doctor}
                              onChange={handleChange}
                              name="doctor"
                              className="form-control doctor-name select2input"
                            >
                              <option value="">Select a Doctor</option>
                              {doctors?.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                  {doctor.full_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Comments</label>
                            <textarea
                              name="comment"
                              id="comments"
                              rows="4"
                              className="form-control"
                              placeholder="Your Message :"
                              value={formData.comment}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-orange float-right"
                          >
                            {isLoading ? "Booking..." : "Book An Appointment"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;
