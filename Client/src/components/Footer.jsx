/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../feautures/auth/authSlice";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiPhone } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineEnvironment } from "react-icons/ai";
// Logo
import same_day_logo from "../assets/images/Sameday-original.png";

const Footer = () => {
  const { user } = useSelector(authSelector);
  //get current year
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
              <Link to="#" className="logo-footer">
                <img src={same_day_logo} height="35" alt="" />
              </Link>
              <p className="mt-4 me-xl-5 font-size-15">
                Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic,
                Laboratory and Diagnostic Center focused on preventive care.
              </p>
            </div>

            <div className="col-xl-7 col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="text-light title-dark footer-head">Company</h5>
                  <ul className="list-unstyled footer-list mt-4 font-size-15">
                    <li>
                      <Link to="/about" className="text-foot">
                        {" "}
                        <i className="mdi mdi-chevron-right me-1"></i> About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-foot">
                        <i className="mdi mdi-chevron-right me-1"></i> Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-foot">
                        <i className="mdi mdi-chevron-right me-1"></i> Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-foot">
                        <i className="mdi mdi-chevron-right me-1"></i> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <h5 className="text-light title-dark footer-head">Others</h5>
                  <ul className="list-unstyled footer-list mt-4 font-size-15">
                    {!user && (
                      <>
                        <li>
                          <Link to="/login" className="text-foot">
                            {" "}
                            <i className="mdi mdi-chevron-right me-1"></i> Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/register" className="text-foot">
                            {" "}
                            <i className="mdi mdi-chevron-right me-1"></i> Register
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link to="/blogs" className="text-foot">
                        {" "}
                        <i className="mdi mdi-chevron-right me-1"></i> Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-1 pt-sm-0">
                  <h5 className="text-light title-dark footer-head">Contact us</h5>
                  <ul className="list-unstyled footer-list mt-4 font-size-15">
                    <li className="d-flex align-items-center">
                      <BiEnvelope />
                      <Link to="mailto:info@samedaylabwork.com" className="text-foot ms-2">
                        {" "}
                        info@samedaylabwork.com{" "}
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <FiPhone />
                      <Link to="tel:+256708850000" className="text-foot ms-2">
                        {" "}
                        +256708850000 | +256775108946
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <AiOutlineEnvironment />
                      <Link to="/" className="video-play-icon text-foot ms-2">
                        {" "}
                        View on Google map
                      </Link>
                    </li>
                  </ul>

                  <ul className="list-unstyled social-icon footer-social mb-0 mt-4 font-size-15">
                    <li className="list-inline-item mx-2">
                      <Link to="#" className="rounded-pill">
                        <FiFacebook />
                      </Link>
                    </li>
                    <li className="list-inline-item mx-2">
                      <Link to="#" className="rounded-pill">
                        <FiInstagram />
                      </Link>
                    </li>
                    <li className="list-inline-item mx-2">
                      <Link to="#" className="rounded-pill">
                        <FiTwitter />
                      </Link>
                    </li>
                    <li className="list-inline-item mx-2">
                      <Link to="#" className="rounded-pill">
                        <FiLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="pt-4 footer-bar">
            <div className="row align-items-center font-size-15">
              <div className="col-sm-6">
                <div className="text-sm-start text-center">
                  <p className="mb-0">© SameDay Laboratories {year}. All Rights Reserved.</p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0">
                <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                  <li className="list-inline-item">
                    <Link to="/" className="text-foot me-2">
                      Terms
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/l" className="text-foot me-2">
                      Privacy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/about" className="text-foot me-2">
                      About
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/contact" className="text-foot me-2">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
