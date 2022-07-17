import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiAddLine } from "react-icons/ri";
import Table from "./Table";
import PatientModal from "./PatientModal";
import { fetchUsers, userSelector } from "../../feautures/user/userSlice";

const PatientTable = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage, users, limit, totalPages, totalResults } =
    useSelector(userSelector);
  const [showModal, setShowModal] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handlePageChange = (page) => {
    if (page < 1) {
      setPage(1);
    } else if (page > totalPages) {
      setPage(totalPages);
    } else {
      setPage(page);
    }
  };

  React.useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <>
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6">
              <h5 className="mb-0">Patients</h5>
              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">SameDay Lab Works</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Patients
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              <Link to="#/" onClick={handleShowModal} className="btn btn-primary">
                <RiAddLine /> Add patient
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-4">
              <div className="table-responsive shadow rounded">
                <Table data={users} />
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
                      <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
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
      <PatientModal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PatientTable;
