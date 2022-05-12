import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { RiSearchLine } from 'react-icons/ri'
import { BiCog } from 'react-icons/bi'
import { GrDashboard } from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineLogout } from 'react-icons/ai'
// Logo
import same_day_logo from '../assets/images/Sameday-original.png'
import doc1 from '../assets/images/doctors/01.jpg';
// styles
import '../assets/css/custom.css'
import SearchModal from './SearchModal'
import Settings from './Settings'

const Header = () => {
    const [showSearchModal, setShowSearchModal] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);
    const [showSettings, setShowSettings] = React.useState(false);

    const handleCanvas = () => {
        setShowSearchModal(!showSearchModal);
    }
    const handleShowProfile = () => {
        setShowProfile(!showProfile);
    }
    const handleShowSettings = () => {
        setShowSettings(!showSettings);
    }

    return (
        <>
            <header id="topnav" className="navigation sticky z-index-100">
                {/* nav-sticky */}
                <div className="container">
                    <div>
                        <Link className="logo" to="index.html">
                            <span className="logo-light-mode">
                                <img src={same_day_logo} className="l-dark" height="34" alt="" />
                                <img src={same_day_logo} className="l-light" height="34" alt="" />
                            </span>
                            <img src={same_day_logo} height="34" className="logo-dark-mode" alt="" />
                        </Link>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link className="navbar-toggle" id="isToggle" to='#/'>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <ul className="dropdowns list-inline mb-0">
                        <li className="list-inline-item mb-0">
                            <Link to="#/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleShowSettings}>
                                <div className="btn btn-icon btn-pills btn-orange"><BiCog /></div>
                            </Link>
                        </li>

                        <li className="list-inline-item mb-0 ms-1">
                            <Link to="#/" className="btn btn-icon btn-pills btn-orange" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={handleCanvas}>
                                <RiSearchLine />
                            </Link>
                        </li>

                        <li className="list-inline-item mb-0 ms-1">
                            <div className="dropdown dropdown-primary">
                                <button type="button" className={`btn btn-pills dropdown-toggle p-0 border-orange ${showProfile ? 'show' : ''}`} onClick={handleShowProfile} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={showProfile}>
                                    <img src={doc1} className="avatar avatar-ex-small rounded-circle" alt="" />
                                </button>
                                <div className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${showProfile ? 'show profile-drop' : ''}`} style={{ minWidth: "200px" }}>
                                    <Link className="dropdown-item d-flex align-items-center text-dark" to="#/">
                                        <img src={doc1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                        <div className="flex-1 ms-2">
                                            <span className="d-block mb-1" onClick={() => setShowProfile(false)}>Calvin Carlo</span>
                                            <small className="text-muted" onClick={() => setShowProfile(false)}>Orthopedic</small>
                                        </div>
                                    </Link>
                                    <Link className="dropdown-item text-dark" onClick={() => setShowProfile(false)} to="#/"><span className="mb-0 d-inline-block me-1"><GrDashboard /></span> Dashboard</Link>
                                    <Link className="dropdown-item text-dark" onClick={() => setShowProfile(false)} to="#/"><span className="mb-0 d-inline-block me-1"><FiSettings /></span> Profile Settings</Link>
                                    <div className="dropdown-divider border-top"></div>
                                    <Link className="dropdown-item text-dark" onClick={() => setShowProfile(false)} to="#/"><span className="mb-0 d-inline-block me-1"><AiOutlineLogout /></span> Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div id="navigation">
                        <ul className="navigation-menu nav-left nav-light">
                            <li><Link to="/" className="sub-menu-item">Home</Link></li>
                            <li><Link to="/about" className="sub-menu-item">About</Link></li>
                            <li><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                            <li><Link to="/" className="sub-menu-item">Shop</Link></li>
                            <li className="has-submenu parent-menu-item">
                                <Link to="#/">Services</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link to="/" className="sub-menu-item">Doctors One</Link></li>
                                    <li><Link to="/" className="sub-menu-item">Doctors Two</Link></li>
                                    <li><Link to="/" className="sub-menu-item">Doctors Three</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/blogs" className="sub-menu-item">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <SearchModal showSearchModal={showSearchModal} setShowSearchModal={setShowSearchModal} />
            <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
        </>
    )
}

export default Header