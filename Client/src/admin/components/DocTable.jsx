import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';


const DocTable = (props) => {
  const { doctors, isLoading } = props;
  return (
    <>
      <div className="row row-cols-md-2 row-cols-lg-5">
        {!isLoading &&
          <table className="table table-center bg-white mb-0">
            <thead>
              <tr>
                <th className="border-bottom p-3">No.</th>
                <th className="border-bottom p-3">Full Name</th>
                <th className="border-bottom p-3">Email</th>
                <th className="border-bottom p-3">Phone</th>
                <th className="border-bottom p-3">Specialty</th>
                <th className="border-bottom p-3">Image</th>
                <th className="border-bottom p-3" style={{ minWidth: "100px" }}></th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <tr key={doctor.id}>
                  <td className="p-3 white-space-wrap-none">{index + 1}</td>
                  <td className="py-3 white-space-wrap-none">
                    <Link to="#/">
                      <div className="d-flex align-items-center">
                        <span className="ms-2">{doctor.full_name}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-3 white-space-wrap-none">{doctor.email}</td>
                  <td className="p-3 white-space-wrap-none">{doctor.phone_number}</td>
                  <td className="p-3 white-space-wrap-none">{doctor.specialities[0]}</td>
                  <td className="p-3 white-space-wrap-none"><img src={doctor.image} alt='Doctor' height={12} className="avatar avatar-ex-small rounded-circle" /></td>
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
        }
      </div>
    </>
  );
};

export default DocTable;
