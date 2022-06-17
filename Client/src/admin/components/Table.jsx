/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Table = (props) => {
  const { data } = props;
  console.log(data)

  //calculate the number of days between two dates
  const getDays = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const diff = date1 - date2;
    return (diff / (1000 * 60 * 60 * 24));
  }

  return (
    <>
      <table className="table table-center bg-white mb-0">
        <thead>
          <tr>
            <th className="border-bottom p-3">No.</th>
            <th className="border-bottom p-3" style={{ minWidth: "50px" }}>
              Number
            </th>
            <th className="border-bottom p-3" style={{ minWidth: "180px" }}>
              Patient Name
            </th>
            <th className="border-bottom p-3">Age</th>
            <th className="border-bottom p-3">Phone</th>
            <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ap, index) => (
            <tr key={ap.id}>
              <td className="p-3 white-space-wrap-none">{index + 1}</td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">
                    {ap?.appNumber}
                  </div>
                </Link>
              </td>
              <td className="p-3 white-space-wrap-none">
                <Link to="#/">
                  <div className="d-flex align-items-center">
                    {ap.patient?.name}
                  </div>
                </Link>
              </td>
              <td className="p-3 white-space-wrap-none">{ap?.age || 20}</td>
              <td className="p-3 white-space-wrap-none">{ap?.phone}</td>
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
    </>
  );
};

export default Table;
