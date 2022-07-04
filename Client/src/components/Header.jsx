/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../feautures/auth/authSlice";
import { cartSelector } from "../feautures/cart/cartSlice";
import Avatar from "react-avatar";
// icons
import { RiSearchLine } from "react-icons/ri";
import { GrDashboard } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";
// Logo
// import same_day_logo from "../assets/images/Sameday-original.png";
import same_day_logo1 from "../assets/images/about/logo.PNG";
// styles
import "../assets/css/custom.css";
import SearchModal from "./SearchModal";
import Settings from "./Settings";

const Header = () => {
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const [showAboutSubmenu, setShowAboutSubmenu] = React.useState(false);

  const { user } = useSelector(authSelector);
  const { cart, totalItems } = useSelector(cartSelector);

  const handleCanvas = () => {
    setShowSearchModal(!showSearchModal);
  };
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  const handleShowAboutSubmenu = () => {
    setShowAboutSubmenu(!showAboutSubmenu);
  };

  return (
    <>
      <header id="topnav" className="navigation sticky nav-sticky z-index-100">
        {/* nav-sticky */}
        <div className="container">
          <div>
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={same_day_logo1} className="l-dark" height="34" alt="" />
                <img src={same_day_logo1} className="l-light" height="34" alt="" />
              </span>
              <img src={same_day_logo1} height="34" className="logo-dark-mode" alt="" />
            </Link>
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                className={showMobileMenu ? "navbar-toggle open" : "navbar-toggle"}
                id="isToggle"
                to="#/"
                onClick={handleShowMobileMenu}
              >
                <div className="lines font-size-20">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          <ul className="dropdowns list-inline mb-0">
            <li className="list-inline-item mb-0 ms-1">
              <Link
                to="#/"
                className="btn btn-icon btn-pills btn-orange"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
                onClick={handleCanvas}
              >
                <RiSearchLine />
              </Link>
            </li>
            <li className="list-inline-item mb-0 ms-1">
              <Link to="/shopping-cart">
                <button type="button" className={`btn p-0 position-relative border-none`}>
                  <HiOutlineShoppingBag className="font-size-40" />
                  {cart?.length > 0 && (
                    <span className="items-count btn-orange position-absolute">{totalItems}</span>
                  )}
                </button>
              </Link>
            </li>

            {user ? (
              <li className="list-inline-item mb-0 ms-1">
                <div className="dropdown dropdown-primary">
                  <button
                    type="button"
                    className={`btn btn-pills dropdown-toggle p-0  ${showProfile ? "show" : ""}`}
                    onClick={handleShowProfile}
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={showProfile}
                  >
                    <Avatar
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      name={user.name}
                      size="40"
                      round={true}
                      color={"#F46524"}
                    />
                  </button>
                  <div
                    className={`dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3 ${showProfile ? "show profile-drop" : ""
                      }`}
                    style={{ minWidth: "200px" }}
                  >
                    <Link className="dropdown-item d-flex align-items-center text-dark" to="#/">
                      <Avatar
                        className="avatar avatar-md-sm rounded-circle border shadow"
                        name={user.name}
                        size="40"
                        round={true}
                        color={"#F46524"}
                      />
                      <div className="flex-1 ms-2">
                        <span className="d-block mb-1" onClick={() => setShowProfile(false)}>
                          {user.name}
                        </span>
                        <small className="text-muted" onClick={() => setShowProfile(false)}>
                          {user.email}
                        </small>
                      </div>
                    </Link>
                    <div className="dropdown-divider border-top"></div>
                    <Link
                      className="dropdown-item text-dark"
                      onClick={() => setShowProfile(false)}
                      to="/patient-dashboard"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <GrDashboard />
                      </span>{" "}
                      Dashboard
                    </Link>
                    <Link
                      className="dropdown-item text-dark"
                      onClick={() => setShowProfile(false)}
                      to="/patient-profile"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <FiSettings />
                      </span>{" "}
                      Profile Settings
                    </Link>
                    <div className="dropdown-divider border-top"></div>
                    <Link
                      className="dropdown-item text-dark"
                      onClick={() => setShowProfile(false)}
                      to="/logout"
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <AiOutlineLogout />
                      </span>{" "}
                      Logout
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li className="list-inline-item">
                <Link to="/login" className="btn btn-login-register btn-orange  padding-left">
                  <AiOutlineUser /> <span className="login-register"> Login</span>
                </Link>
                <Link to="/register" className="btn btn-login-register btn-orange padding-left">
                  <SiGnuprivacyguard /> <span className="login-register"> Register</span>
                </Link>
              </li>
            )}
          </ul>
          <div id="navigation" className={showMobileMenu ? "display-block" : "display-none"}>
            <ul className="navigation-menu nav-left nav-light">
              <li>
                <Link to="/" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link to="#/" onClick={handleShowAboutSubmenu}>
                  About
                </Link>
                <span className="menu-arrow"></span>
                <ul className={setShowAboutSubmenu ? "submenu open" : "submenu"}>
                  <li>
                    <Link to="/about" className="sub-menu-item">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs" className="sub-menu-item">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className="sub-menu-item">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shop" className="sub-menu-item">
                  Shop
                </Link>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link to="#/" onClick={handleOpenSubMenu}>
                  Services
                </Link>
                <span className="menu-arrow"></span>
                <ul className={openSubMenu ? "submenu open" : "submenu"}>
                  <li>
                    <Link to="/clinics" className="sub-menu-item">
                      Clinics
                    </Link>
                  </li>
                  <li>
                    <Link to="/wellness-center" className="sub-menu-item">
                      Wellness Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/radiology-services" className="sub-menu-item">
                      Radiology Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/laboratory-services" className="sub-menu-item">
                      Laboratory Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/covid-testing" className="sub-menu-item">
                      Covid Testing
                    </Link>
                  </li>
                </ul>
              </li>
              {user ? (
                <li>
                  <Link to="/create-appointment" className="sub-menu-item">
                    Booking
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login?redirect=/create-appointment" className="sub-menu-item">
                    Booking
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
      <SearchModal showSearchModal={showSearchModal} setShowSearchModal={setShowSearchModal} />
      <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
    </>
  );
};

export default Header;
