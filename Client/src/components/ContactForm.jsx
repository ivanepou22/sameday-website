/* eslint-disable */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact, reset, contactSelector } from "../feautures/contact/contactSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector(contactSelector);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(createContact(data));
  };

  return (
    <>
      <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
        <div className="custom-form rounded shadow p-3">
          <h5 className="mb-4">Get in touch!</h5>
          {isError && <p className="text-danger">{errorMessage}</p>}
          <form onSubmit={sendMessage} name="myForm" className="font-size-15">
            <p id="error-msg"></p>
            <div id="simple-msg"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Your Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    id="name"
                    type="text"
                    className="form-control border rounded"
                    placeholder="First Name :"
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
                    value={data.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    className="form-control border rounded"
                    placeholder="Your email :"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    id="subject"
                    className="form-control border rounded"
                    placeholder="Your subject :"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Comments <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    id="message"
                    rows="4"
                    className="form-control border rounded"
                    placeholder="Your Message :"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button type="submit" id="submit" name="send" className="btn btn-orange">
                  {isLoading ? "Loading..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
