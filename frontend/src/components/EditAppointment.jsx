import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchAppointment,
  appointmentSelector,
  updateAppointmentByUser,
} from "../feautures/appointment/appointmentSlice";
import moment from "moment";

const EditAppointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { appointment, isLoading } = useSelector(appointmentSelector);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAppointment(id));

    return () => controller.abort();
  }, [dispatch, id]);

  const formData = useMemo(() => {
    return {
      date: moment(appointment.date).format("YYYY-MM-DD"),
      time: moment(appointment.date).format("HH:mm"),
      comment: appointment.comment || "",
    };
  }, [appointment]);

  const [data, setData] = React.useState(formData);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ps = new Promise((resolve) => {
      resolve(
        dispatch(
          updateAppointmentByUser({
            id: appointment.id,
            date: new Date(data.date),
            ...data,
          })
        )
      );
    });
    toast.promise(ps, {
      pending: "Updating...",
      success: "Appointment updated successfully",
      error: "Error updating appointment",
    });

    // clear formData
    formData.date = "";
    formData.time = "";
    formData.comment = "";

    navigate("/patient-dashboard");
  };

  return (
    <>
      <div className="container margin-top-down-50">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="custom-form rounded shadow p-4">
              {isLoading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  <h5 className="mb-4">Edit Appointment</h5>
                  <form onSubmit={handleSubmit} name="myForm">
                    <p id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Date: <span className="text-danger">*</span>
                          </label>
                          <input
                            name="date"
                            id="date"
                            type="date"
                            value={data.date}
                            onChange={handleChange}
                            className="form-control border rounded"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Time: </label>
                          <input
                            name="time"
                            id="time"
                            type="time"
                            value={data.time}
                            onChange={handleChange}
                            className="form-control border rounded"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Comments: <span className="text-danger">*</span>
                          </label>
                          <textarea
                            name="comment"
                            id="comment"
                            value={data.comment}
                            onChange={handleChange}
                            rows="4"
                            className="form-control border rounded"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary float-right"
                        >
                          Update Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAppointment;
