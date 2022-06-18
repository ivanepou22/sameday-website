/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteVisit } from "../../feautures/visit/visitSlice";
import moment from "moment";

const Table = (props) => {
  const { appointments } = props;
  const dispatch = useDispatch()

  console.log(appointments);
  return (
    <>
      <table className="table table-center bg-white mb-0">
        <thead>
          <tr>
            <th className="border-bottom p-3">No.</th>
            <th className="border-bottom p-3">Number</th>
            <th className="border-bottom p-3">Date</th>
            <th className="border-bottom p-3">Time</th>
            <th className="border-bottom p-3">Patient</th>
            <th className="border-bottom p-3">Email</th>
            <th className="border-bottom p-3">Phone</th>
            <th className="border-bottom p-3">Doctor</th>
            <th className="border-bottom p-3">Comment</th>
            <th className="border-bottom p-3">Section</th>
            <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((ap, index) => (
            <tr key={ap.id}>
              <td className="p-3 white-space-wrap-none">{index + 1}</td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">{ap.appNumber}</div>
                </Link>
              </td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">{moment(ap.date).format('DD-MM-YYYY')}</div>
                </Link>
              </td>
              <td className="p-2 white-space-wrap-none">{ap.time}</td>
              <td className="p-2 white-space-wrap-none">{ap?.patient.name}</td>
              <td className="p-2 white-space-wrap-none">{ap?.email}</td>
              <td className="p-2 white-space-wrap-none">{ap?.phone}</td>
              <td className="p-2 white-space-wrap-none">{ap?.doctor.full_name}</td>
              <td className="p-2">{ap?.comment}</td>
              <td className="p-2 white-space-wrap-none">{ap?.department}</td>
              <td className="text-end p-2 white-space-wrap-none">
                <Link to="#/" className="btn btn-icon btn-pills btn-soft-primary my-1">
                  <AiOutlineEye />
                </Link>
                <Link to="#/" className="btn btn-icon btn-pills btn-soft-success my-1 mx-2">
                  <FaRegEdit />
                </Link>
                <Link
                  onClick={() => dispatch(deleteVisit(ap.id))}
                  to="#/" className="btn btn-icon btn-pills btn-soft-danger">
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
