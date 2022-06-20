import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { fetchLogs, logsSelector } from "../../feautures/log/logSlice";
import { userSelector, fetchUsers } from "../../feautures/user/userSlice";
import { RiAddLine } from "react-icons/ri";
import PatientLogsModal from "./PatientLogsModal";
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

const PatientLogTable = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector(userSelector);
  const { logs, isLoading, limit, totalPages, totalResults } = useSelector(logsSelector)
  const [page, setPage] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchLogs(page));
  }, [dispatch, page]);

  const handlePageChange = (page) => {
    if (page < 1) {
      setPage(1);
    } else if (page > totalPages) {
      setPage(totalPages);
    } else {
      setPage(page);
    }
  };

  return (
    <>
      <>
        <div className="container-fluid">
          <div className="layout-specing">
            <div className="row">
              <div className="col-xl-9 col-md-6">
                <h5 className="mb-0">Patient Logs</h5>
                <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                  <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="/admin/dashboard">SameDay Lab Works</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Patient Logs
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
                <Link to={`#/`} onClick={handleShowModal} className="btn btn-primary">
                  <RiAddLine /> Add Log
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
                              <th className="border-bottom p-3">No.</th>
                              <th className="border-bottom p-3">Date</th>
                              <th className="border-bottom p-3">Type</th>
                              <th className="border-bottom p-3">Activity</th>
                              <th className="border-bottom p-3">Direction</th>
                              <th className="border-bottom p-3">Notes</th>
                              <th className="border-bottom p-3">Patient</th>
                              <th className="border-bottom p-3">Patient Email</th>
                              <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            {logs?.map((log, index) => (
                              <tr key={log.id}>
                                <td className="p-3 white-space-wrap-none">{index + 1}</td>
                                <td className="py-3 white-space-wrap-none">
                                  <Link to="#/">
                                    <div className="d-flex align-items-center">
                                      <span className="ms-2">{moment(log.engagementDate).format(`DD-MM-YYYY`)}</span>
                                    </div>
                                  </Link>
                                </td>
                                <td className="p-3 white-space-wrap-none">{log.engagementType}</td>
                                <td className="p-3 white-space-wrap-none">{log.activity}</td>
                                <td className="p-3 white-space-wrap-none">{log.initiationDirection}</td>
                                <td className="p-3 white-space-wrap-none">{log.notes}</td>
                                <td className="p-3 white-space-wrap-none">{log.patientId.name}</td>
                                <td className="p-3 white-space-wrap-none">{log.patientId.email}</td>
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
                  <span className="text-muted me-3">
                    Showing 1 - {limit > totalResults ? totalResults : limit} out of {totalResults}
                  </span>
                  <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                      <Link
                        onClick={() => handlePageChange(page - 1)}
                        className="page-link"
                        to="#/"
                        aria-label="Previous"
                      >
                        Prev
                      </Link>
                    </li>
                    {Array.apply(null, Array(totalPages)).map((x, i) => {
                      return (
                        <li
                          key={i}
                          style={{ cursor: "pointer" }}
                          className={`page-item ${page === i + 1 ? "active" : ""}`}
                        >
                          <Link className="page-link" onClick={() => handlePageChange(i + 1)} to="#/">
                            {i + 1}
                          </Link>
                        </li>
                      );
                    })}
                    <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                      <Link
                        onClick={() => handlePageChange(page + 1)}
                        className="page-link"
                        to="#/"
                        aria-label="Next"
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PatientLogsModal users={users} show={showModal} setShowModal={setShowModal} />
      </>
    </>
  );
};

export default PatientLogTable;
