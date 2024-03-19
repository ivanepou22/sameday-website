/* eslint-disable */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { imageSelector, UploadImage } from "../../feautures/image/imageSlice";
import { generatePatientNumber } from "../../utils/utils";

const PatientModal = (props) => {
  const { show, setShowModal } = props;
  const dispatch = useDispatch();
  const { imageUrl } = useSelector(imageSelector);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    patientNumber: generatePatientNumber(),
    gender: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleImageUpload = (e) => {
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   dispatch(createPatient())
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
                Add a Patient
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
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Patient Number <span className="text-danger">*</span>
                      </label>
                      <input
                        name="pNumber"
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
                        name="f_name"
                        id="f_name"
                        type="text"
                        className="form-control"
                        placeholder="Your First Name :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        name="f_name"
                        id="f_name"
                        type="text"
                        className="form-control"
                        placeholder="Your Last Name :"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <select className="form-control doctor-name select2input">
                        <option defaultValue="">Select Gender</option>
                        <option defaultValue="female">Female</option>
                        <option defaultValue="male">Male</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        {" "}
                        Date of Birth : <span className="text-danger">*</span>
                      </label>
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
                      <label className="form-label">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
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
                        placeholder="Your Image :"
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
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="float-right">
                      <button type="submit" className="btn btn-primary">
                        Submit a Patient
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

export default PatientModal;
