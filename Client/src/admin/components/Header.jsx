import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

//imgae
import img1 from '../../assets/images/client/02.jpg'
import img4 from '../../assets/images/doctors/01.jpg'

const Header = ({ handleToggle }) => {
    const [openProfile, setOpenProfile] = React.useState(false)

    const handleOpenProfile = () => {
        setOpenProfile(!openProfile)
    }

    return (
        <>
            <div className="top-header font-size-15">
                <div className="header-bar d-flex justify-content-between border-bottom">
                    <div className="d-flex align-items-center">
                        <Link id="close-sidebar" onClick={handleToggle} className="btn btn-icon btn-pills btn-soft-primary ms-2" to="#">
                            <FaBars className="uil uil-bars"></FaBars>
                        </Link>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mb-0 ms-1">
                            <Link to="/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="btn btn-icon btn-pills btn-soft-primary"><FiSettings data-feather="settings" className="fea icon-sm"></FiSettings></div>
                            </Link>
                        </li>

                        <li className="list-inline-item mb-0 ms-1">
                            <div className="dropdown dropdown-primary">
                                <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaRegEnvelope data-feather="mail" className="fea icon-sm"></FaRegEnvelope></button>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">4 <span className="visually-hidden">unread mail</span></span>

                                <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 px-2 py-2" data-simplebar style={{ height: '320px', width: '300px' }}>
                                    <Link to="#" className="d-flex align-items-center justify-content-between py-2">
                                        <div className="d-inline-flex position-relative overflow-hidden">
                                            <img src={img1} className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                            <small className="text-dark mb-0 d-block text-truncat ms-3">You received a new email from <b>Janalia</b> <small className="text-muted fw-normal d-inline-block">1 hour ago</small></small>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="list-inline-item mb-0 ms-1">
                            <div className="dropdown dropdown-primary">
                                <button type="button" onClick={handleOpenProfile} className={`btn btn-pills btn-soft-primary dropdown-toggle p-0 ${openProfile ? 'show' : ''}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={openProfile}>
                                    <img src={img4} className="avatar avatar-ex-small rounded-circle" alt="" /></button>
                                <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${openProfile ? 'profile-width show' : ''}`} style={{ minWidth: '200px' }}>
                                    <Link className="dropdown-item d-flex align-items-center text-dark" to="https://shreethemes.in/doctris/layouts/admin/profile.html">
                                        <img src={img4} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                        <div className="flex-1 ms-2">
                                            <span className="d-block mb-1">Calvin Carlo</span>
                                            <small className="text-muted">Orthopedic</small>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item text-dark" to="index.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-dashboard align-middle h6"></i></span> Dashboard</Link>
                                    <Link className="dropdown-item text-dark" to="dr-profile.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</Link>
                                    <div className="dropdown-divider border-top"></div>
                                    <Link className="dropdown-item text-dark" to="https://shreethemes.in/doctris/layouts/admin/lock-screen.html"><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6"></i></span> Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header