import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLog, logsSelector, reset } from "../../feautures/log/logSlice";

const PatientLogsModal = (props) => {
  const { show, setShowModal, users } = props;
  const { isLoading, isError, errorMessage, log } = useSelector(logsSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    patientId: "",
    engagementDate: "",
    engagementType: "",
    activity: "",
    notes: "",
    initiationDirection: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset())
    dispatch(createLog(formData));
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
                Add a Patient Log
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
              {log && <div className="alert alert-success">Visit added successfully</div>}
              {isError && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient ID <span className="text-danger">*</span>
                      </label>
                      <select
                        value={formData.patientId}
                        onChange={handleChange}
                        name="patientId"
                        className="form-control department-name select2input"
                      >
                        <option value="">Select Patient</option>
                        {users
                          ?.filter((user) => user.role === "user")
                          .map((user) => (
                            <option key={user.id} value={user.id}>
                              {user.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Engagement Date : <span className="text-danger">*</span>
                      </label>
                      <input
                        name="engagementDate"
                        type="date"
                        value={formData.engagementDate}
                        onChange={handleChange}
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Activity <span className="text-danger">*</span>
                      </label>
                      <input
                        name="activity"
                        id="activity"
                        type="text"
                        value={formData.activity}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Activity... :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Initiation Direction <span className="text-danger">*</span>
                      </label>
                      <select
                        value={formData.initiationDirection}
                        onChange={handleChange}
                        name="initiationDirection"
                        className="form-control department-name select2input"
                      >
                        <option value="">Select Direction</option>
                        <option value="incomingCall">Incoming Call</option>
                        <option value="OutGoingCall">Outgoing Call</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Engagement Type <span className="text-danger">*</span>
                      </label>
                      <select
                        value={formData.engagementType}
                        onChange={handleChange}
                        name="engagementType"
                        className="form-control department-name select2input"
                      >
                        <option value="">Select Type</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Notes <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="notes"
                        id="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="form-control"
                        placeholder="Notes... :"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="float-right">
                      <button type="submit" className="btn btn-primary">
                        {isLoading ? "Loading..." : "Submit a Log"}
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

export default PatientLogsModal;
