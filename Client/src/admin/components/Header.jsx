import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { authSelector } from "../../feautures/auth/authSlice";
import { FaBars } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import Avatar from "react-avatar";


const Header = ({ handleToggle }) => {
    const [openProfile, setOpenProfile] = React.useState(false)
    const { user } = useSelector(authSelector)

    const handleOpenProfile = () => {
        setOpenProfile(!openProfile)
    }

    return (
        <>
            <div className="top-header font-size-15">
                <div className="header-bar d-flex justify-content-between border-bottom">
                    <div className="d-flex align-items-center">
                        <Link id="close-sidebar" onClick={handleToggle} className="btn btn-icon btn-pills btn-soft-primary ms-2" to="#/">
                            <FaBars className="uil uil-bars"></FaBars>
                        </Link>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mb-0 ms-1">
                            <Link to="#/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="btn btn-icon btn-pills btn-soft-primary"><FiSettings data-feather="settings" className="fea icon-sm"></FiSettings></div>
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0 ms-1">
                            <div className="dropdown dropdown-primary">
                                <button type="button" onClick={handleOpenProfile} className={`btn btn-pills  dropdown-toggle p-0 ${openProfile ? 'show' : ''}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={openProfile}>
                                    <Avatar
                                        className="avatar avatar-md-sm rounded-circle border shadow"
                                        name={user.name}
                                        size="40"
                                        round={true}
                                        color={"#F46524"}
                                    />
                                </button>
                                <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${openProfile ? 'profile-width show' : ''}`} style={{ minWidth: '200px' }}>
                                    <Link className="dropdown-item d-flex align-items-center text-dark" to="#/">
                                        <Avatar
                                            className="avatar avatar-md-sm rounded-circle border shadow"
                                            name={user.name}
                                            size="40"
                                            round={true}
                                            color={"#F46524"}
                                        />
                                        <div className="flex-1 ms-2">
                                            <span className="d-block mb-1">{user?.name}</span>
                                            <small className="text-muted">{user?.email}</small>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item text-dark" to="#/"><span className="mb-0 d-inline-block me-1"><i className="uil uil-dashboard align-middle h6"></i></span> Dashboard</Link>
                                    <Link className="dropdown-item text-dark" to="#/"><span className="mb-0 d-inline-block me-1"><i className="uil uil-setting align-middle h6"></i></span> Profile Settings</Link>
                                    <div className="dropdown-divider border-top"></div>
                                    <Link className="dropdown-item text-dark" to="#/"><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6"></i></span> Logout</Link>
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