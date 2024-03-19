import React from 'react'
import { Link } from 'react-router-dom';
import { RiAddLine } from 'react-icons/ri'
import ServicesModal from './ServicesModal';
import { useDispatch, useSelector } from 'react-redux';
import { serviceSelector, getServices } from '../../feautures/services/serviceSlice';
import { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

const ServiceTable = () => {
    const dispatch = useDispatch();
    const { isLoading, services, limit, totalPages, totalResults } = useSelector(serviceSelector);
    const [showModal, setShowModal] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handlePageChange = (page) => {
        if (page < 1) {
            setPage(1);
        } else if (page > totalPages) {
            setPage(totalPages);
        } else {
            setPage(page);
        }
    };

    useEffect(() => {
        dispatch(getServices(page));
    }, [dispatch, page]);

    return (
        <>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="row">
                        <div className="col-xl-9 col-md-6">
                            <h5 className="mb-0">Services</h5>
                            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><a href="/admin/dashboard">SameDay Lab Works</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
                            <Link to={`#/`} onClick={handleShowModal} className="btn btn-primary"><RiAddLine /> Add Service</Link>
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
                                                        <th className="border-bottom p-3">Category</th>
                                                        <th className="border-bottom p-3">Niche</th>
                                                        <th className="border-bottom p-3">Duration</th>
                                                        <th className="border-bottom p-3">Price</th>
                                                        <th className="border-bottom p-3">Image</th>
                                                        <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {services?.map((service, index) => (
                                                        <tr key={service.id}>
                                                            <td className="p-3 white-space-wrap-none">{index + 1}</td>
                                                            <td className="py-3 white-space-wrap-none">
                                                                <Link to="#/">
                                                                    <div className="d-flex align-items-center">
                                                                        <span className="ms-2">{service.name}</span>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="p-3 white-space-wrap-none">{service.category}</td>
                                                            <td className="p-3 white-space-wrap-none">{service.niche}</td>
                                                            <td className="p-3 white-space-wrap-none">{service.duration} hr(s)</td>
                                                            <td className="p-3 white-space-wrap-none">
                                                                {
                                                                    service.price?.toLocaleString('en-US', {
                                                                        style: 'currency',
                                                                        currency: 'UGX',
                                                                        maximumFractionDigits: 2,
                                                                    })
                                                                }
                                                            </td>
                                                            <td className="p-3 white-space-wrap-none"><img src={service.image} alt='Doctor' height={12} className="avatar avatar-ex-small rounded-circle" /></td>
                                                            <td className="text-end p-3 white-space-wrap-none">
                                                                <Link
                                                                    to="#/"
                                                                    className="btn btn-icon btn-pills btn-soft-primary my-1"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#viewprofile"
                                                                >
                                                                    <AiOutlineEye />
                                                                </Link>
                                                                <Link
                                                                    to="#/"
                                                                    className="btn btn-icon btn-pills btn-soft-success my-1 mx-2"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#editprofile"
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
            <ServicesModal show={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default ServiceTable