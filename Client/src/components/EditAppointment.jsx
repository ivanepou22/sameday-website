import React, { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  appointmentSelector,
  updateAppointmentByUser,
  fetchAppointment,
} from "../feautures/appointment/appointmentSlice";

const EditAppointment = (props) => {
  const { show, setShowModal, appt } = props;
  const dispatch = useDispatch();
  const { appointment, isLoading, isError, errorMessage } = useSelector(appointmentSelector);

  const handleClose = () => {
    setShowModal(false);
  };

  const id = useMemo(() => appt?.id, [appt]);

  useEffect(() => {
    dispatch(fetchAppointment(id));
  }, [id]);

  const [formData, setFormData] = useState({
    date: isLoading ? new Date().toISOString().split("T")[0] : appointment.date,
    time: "",
    comment: appointment?.comment,
    id: appointment?.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: change backend endpoint to allow user to edit appointment specifically 3 fields
    const ps = new Promise((resolve) => {
      resolve(
        dispatch(
          updateAppointmentByUser({
            ...formData,
            date: new Date(formData.date).toISOString(),
          })
        )
      );
    });

    toast.promise(ps, {
      pending: "Updating appointment...",
      success: "Appointment updated successfuly",
      error: "Unable to update appointment",
    });

    setFormData({
      id: "",
      date: "",
      time: "",
      comment: "",
    });
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
                Edit an Appointment
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
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Date : </label>
                      <input
                        name="date"
                        type="date"
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                        }}
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
                        value={appointment?.time}
                        onChange={(e) => {
                          setFormData({ ...formData, time: e.target.value });
                        }}
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
                        onChange={(e) => {
                          setFormData({ ...formData, comment: e.target.value });
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary float-right">
                      {isLoading ? "Loading..." : "Update Appointment"}
                    </button>
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

export default EditAppointment;
