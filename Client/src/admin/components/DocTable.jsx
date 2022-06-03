import React from "react";
import { Link } from "react-router-dom";

//images
import img1 from "../../assets/images/doctors/01.jpg";
import img2 from "../../assets/images/doctors/02.jpg";
import img3 from "../../assets/images/doctors/03.jpg";
import img4 from "../../assets/images/doctors/04.jpg";

const DocTable = (props) => {
  const { doctors, isLoading } = props;
  return (
    <>
      <div className="row row-cols-md-2 row-cols-lg-5">
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="card team border-0 rounded shadow overflow-hidden">
            <div className="team-img position-relative">
              <img src={img1} className="img-fluid" alt="" />
              <ul className="list-unstyled team-social mb-0">
                <li>
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="facebook" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="linkedin" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="instagram" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="twitter" className="icons"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body content text-center">
              <Link to="/" className="title text-dark h5 d-block mb-0">
                Calvin Carlo
              </Link>
              <small className="text-muted speciality">Eye Care</small>
            </div>
          </div>
        </div>

        {!isLoading &&
          doctors.map((doctor, index) => (
            <div key={index} className="col-lg-3 col-md-4 mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doctor.image} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li>
                      <Link
                        to="/"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="facebook" className="icons"></i>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to="/"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="linkedin" className="icons"></i>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to="/"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="instagram" className="icons"></i>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to="/"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i data-feather="twitter" className="icons"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <Link to="/" className="title text-dark h5 d-block mb-0">
                    {doctor.full_name}
                  </Link>
                  <small className="text-muted speciality">
                    {doctor.specialities[0]}
                  </small>
                </div>
              </div>
            </div>
          ))}
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="card team border-0 rounded shadow overflow-hidden">
            <div className="team-img position-relative">
              <img src={img3} className="img-fluid" alt="" />
              <ul className="list-unstyled team-social mb-0">
                <li>
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="facebook" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="linkedin" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="instagram" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="twitter" className="icons"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body content text-center">
              <Link to="/" className="title text-dark h5 d-block mb-0">
                Alia Reddy
              </Link>
              <small className="text-muted speciality">Psychotherapy</small>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 mt-4">
          <div className="card team border-0 rounded shadow overflow-hidden">
            <div className="team-img position-relative">
              <img src={img4} className="img-fluid" alt="" />
              <ul className="list-unstyled team-social mb-0">
                <li>
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="facebook" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="linkedin" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="instagram" className="icons"></i>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="twitter" className="icons"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body content text-center">
              <Link to="/" className="title text-dark h5 d-block mb-0">
                Toni Kovar
              </Link>
              <small className="text-muted speciality">Orthopedic</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocTable;
