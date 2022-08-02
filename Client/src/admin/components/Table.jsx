/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import moment from "moment";

const Table = (props) => {
  const { data } = props;
  const dispatch = useDispatch()

  console.log(data);
  // TODO: FIX PATIENTS
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
          {
          // ?.filter(u => u.role === "user")
          data?.map((ap, index) => (
            <tr key={ap.id}>
              <td className="p-3 white-space-wrap-none">{index + 1}</td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">{ap?.appNumber}</div>
                </Link>
              </td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">{moment(ap?.date).format('DD-MM-YYYY')}</div>
                </Link>
              </td>
              <td className="p-2 white-space-wrap-none" titile={ap?.time}>{ap?.time}</td>
              <td className="p-2 white-space-wrap-none" title={ap?.patient?.name}>{ap?.patient?.name}</td>
              <td className="p-2 white-space-wrap-none" title={ap?.email} >{ap?.email?.length > 10 ? ap?.email.substring(0, 10) + '...' : ap?.email}</td>
              <td className="p-2 white-space-wrap-none" title={ap?.phone}>{ap?.phone}</td>
              <td className="p-2 white-space-wrap-none" title={ap?.doctor?.full_name}>{ap?.doctor?.full_name}</td>
              <td className="p-2">{ap?.comment?.length > 20 ? ap?.comment.substring(0, 20) + '...' : ap?.comment}</td>
              <td className="p-2 white-space-wrap-none" title={ap?.department}>{ap?.department}</td>
              <td className="text-end p-2 white-space-wrap-none">
                <Link to="#/" className="btn btn-icon btn-pills btn-soft-primary my-1">
                  <AiOutlineEye />
                </Link>
                <Link to="#/" className="btn btn-icon btn-pills btn-soft-success my-1 mx-2">
                  <FaRegEdit />
                </Link>
                <Link
                title={`Delete ${ap?.appNumber}`}
                  onClick={() => dispatch(deleteAppointment(ap?.id))}
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
