import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { userSelector, fetchUsers } from "../../feautures/user/userSlice";
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { RiAddLine } from 'react-icons/ri';
import UserModal from './UserModal';

const UsersTable = () => {
    const dispatch = useDispatch();
    const { users, isLoading, limit, totalPages, totalResults } = useSelector(userSelector);
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handlePageChange = (page) => {
        setPage(page);
    }

    React.useEffect(() => {
        dispatch(fetchUsers(page));
    }, [dispatch, page]);

    return (
        <>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="row">
                        <div className="col-xl-9 col-md-6">
                            <h5 className="mb-0">Users</h5>
                            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/admin/dashboard">SameDay Lab Works</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Users</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
                            <Link to={`#/`} onClick={handleShowModal} className="btn btn-primary"><RiAddLine /> Add User</Link>
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
                                                        <th className="border-bottom p-3">Name</th>
                                                        <th className="border-bottom p-3">Email</th>
                                                        <th className="border-bottom p-3">Role</th>
                                                        <th className="border-bottom p-3">Email Verified</th>
                                                        <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users?.map((user, index) => (
                                                        <tr key={user.id}>
                                                            <td className="p-3 white-space-wrap-none">{index + 1}</td>
                                                            <td className="py-3 white-space-wrap-none">
                                                                <Link to="#/">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="ms-2">{user.name}</span>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="p-3 white-space-wrap-none">{user.email}</td>
                                                            <td className="p-3 white-space-wrap-none">{user.role}</td>
                                                            <td className="p-3 white-space-wrap-none">
                                                                {
                                                                    user.isEmailVerified ?
                                                                        <span className="badge badge-success">Verified</span>
                                                                        :
                                                                        <span className="badge badge-danger">Not Verified</span>
                                                                }
                                                            </td>
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
            <UserModal show={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default UsersTable