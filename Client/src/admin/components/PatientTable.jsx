import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiAddLine } from "react-icons/ri";
import PatientModal from "./PatientModal";
import { fetchUsers, userSelector } from "../../feautures/user/userSlice";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";

const PatientTable = () => {
  const dispatch = useDispatch();
  const { users, isLoading, limit, totalPages, totalResults } = useSelector(userSelector);
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

  //filter users by role
  const filteredUsers = users.filter((user) => user.role === "user");

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
                {isLoading ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <table className="table table-center bg-white mb-0">
                    <thead>
                      <tr>
                        <th className="border-bottom p-3">No.</th>
                        <th className="border-bottom p-3">PatientID</th>
                        <th className="border-bottom p-3">Name</th>
                        <th className="border-bottom p-3">Email</th>
                        <th className="border-bottom p-3">Role</th>
                        <th className="border-bottom p-3">Gender</th>
                        <th className="border-bottom p-3">DOB</th>
                        <th className="border-bottom p-3">Address</th>
                        <th className="border-bottom p-3">Country</th>
                        <th className="border-bottom p-3">State</th>
                        <th className="border-bottom p-3">Zip</th>
                        <th className="border-bottom p-3">Phone</th>
                        <th className="border-bottom p-3">Image</th>
                        <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers?.map((user, index) => (
                        <tr key={user.id}>
                          <td className="p-3 white-space-wrap-none">{index + 1}</td>
                          <td className="p-3 white-space-wrap-none">{user.patientId}</td>
                          <td className="py-3 white-space-wrap-none">
                            <Link to="#/">
                              <div className="d-flex align-items-center">
                                <span className="ms-2">{user.name}</span>
                              </div>
                            </Link>
                          </td>
                          <td className="p-3 white-space-wrap-none">{user.email}</td>
                          <td className="p-3 white-space-wrap-none">{user.role}</td>
                          <td className="p-3 white-space-wrap-none">{user.gender}</td>
                          <td className="p-3 white-space-wrap-none">{user.date_of_birth}</td>
                          <td className="p-3">{user.address}</td>
                          <td className="p-3 white-space-wrap-none">{user.country}</td>
                          <td className="p-3 white-space-wrap-none">{user.state}</td>
                          <td className="p-3 white-space-wrap-none">{user.zip}</td>
                          <td className="p-3 white-space-wrap-none">{user.phone_number}</td>
                          <td className="p-3 white-space-wrap-none"><img src={user.image} alt='User' height={12} className="avatar avatar-ex-small rounded-circle" /></td>
                          <td className="text-end p-3 white-space-wrap-none">
                            <Link to="#/" className="btn btn-icon btn-pills btn-soft-primary my-1">
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
                )}
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12 mt-4">
              <div className="d-md-flex align-items-center text-center justify-content-between">
                <span className="text-muted me-3">
                  Showing - {limit > totalResults ? totalResults : limit} out of {totalResults}
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
