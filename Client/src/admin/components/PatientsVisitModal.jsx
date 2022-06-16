import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVisit, reset, visitSelector } from "../../feautures/visit/visitSlice";
import { generateNext14Days, generateNext90Days, generateVisitNumber } from "../../utils/utils";

const PatientsVisitModal = (props) => {
  const { show, setShowModal, patients } = props;
  const { isLoading, isError, errorMessage, visit } = useSelector(visitSelector);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    visitNumber: generateVisitNumber(),
    date: "",
    patientId: "",
    location: "",
    address: "",
    consultation_results: "",
    medication: "",
    comments: "",
    next_visit_14_days: generateNext14Days(),
    next_visit_90_days: generateNext90Days(),
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
    dispatch(createVisit(formData));
    // setShowModal(isError);
  };

  const handleClose = () => {
    setShowModal(false);
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
                Add a Visit
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
              {visit && <div className="alert alert-success">Visit added successfully</div> }
              {isError && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Visit Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="visitNumber"
                        type="text"
                        className="form-control"
                        placeholder="Visit Number :"
                        value={formData.visitNumber}
                        readOnly
                      />
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
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient ID <span className="text-danger">*</span>
                      </label>
                      <select
                        name="patientId"
                        id="patientId"
                        value={formData.patientId}
                        onChange={handleChange}
                        className="form-control department-name select2input"
                      >
                        <option value="">Select Patient</option>
                        {patients
                          ?.filter((pt) => pt.role === "user")
                          .map((pt) => (
                            <option key={pt.id} value={pt.id}>
                              {pt.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Location <span className="text-danger">*</span>
                      </label>
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        id="location"
                        type="text"
                        className="form-control"
                        placeholder="Location :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Call 14 Days Date : </label>
                      <input
                        name="next_visit_14_days"
                        type="date"
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                        defaultValue={formData.next_visit_14_days}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Call 90 Days Date : </label>
                      <input
                        name="next_visit_90_days"
                        type="date"
                        className="flatpickr flatpickr-input form-control"
                        id="checkin-date"
                        defaultValue={formData.next_visit_90_days}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="address"
                        id="address"
                        rows="3"
                        className="form-control"
                        placeholder="Address :"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Consultation Results <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="consultation_results"
                        rows="3"
                        className="form-control"
                        placeholder="Consultation Results :"
                        value={formData.consultation_results}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Medication <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="medication"
                        rows="3"
                        className="form-control"
                        placeholder="MEdication :"
                        value={formData.medication}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name="comments"
                        rows="3"
                        className="form-control"
                        placeholder="Comments :"
                        value={formData.comments}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="float-right">
                      <button type="submit" className="btn btn-primary">
                        {isLoading ? "Loading..." : "Submit a Visit"}
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

export default PatientsVisitModal;
