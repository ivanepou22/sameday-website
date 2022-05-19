/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/images/about/Wheel_0.png";
import { BsFlower2, BsTelephone, BsGlobe } from "react-icons/bs";
import { FaJoomla } from "react-icons/fa";
import { RiArrowRightSLine, RiTimerLine } from "react-icons/ri";
import { GiTransparentTubes } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const HomeServices = () => {
    return (
        <>
            <section className="section font-size-15 margin-top-0 padding-top-0">
                <div className="container margin-top-0">
                    <div className="row justify-content-center margin-top-0">
                        <div className="col-xl-10">
                            <div className="bg-white shadow rounded overflow-hidden card-group">
                                <div className="card border-0 bg-light p-4">
                                    <h5 className="mt-1">Contact Us</h5>
                                    <ul className="list-unstyled mt-2">
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><BsTelephone /></p>
                                            <p className="text-primary mb-0">+256 775 108 946</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><AiOutlineMail /></p>
                                            <p className="text-primary mb-0">info@samedaylabwork.com</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><BsGlobe /></p>
                                            <p className="text-primary mb-0">www.samedaylabwork.com</p>
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="text-primary">Read More <RiArrowRightSLine /></Link>
                                </div>

                                <div className="card border-0 p-4">
                                    <h5 className="mt-1">Locations</h5>
                                    <ul className="list-unstyled mt-2">
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><GoLocation /></p>
                                            <p className="text-primary mb-0">18 Lugogo By-Pass – Kampala.</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><GoLocation /></p>
                                            <p className="text-primary mb-0">Lugard Avenue – Entebbe.</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0"><GoLocation /></p>
                                            <p className="text-primary mb-0">Airport Road - Entebbe Airport.</p>
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="text-primary">Read More <RiArrowRightSLine /></Link>
                                </div>

                                <div className="card border-0 bg-light p-4">
                                    <h5 className="mt-1">Opening Hours</h5>
                                    <ul className="list-unstyled mt-2">
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Monday - Friday</p>
                                            <p className="text-primary mb-0"><RiTimerLine /> All Day</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Saturday</p>
                                            <p className="text-primary mb-0"><RiTimerLine /> All Day</p>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Sunday</p>
                                            <p className="text-primary mb-0"><RiTimerLine /> All Day</p>
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="text-primary">Read More <RiArrowRightSLine /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="position-relative">
                                <img src={img1} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                            <div className="ms-lg-4">
                                <div className="section-title">
                                    <h4 className="title mb-4">About Us</h4>
                                    <p className="text-muted para-desc">Sameday Laboratories and Diagnostics is a Full-Service Wellness Center,Clinic, Laboratory and Diagnostic Center focused on preventive care.</p>
                                    <p className="text-muted para-desc mb-0">
                                        One of the unique things that sets us apart from others is that we focus on
                                        wellness and preventive care for our patients -we have a highly skilled team
                                        of health care professionals including nurses and doctors that will evaluate
                                        the results of our patient's lab studies and give you advice accordingly.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <Link to="/about" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Services</span>
                                <h4 className="title mb-4">Our Core Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="shadow rounded overflow-hidden card-group">
                                <div className="card border-0 bg-light p-4 btn-orange border-radius-10">
                                    <Link to="departments.html" className="text-primary align-text-center">
                                        <BsFlower2 className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Wellness <br />Center</h5>
                                    </Link>
                                </div>

                                <div className="card border-0 p-4 btn-orange mx-2  border-radius-10">
                                    <Link to="departments.html" className="text-primary align-text-center">
                                        <FaJoomla className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Radiology <br />Services</h5>
                                    </Link>
                                </div>

                                <div className="card border-0 bg-light p-4 btn-orange  border-radius-10">
                                    <Link to="departments.html" className="text-primary align-text-center">
                                        <GiTransparentTubes className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Laboratory <br />Services</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices