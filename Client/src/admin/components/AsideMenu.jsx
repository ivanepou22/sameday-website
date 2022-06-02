import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/Sameday-original.png'

//icons
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaStethoscope } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import { RiWheelchairLine } from 'react-icons/ri'
import { FiShoppingCart, FiGlobe } from 'react-icons/fi'


//css
import '../../assets/css/simplebar.css'
import '../../assets/css/select2.min.css'
import '../../assets/css/style.min.css'

const AsideMenu = () => {
    const [openDoctor, setOpenDoctor] = React.useState(false)
    const [openPatient, setOpenPatient] = React.useState(false)
    const [openServices, setOpenServices] = React.useState(false)
    const [openBlog, setOpenBlog] = React.useState(false)

    const [doctorActive, setDoctorActive] = React.useState(false)
    const [patientActive, setPatientActive] = React.useState(false)
    const [servicesActive, setServicesActive] = React.useState(false)
    const [blogActive, setBlogActive] = React.useState(false)
    const [dashboardActive, setDashboardActive] = React.useState(false)
    const [appointmentActive, setAppointmentActive] = React.useState(false)

    const handleOpenDoctor = () => {
        setOpenDoctor(!openDoctor)
        setDoctorActive(true);
        setPatientActive(false);
        setServicesActive(false);
        setBlogActive(false);
        setDashboardActive(false);
        setAppointmentActive(false);
    }

    const handleOpenPatient = () => {
        setOpenPatient(!openPatient)
        setDoctorActive(false);
        setPatientActive(true);
        setServicesActive(false);
        setBlogActive(false);
        setDashboardActive(false);
        setAppointmentActive(false);
    }

    const handleOpenServices = () => {
        setOpenServices(!openServices)
        setDoctorActive(false);
        setPatientActive(false);
        setServicesActive(true);
        setBlogActive(false);
        setDashboardActive(false);
        setAppointmentActive(false);
    }

    const handleOpenBlog = () => {
        setOpenBlog(!openBlog)
        setDoctorActive(false);
        setPatientActive(false);
        setServicesActive(false);
        setBlogActive(true);
        setDashboardActive(false);
        setAppointmentActive(false);
    }

    const handleOpenDashboard = () => {
        setDoctorActive(false);
        setPatientActive(false);
        setServicesActive(false);
        setBlogActive(false);
        setDashboardActive(true);
        setAppointmentActive(false);
    }

    const handleOpenAppointment = () => {
        setDoctorActive(false);
        setPatientActive(false);
        setServicesActive(false);
        setBlogActive(false);
        setDashboardActive(false);
        setAppointmentActive(true);
    }

    return (
        <>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content" data-simplebar style={{ height: 'calc(100% - 60px)' }}>
                    <div className="sidebar-brand">
                        <Link to="/admin/dashboard">
                            <img src={img1} height="24" className="logo-light-mode" alt="" />
                        </Link>
                    </div>

                    <ul className="sidebar-menu pt-3">
                        <li className={`${dashboardActive ? 'active' : ''}`}><Link to="/admin/dashboard" onClick={handleOpenDashboard}><AiOutlineDashboard className="uil uil-dashboard me-2 d-inline-block"></AiOutlineDashboard>Dashboard</Link></li>
                        <div className="dropdown-divider border-top"></div>
                        <li className={`${appointmentActive ? 'active' : ''}`} ><Link to="/admin/appointments" onClick={handleOpenAppointment}><FaStethoscope className="uil uil-stethoscope me-2 d-inline-block"></FaStethoscope>Appointments</Link></li>
                        <div className="dropdown-divider border-top"></div>
                        <li className={`sidebar-dropdown ${doctorActive ? 'active' : ''}`}>
                            <Link to="#/" onClick={handleOpenDoctor} ><HiOutlineUsers className="uil uil-user me-2 d-inline-block"></HiOutlineUsers>Doctors</Link>
                            <div className={`sidebar-submenu ${openDoctor ? 'd-block' : ''}`}>
                                <ul>
                                    <li><Link onClick={handleOpenDoctor} to="/admin/doctors"> Doctors</Link></li>
                                </ul>
                            </div>
                        </li>
                        <div className="dropdown-divider border-top"></div>
                        <li className={`sidebar-dropdown ${patientActive ? 'active' : ''}`}>
                            <Link to="#/" onClick={handleOpenPatient} ><RiWheelchairLine className="uil uil-wheelchair me-2 d-inline-block"></RiWheelchairLine>Patients</Link>
                            <div className={`sidebar-submenu ${openPatient ? 'd-block' : ''}`}>
                                <ul>
                                    <li><Link onClick={handleOpenPatient} to="/admin/patients"> All Patients</Link></li>
                                    <li><Link onClick={handleOpenPatient} to="/admin/patient-visits"> Patient Visits</Link></li>
                                    <li><Link onClick={handleOpenPatient} to="/admin/patient-logs"> Patient Logs</Link></li>
                                </ul>
                            </div>
                        </li>
                        <div className="dropdown-divider border-top"></div>
                        <li className={`sidebar-dropdown ${servicesActive ? 'active' : ''}`}>
                            <Link to="#/" onClick={handleOpenServices} ><FiShoppingCart className="uil uil-shopping-cart me-2 d-inline-block"></FiShoppingCart>Services</Link>
                            <div className={`sidebar-submenu ${openServices ? 'd-block' : ''}`}>
                                <ul>
                                    <li><Link onClick={handleOpenServices} to="/admin/services"> Services</Link></li>
                                    <li><Link onClick={handleOpenServices} to="/admin/orders"> Orders</Link></li>
                                </ul>
                            </div>
                        </li>
                        <div className="dropdown-divider border-top"></div>
                        <li className={`sidebar-dropdown ${blogActive ? 'active' : ''}`}>
                            <Link to="#/" onClick={handleOpenBlog} ><FiGlobe className="uil uil-flip-h me-2 d-inline-block"></FiGlobe>Blogs</Link>
                            <div className={`sidebar-submenu ${openBlog ? 'd-block' : ''}`}>
                                <ul>
                                    <li><Link onClick={handleOpenBlog} to="/">  Blogs</Link></li>
                                    <li><Link onClick={handleOpenBlog} to="/">  Blog Detail</Link></li>
                                </ul>
                            </div>
                        </li>
                        <div className="dropdown-divider border-top"></div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default AsideMenu