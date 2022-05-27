import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

const Table = () => {
    return (
        <>
            <table className="table table-center bg-white mb-0">
                <thead>
                    <tr>
                        <th className="border-bottom p-3" style={{ minWidth: '50px' }}>Col 1</th>
                        <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Col 2</th>
                        <th className="border-bottom p-3">Col 3</th>
                        <th className="border-bottom p-3">Col 4</th>
                        <th className="border-bottom p-3">Col 5</th>
                        <th className="border-bottom p-3">Col 6</th>
                        <th className="border-bottom p-3">Col 7</th>
                        <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Col 8</th>
                        <th className="border-bottom p-3">Col 9</th>
                        <th className="border-bottom p-3">Col 10</th>
                        <th className="border-bottom p-3" style={{ minWidth: '100px' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="p-3">2</th>
                        <td className="py-3">
                            <Link to="patients.html#" className="text-dark">
                                <div className="d-flex align-items-center">
                                    <span className="ms-2">Wendy Filson</span>
                                </div>
                            </Link>
                        </td>
                        <td className="p-3">28</td>
                        <td className="p-3">Female</td>
                        <td className="p-3">1451 - ABC Street, NY</td>
                        <td className="p-3">(+452) 8945 4568</td>
                        <td className="p-3">Gynecology</td>
                        <td className="p-3">20th Dec 2020</td>
                        <td className="p-3">11:00AM</td>
                        <td className="p-3"><span className="badge bg-soft-warning">Pending</span></td>
                        <td className="text-end p-3">
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><AiOutlineEye /></Link>
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><FaRegEdit /></Link>
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineDelete /></Link>
                        </td>
                    </tr>

                    <tr>
                        <th className="p-3">3</th>
                        <td className="py-3">
                            <Link to="patients.html#" className="text-dark">
                                <div className="d-flex align-items-center">
                                    <span className="ms-2">Faye Bridger</span>
                                </div>
                            </Link>
                        </td>
                        <td className="p-3">28</td>
                        <td className="p-3">Female</td>
                        <td className="p-3">1451 - ABC Street, NY</td>
                        <td className="p-3">(+452) 8945 4568</td>
                        <td className="p-3">Psychotherapy</td>
                        <td className="p-3">20th Dec 2020</td>
                        <td className="p-3">11:00AM</td>
                        <td className="p-3"><span className="badge bg-soft-success">Approved</span></td>
                        <td className="text-end p-3">
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-primary" data-bs-toggle="modal" data-bs-target="#viewprofile"><AiOutlineEye /></Link>
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-success" data-bs-toggle="modal" data-bs-target="#editprofile"><FaRegEdit /></Link>
                            <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineDelete /></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table