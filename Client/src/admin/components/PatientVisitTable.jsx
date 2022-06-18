import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getVisits, visitSelector } from "../../feautures/visit/visitSlice";
import { fetchUsers, userSelector } from "../../feautures/user/userSlice";
import PatientsVisitModal from "./PatientsVisitModal";
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import moment from "moment";

const PatientVisitTable = () => {
  const dispatch = useDispatch();
  const { visits, isLoading, limit, totalPages, totalResults } = useSelector(visitSelector)
  const { users } = useSelector(userSelector)
  const [showModal, setShowModal] = React.useState(false);
  const [page, setPage] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getVisits(page));
    dispatch(fetchUsers())
  }, [dispatch, page])

  const handlePageChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Patient Visits</h5>
              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="/admin/dashboard">SameDay Lab Works</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Patient Visits
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link to={`#/`} onClick={handleShowModal} className="btn btn-primary">
                <RiAddLine /> Add visit
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive shadow rounded">
                {
                  isLoading ?
                    <div className="text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    :
                    (
                      <table className="table table-center bg-white mb-0">
                        <thead>
                          <tr>
                            <th className="border-bottom p-3 white-space-wrap-none">No.</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Number</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Patient</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Patient Email</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Date</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Location</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Next-Visit-14-Days</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Next-Visit-90-Days</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Address</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Results</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Medication</th>
                            <th className="border-bottom p-3 white-space-wrap-none">Notes</th>
                            <th className="border-bottom p-3 white-space-wrap-none" style={{ minWidth: "100px" }}></th>
                          </tr>
                        </thead>
                        <tbody>
                          {visits?.map((visit, index) => (
                            <tr key={visit.id}>
                              <td className="p-3 white-space-wrap-none">{index + 1}</td>
                              <td className="py-3 white-space-wrap-none">
                                <Link to="#/">
                                  <div className="d-flex align-items-center">
                                    <span className="ms-2">{visit.visitNumber}</span>
                                  </div>
                                </Link>
                              </td>
                              <td className="p-3 white-space-wrap-none">{visit.patientId.name}</td>
                              <td className="p-3 white-space-wrap-none">{visit.patientId.email}</td>
                              <td className="p-3 white-space-wrap-none">
                                {moment(visit.date).format("DD-MM-YYYY")}
                              </td>
                              <td className="p-3 white-space-wrap-none">{visit.location}</td>
                              <td className="p-3 white-space-wrap-none">{moment(visit.next_visit_14_days).format('DD-MM-YYYY')}</td>
                              <td className="p-3 white-space-wrap-none">{moment(visit.next_visit_90_days).format('DD-MM-YYYY')}</td>
                              <td className="p-3 white-space-wrap-none">{visit.address}</td>
                              <td className="p-3 white-space-wrap-none">{visit.consultation_results}</td>
                              <td className="p-3 white-space-wrap-none">{visit.medication}</td>
                              <td className="p-3 white-space-wrap-none">{visit.comments}</td>
                              <td className="text-end p-3 white-space-wrap-none">
                                <Link
                                  to="#/"
                                  className="btn btn-icon btn-pills btn-soft-primary my-1"
                                >
                                  <AiOutlineEye />
                                </Link>
                                <Link
                                  to="#/"
                                  className="btn btn-icon btn-pills btn-soft-success my-1 mx-2"
                                >
                                  <FaRegEdit />
                                </Link>
                                <Link to="#/" className="btn btn-icon btn-pills btn-soft-danger">
                                  <AiOutlineDelete />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )
                }
              </div>
            </div>
          </div>

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
      <PatientsVisitModal patients={users} show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PatientVisitTable;
