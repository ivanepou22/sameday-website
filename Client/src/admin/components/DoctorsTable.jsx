/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import DocTable from "./DocTable";
import DoctorsModal from "./DoctorsModal";
import { doctorSelector, getDoctors } from "../../feautures/doctor/doctorSlice";

const DoctorsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage, doctors, limit, totalPages, totalResults } = useSelector(doctorSelector);
  const [page, setPage] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handlePageChange = (page) => {
    setPage(page);
  }

  useEffect(() => {
    dispatch(getDoctors(page));
  }, [dispatch, page]);

  console.log(limit, totalPages, totalResults);

  return (
    <>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Doctors</h5>

              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">SameDay Lab Works</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Doctors
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link
                to={`#/`}
                onClick={handleShowModal}
                className="btn btn-primary"
              >
                <RiAddLine /> Add Doctor
              </Link>
            </div>
          </div>
          <DocTable isLoading={isLoading} doctors={doctors} />
          <div className="row text-center">
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
                <span className="text-muted me-3">Showing 1 - {limit > totalResults ? totalResults : limit} out of {totalResults}</span>
                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                  <li className="page-item"><Link className="page-link" to="#/" aria-label="Previous">Prev</Link></li>
                  {
                    Array.apply(null, Array(totalPages)).map((x, i) => {
                      return <li key={i} className="page-item"><Link className="page-link" onClick={() => handlePageChange(i + 1)} to="#/">{i + 1}</Link></li>
                    })
                  }
                  <li className="page-item"><Link className="page-link" to="#/" aria-label="Next">Next</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DoctorsModal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default DoctorsTable;
