/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineEnvironment } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <>
      <div className="container font-size-15">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card features feature-primary text-center border-0">
              <div className="icon text-center rounded-md mx-auto bg-light-orange">
                <FiPhone className="font-size-20" />
              </div>
              <div className="card-body p-0 mt-3">
                <h5>Phone</h5>
                <p className="text-muted mt-3 align-text-center">
                  Get in Touch on Phone
                </p>
                <p>
                  <Link to="tel:+256708850000" className="link">
                    +256708850000 - Entebbe
                  </Link>
                </p>
                <p>
                  <Link to="tel:+256775108946" className="link">
                    +256775108946 - Kampala
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="card features feature-primary text-center border-0">
              <div className="icon text-center rounded-md mx-auto bg-light-orange">
                <BiEnvelope className="font-size-20" />
              </div>
              <div className="card-body p-0 mt-3 align-text-center">
                <h5>Email</h5>
                <p className="text-muted mt-3"> Get in Touch on Email</p>
                <Link to="mailto:info@samedaylabwork.com" className="link">
                  info@samedaylabwork.com
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card features feature-primary text-center border-0">
              <div className="icon text-center rounded-md mx-auto">
                <AiOutlineEnvironment className="font-size-20" />
              </div>
              <div className="card-body p-0 mt-3">
                <h5>Locations</h5>
                <p className="text-muted mt-3">
                  <Link
                    to="https://www.google.com/maps/@0.3311533,32.6025039,3a,90y,72.1h,86.9t/data=!3m6!1e1!3m4!1sfYmrwFrEby97rrxgVVL1hQ!2e0!7i13312!8i6656?hl=en"
                    className="link"
                  >
                    Imperial Mall, Shop No L29, Lower Ground Floor, Lugard
                    Avenue – Entebbe
                  </Link>
                </p>
                <p className="text-muted mt-3">
                  <Link
                    to="https://www.google.com/maps/@0.3311533,32.6025039,3a,75y,166.64h,87.08t,359.4r/data=!3m6!1e1!3m4!1sfYmrwFrEby97rrxgVVL1hQ!2e0!7i13312!8i6656?hl=en"
                    className="link"
                  >
                    REGENCY PLAZA, Office No 3, 18 Lugogo By-Pass – Kampala
                  </Link>
                </p>
                <p className="text-muted mt-3">
                  <Link
                    to="https://www.google.com/maps/place/Peniel+Beach+Hotel/@0.0395145,32.4596532,18z/data=!4m8!3m7!1s0x177d86c52afdeed7:0xf99d53c25a719bcc!5m2!4m1!1i2!8m2!3d0.0391212!4d32.4593148?hl=en"
                    className="link"
                  >
                    Peniel Beach Hotel, Airport Road - Airport, Entebbe
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
