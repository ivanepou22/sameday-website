import React from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Table = (props) => {
  const { data } = props;
  return (
    <>
      <table className="table table-center bg-white mb-0">
        <thead>
          <tr>
            <th className="border-bottom p-3" style={{ minWidth: "50px" }}>
              Appointment Number
            </th>
            <th className="border-bottom p-3" style={{ minWidth: "180px" }}>
              Full Name
            </th>
            <th className="border-bottom p-3">Age</th>
            <th className="border-bottom p-3">Gender</th>
            <th className="border-bottom p-3">Address</th>
            <th className="border-bottom p-3">Phone</th>
            <th className="border-bottom p-3">Department</th>
            <th className="border-bottom p-3" style={{ minWidth: "150px" }}>
              Date
            </th>
            <th className="border-bottom p-3">Time</th>
            <th className="border-bottom p-3">Status</th>
            <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ap) => (
            <tr key={ap.id}>
              <th className="p-3">{ap.appNumber}</th>
              <td className="py-3">
                <Link to="patients.html#" className="text-dark">
                  <div className="d-flex align-items-center">
                    <span className="ms-2">{ap.patient.name}</span>
                  </div>
                </Link>
              </td>
              <td className="p-3">{ap.patient.age || 20}</td>
              <td className="p-3">Female</td>
              <td className="p-3">{ap.patient.address}</td>
              <td className="p-3">{ap.phone}</td>
              <td className="p-3">{ap.department}</td>
              <td className="p-3">{new Date(ap.date).toDateString()}</td>
              <td className="p-3">{ap.time}</td>
              <td className="p-3">
                <span className="badge bg-soft-warning">Pending</span>
              </td>
              <td className="text-end p-3">
                <Link
                  to="patients.html#"
                  className="btn btn-icon btn-pills btn-soft-primary my-1"
                  data-bs-toggle="modal"
                  data-bs-target="#viewprofile"
                >
                  <AiOutlineEye />
                </Link>
                <Link
                  to="patients.html#"
                  className="btn btn-icon btn-pills btn-soft-success my-1"
                  data-bs-toggle="modal"
                  data-bs-target="#editprofile"
                >
                  <FaRegEdit />
                </Link>
                <Link to="patients.html#" className="btn btn-icon btn-pills btn-soft-danger">
                  <AiOutlineDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
