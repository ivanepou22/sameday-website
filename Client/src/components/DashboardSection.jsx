import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { BsListTask } from 'react-icons/bs'
import { RiFileUserLine } from 'react-icons/ri'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { authSelector } from '../feautures/auth/authSlice';
import Avatar from 'react-avatar';
import { appointmentSelector, fetchAppointments } from '../feautures/appointment/appointmentSlice';
import moment from 'moment';


const DashboardSection = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector)
    const { appointments } = useSelector(appointmentSelector)
    const [dashboard, setDashboard] = React.useState(true);
    const [showOrders, setShowOrders] = React.useState(false);
    const [showAppointments, setShowAppointments] = React.useState(false);
    const [showVisits, setShowVisits] = React.useState(false);
    const [showAddress, setShowAddress] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);

    const handleDashboard = () => {
        setDashboard(true);
        setShowOrders(false);
        setShowAppointments(false);
        setShowVisits(false);
        setShowAddress(false);
        setShowProfile(false);
    }

    const handleOrders = () => {
        setDashboard(false);
        setShowOrders(true);
        setShowAppointments(false);
        setShowVisits(false);
        setShowAddress(false);
        setShowProfile(false);
    }

    const handleAppointments = () => {
        setDashboard(false);
        setShowOrders(false);
        setShowAppointments(true);
        setShowVisits(false);
        setShowAddress(false);
        setShowProfile(false);
    }

    const handleVisits = () => {
        setDashboard(false);
        setShowOrders(false);
        setShowAppointments(false);
        setShowVisits(true);
        setShowAddress(false);
        setShowProfile(false);
    }

    const handleAddress = () => {
        setDashboard(false);
        setShowOrders(false);
        setShowAppointments(false);
        setShowVisits(false);
        setShowAddress(true);
        setShowProfile(false);
    }

    const handleProfile = () => {
        setDashboard(false);
        setShowOrders(false);
        setShowAppointments(false);
        setShowVisits(false);
        setShowAddress(false);
        setShowProfile(true);
    }

    useEffect(() => {
        dispatch(fetchAppointments())
    }, [dispatch])

    //filter appointments by patient
    const filteredAppointments = appointments?.filter(appointment => appointment.patient === user.id);

    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <Avatar className="avatar avatar-md-sm rounded-circle border shadow" name={user.name} size="70" round={true} color={'#F46524'} />
                                <div className="ms-3">
                                    <h6 className="text-muted mb-0">Hello,</h6>
                                    <h5 className="mb-0">{user.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mt-4 pt-2">
                            <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <Link to={'#dashboard'} onClick={handleDashboard} className={`nav-link rounded ${dashboard ? 'active' : ''}`} id="dashboard" data-bs-toggle="pill" href="#dash" role="tab" aria-controls="dash" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><AiOutlineDashboard className="uil uil-list-ul h5 align-middle me-2 mb-0" /> Dashboard</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-2">
                                    <Link to={'#orders'} onClick={handleOrders} className={`nav-link rounded ${showOrders ? 'active' : ''}`} id="order-history" data-bs-toggle="pill" href="#orders" role="tab" aria-controls="orders" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><BsListTask className="uil uil-list-ul h5 align-middle me-2 mb-0"></BsListTask> Orders</h6>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item mt-2">
                                    <Link to={'#appointments'} onClick={handleAppointments} className={`nav-link rounded ${showAppointments ? 'active' : ''}`} id="order-history" data-bs-toggle="pill" href="#orders" role="tab" aria-controls="orders" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><AiOutlineCalendar className="uil uil-list-ul h5 align-middle me-2 mb-0"></AiOutlineCalendar> Appointments</h6>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item mt-2">
                                    <Link to={'#visits'} onClick={handleVisits} className={`nav-link rounded ${showVisits ? 'active' : ''}`} id="order-history" data-bs-toggle="pill" href="#orders" role="tab" aria-controls="orders" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><RiFileUserLine className="uil uil-list-ul h5 align-middle me-2 mb-0"></RiFileUserLine> Patient Visits</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-2">
                                    <Link to={'#address'} onClick={handleAddress} className={`nav-link rounded ${showAddress ? 'active' : ''}`} id="addresses" data-bs-toggle="pill" href="#address" role="tab" aria-controls="address" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><HiOutlineLocationMarker className="uil uil-map-marker h5 align-middle me-2 mb-0"></HiOutlineLocationMarker> Addresses</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-2">
                                    <Link to="#account" onClick={handleProfile} className={`nav-link rounded ${showProfile ? 'active' : ''}`} id="account-details" data-bs-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="false">
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0"><FiUser className="uil uil-user h5 align-middle me-2 mb-0"></FiUser> Account Details</h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-8 col-12 mt-4 pt-2">
                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${dashboard ? 'active show' : ''}`} id="dash" role="tabpanel" aria-labelledby="dashboard">
                                    <p className="text-muted">Hello <span className="text-dark">{user.name}</span> (not <span className="text-dark fw-bold">{user.name}</span>? <Link to="#" className="text-danger fw-bold">Log out</Link>)</p>

                                    <p className="text-muted mb-0">From your account dashboard you can view your <Link to="#/" onClick={handleOrders} className="text-danger fw-bold">recent orders</Link>, manage your <Link to="#/" onClick={handleProfile} className="text-danger fw-bold">your password and account details</Link>.</p>
                                </div>

                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${showOrders ? 'active show' : ''}`} id="orders" role="tabpanel" aria-labelledby="order-history">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3" scope="col">Order no.</th>
                                                    <th className="border-bottom p-3" scope="col">Date</th>
                                                    <th className="border-bottom p-3" scope="col">Status</th>
                                                    <th className="border-bottom p-3" scope="col">Total</th>
                                                    <th className="border-bottom p-3" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3">7107</td>
                                                    <td className="p-3">1st November 2020</td>
                                                    <td className="text-success p-3">Delivered</td>
                                                    <td className="p-3">$ 320 <span className="text-muted">for 2items</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8007</td>
                                                    <td className="p-3">4td November 2020</td>
                                                    <td className="text-muted p-3">Processing</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8008</td>
                                                    <td className="p-3">4th November 2020</td>
                                                    <td className="text-danger p-3">Canceled</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* Second Table here */}

                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${showAppointments ? 'active show' : ''}`} id="appointments" role="tabpanel" aria-labelledby="order-history">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Appoint no.</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Date</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Time</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Dept</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Doctor</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Comment</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Email</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Phone</th>
                                                    <th className="border-bottom p-3 white-space-wrap-none" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredAppointments?.map(appointment => (
                                                    <tr key={appointment.id}>
                                                        <td className="p-3 white-space-wrap-none">{appointment.id}</td>
                                                        <td className="p-3 white-space-wrap-none">{moment(appointment.date).format('DD/MM/YYYY')}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.time}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.department}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.doctor}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.comment}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.email}</td>
                                                        <td className="p-3 white-space-wrap-none">{appointment.phone}</td>
                                                        <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${showVisits ? 'active show' : ''}`} id="visits" role="tabpanel" aria-labelledby="order-history">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center table-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3" scope="col">Visit no.</th>
                                                    <th className="border-bottom p-3" scope="col">Date</th>
                                                    <th className="border-bottom p-3" scope="col">Status</th>
                                                    <th className="border-bottom p-3" scope="col">Total</th>
                                                    <th className="border-bottom p-3" scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="p-3">7107</td>
                                                    <td className="p-3">1st November 2020</td>
                                                    <td className="text-success p-3">Delivered</td>
                                                    <td className="p-3">$ 320 <span className="text-muted">for 2items</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8007</td>
                                                    <td className="p-3">4td November 2020</td>
                                                    <td className="text-muted p-3">Processing</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">8008</td>
                                                    <td className="p-3">4th November 2020</td>
                                                    <td className="text-danger p-3">Canceled</td>
                                                    <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                                    <td className="p-3"><Link to="#" className="text-primary">View <i className="uil uil-arrow-right"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${showAddress ? 'active show' : ''}`} id="address" role="tabpanel" aria-labelledby="addresses">
                                    <h6 className="text-muted mb-0">The following addresses will be used on the checkout page by default.</h6>

                                    <div className="row">
                                        <div className="col-lg-6 mt-4 pt-2">
                                            <div className="d-flex align-items-center mb-4 justify-content-between">
                                                <h5 className="mb-0">Billing Address:</h5>
                                                <Link to="#" className="text-primary h5 mb-0" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="uil uil-edit align-middle"></i></Link>
                                            </div>
                                            <div className="pt-4 border-top">
                                                <p className="h6">Cally Joseph</p>
                                                <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                                <p className="text-muted mb-0">Suite 558,</p>
                                                <p className="text-muted mb-0">Houston, USA 485</p>
                                                <p className="text-muted mb-0">+123 897 5468</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mt-4 pt-2">
                                            <div className="d-flex align-items-center mb-4 justify-content-between">
                                                <h5 className="mb-0">Shipping Address:</h5>
                                                <Link to="#" className="text-primary h5 mb-0" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="uil uil-edit align-middle"></i></Link>
                                            </div>
                                            <div className="pt-4 border-top">
                                                <p className="h6">Cally Joseph</p>
                                                <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                                <p className="text-muted mb-0">Suite 558,</p>
                                                <p className="text-muted mb-0">Houston, USA 485</p>
                                                <p className="text-muted mb-0">+123 897 5468</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className={`tab-pane fade bg-white shadow rounded p-4 ${showProfile ? 'active show' : ''}`} id="account" role="tabpanel" aria-labelledby="account-details">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input name="name" id="first-name" type="text" className="form-control" defaultValue={user.name.split(" ")[0]} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input name="name" id="last-name" type="text" className="form-control" defaultValue={user.name.split(" ")[1]} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email</label>
                                                    <input name="email" id="email" type="email" className="form-control" defaultValue={user.email} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Display Name</label>
                                                    <input name="name" id="display-name" type="text" className="form-control" defaultValue={user.name} />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mt-2 mb-0">
                                                <button className="btn btn-primary">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>

                                    <h5 className="mt-4">Change password :</h5>
                                    <form>
                                        <div className="row mt-3">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Old password :</label>
                                                    <input type="password" className="form-control" placeholder="Old password" required="" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">New password :</label>
                                                    <input type="password" className="form-control" placeholder="New password" required="" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Re-type New password :</label>
                                                    <input type="password" className="form-control" placeholder="Re-type New password" required="" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 mt-2 mb-0">
                                                <button className="btn btn-primary">Save Password</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardSection