import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointment, appointmentSelector } from "../feautures/appointment/appointmentSlice";
import moment from 'moment';

const EditAppointment = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { appointment } = useSelector(appointmentSelector);

    useEffect(() => {
        dispatch(fetchAppointment(id));
    } , [dispatch, id]);

    console.log(appointment);

  return (
    <>
      <div className="container margin-top-down-50">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="custom-form rounded shadow p-4">
              <h5 className="mb-4">Edit Appointment</h5>
              <form method="post" name="myForm">
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Date: <span className="text-danger">*</span></label>
                      <input name="date" id="date" type="date" value={moment(appointment.date).format('YYYY-MM-DD')} className="form-control border rounded" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Time: </label>
                      <input name="time" id="time" type="time" value={appointment.time} className="form-control border rounded" />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Comments: <span className="text-danger">*</span></label>
                      <textarea name="comments" id="comments" value={appointment.comment} rows="4" className="form-control border rounded"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" id="submit" name="send" className="btn btn-primary float-right">Update Appointment</button>
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

export default EditAppointment