/* eslint-disable */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authSelector, register } from "../feautures/auth/authSlice";
import { reset as resetImage, UploadImage, imageSelector } from "../feautures/image/imageSlice";
import { TopIcon } from "../components";
import { generatePatientNumber } from "../utils/utils";
import same_day_logo from "../assets/images/Sameday-original.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { imageUrl } = useSelector(imageSelector);
  const { isLoading, isError, user, errorMessage } = useSelector(authSelector);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    address: "",
    gender: "",
    date_of_birth: "",
    role: "user",
    patientId: generatePatientNumber(),
  });

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.first_name + " " + formData.last_name;
    const data = {
      email: formData.email,
      password: formData.password,
      name,
      phone_number: formData.phone_number,
      address: formData.address,
      role: formData.role,
      patientId: formData.patientId,
      date_of_birth: formData.date_of_birth,
      gender: formData.gender,
    };

    if (imageUrl) {
      dispatch(
        register({
          ...data,
          image: imageUrl,
        })
      );
    } else {
      toast.error("Please upload Image!");
      return;
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <>
      <section className="bg-half-150 d-table w-100 bg-light bg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <img src={same_day_logo} height="35" className="mx-auto d-block" alt="" />
              <div className="card login-page bg-white shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign Up</h4>
                  {isError && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="login-form mt-4 font-size-15">
                    <div className="row">
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
                      <input type="hidden" name="role" value={formData.role} readOnly />
                      <input type="hidden" name="patientId" value={formData.patientId} readOnly />
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input align-middle"
                              type="checkbox"
                              defaultChecked
                              id="accept-tnc-check"
                            />
                            <label className="form-check-label" htmlFor="accept-tnc-check">
                              I Accept
                              <Link to="#/" className="text-primary">
                                Terms And Condition
                              </Link>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="d-grid">
                          <button className="btn btn-orange">
                            {isLoading ? "Loading..." : "Sign Up"}
                          </button>
                        </div>
                      </div>
                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">Already have an account ?</small>{" "}
                          <Link to="/login" className="text-dark fw-bold">
                            Sign in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
