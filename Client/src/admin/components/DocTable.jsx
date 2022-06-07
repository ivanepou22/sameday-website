import React from "react";
import { Link } from "react-router-dom";


const DocTable = (props) => {
  const { doctors, isLoading } = props;
  return (
    <>
      <div className="row row-cols-md-2 row-cols-lg-5">
        {!isLoading &&
          doctors?.map((doctor, index) => (
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
      </div>
    </>
  );
};

export default DocTable;
