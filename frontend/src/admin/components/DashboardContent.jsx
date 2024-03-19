import React from 'react'
import { RiHotelBedLine, RiFirstAidKitLine, RiServiceLine } from 'react-icons/ri'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { FaAmbulance, FaRegListAlt } from 'react-icons/fa'
import { CgUserList } from 'react-icons/cg'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { doctorSelector, getDoctors } from "../../feautures/doctor/doctorSlice";
import { useEffect } from 'react';
import { appointmentSelector, fetchAppointments } from "../../feautures/appointment/appointmentSlice";
import { serviceSelector, getServices } from '../../feautures/services/serviceSlice';
import { ordersSelector, getOrders } from '../../feautures/orders/ordersSlice';
import { userSelector, fetchUsers } from '../../feautures/user/userSlice';
import { fetchLogs, logsSelector } from "../../feautures/log/logSlice";
import { getVisits, visitSelector } from "../../feautures/visit/visitSlice";
import { Link } from 'react-router-dom'
import DashChart from './DashChart'

const DashboardContent = () => {
    const dispatch = useDispatch();
    const { doctors } = useSelector(doctorSelector);
    const { appointments } = useSelector(appointmentSelector);
    const { services } = useSelector(serviceSelector);
    const { orders } = useSelector(ordersSelector);
    const { users } = useSelector(userSelector);
    const { logs } = useSelector(logsSelector);
    const { visits } = useSelector(visitSelector);

    useEffect(() => {
        dispatch(getDoctors());
        dispatch(fetchAppointments());
        dispatch(getServices());
        dispatch(getOrders());
        dispatch(fetchUsers());
        dispatch(fetchLogs());
        dispatch(getVisits());
    }
        , [dispatch]);

    //get patients
    const patientList = users.filter(user => user.role === 'user');

    return (
        <>
            <div className="container-fluid font-size-15">
                <div className="layout-specing">
                    <h5 className="mb-0">Dashboard</h5>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/patients">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <RiHotelBedLine className="uil uil-bed h3 mb-0"></RiHotelBedLine>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {patientList?.length?.toLocaleString('en-US', {
                                                    maximumFractionDigits: 2,
                                                    minimumFractionDigits: 2
                                                })}
                                            </h5>
                                            <p className="text-muted mb-0">Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/doctors">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <HiOutlineUserGroup className="uil uil-social-distancing h3 mb-0"></HiOutlineUserGroup>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {doctors?.length?.toLocaleString('en-US', {
                                                    maximumFractionDigits: 2,
                                                    minimumFractionDigits: 2
                                                })}
                                            </h5>
                                            <p className="text-muted mb-0">Doctors</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/patient-visits">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <FaAmbulance className="uil uil-ambulance h3 mb-0"></FaAmbulance>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    visits?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })
                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Patient Visits</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/appointments">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <RiFirstAidKitLine className="uil uil-medkit h3 mb-0"></RiFirstAidKitLine>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    appointments?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })
                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Appointments</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/users">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <AiOutlineUsergroupAdd className="uil uil-medkit h3 mb-0"></AiOutlineUsergroupAdd>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    users?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })

                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Users</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/patient-logs">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <CgUserList className="uil uil-medkit h3 mb-0"></CgUserList>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    logs?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })

                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Patient Logs</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/services">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <RiServiceLine className="uil uil-medkit h3 mb-0"></RiServiceLine>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    services?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })
                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Services</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                            <Link to="/admin/orders">
                                <div className="card features feature-primary rounded border-0 shadow p-4">
                                    <div className="d-flex align-items-center">
                                        <div className="icon text-center rounded-md">
                                            <FaRegListAlt className="uil uil-medkit h3 mb-0"></FaRegListAlt>
                                        </div>
                                        <div className="flex-1 ms-2">
                                            <h5 className="mb-0">
                                                {
                                                    orders?.length?.toLocaleString('en-US', {
                                                        maximumFractionDigits: 2,
                                                        minimumFractionDigits: 2
                                                    })
                                                }
                                            </h5>
                                            <p className="text-muted mb-0">Orders</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-7 mt-4">
                            <div className="card shadow border-0 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="align-items-center mb-0">Patients visit by Gender</h6>

                                    <div className="mb-0 position-relative">
                                        <select className="form-select form-control" id="yearchart">
                                            <option defaultValue="2019">2020</option>
                                            <option defaultValue="2019">2019</option>
                                            <option defaultValue="2018">2018</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="dashboard" className="apex-chart">
                                    <DashChart />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 mt-4">
                            <div className="card shadow border-0 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="align-items-center mb-0">Patients by Department</h6>

                                    <div className="mb-0 position-relative">
                                        <select className="form-select form-control" id="dailychart">
                                            <option defaultValue={`Today`}>Today</option>
                                            <option defaultValue="2019">Yesterday</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="department" className="apex-chart">
                                    <DashChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContent