/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import bgContact from "../assets/images//about//doctorabout-removebg-preview.png";
import { BsFlower2, BsTelephone, BsGlobe } from "react-icons/bs";
import { FaJoomla } from "react-icons/fa";
import { RiArrowRightSLine, RiTimerLine, RiVirusLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ImLab } from 'react-icons/im'
import { BiClinic } from 'react-icons/bi'

const HomeServices = () => {
    return (
        <>
            <section className="section font-size-15 margin-top-0 padding-top-0">
                <div className="container margin-top-neg-20 padding-bottom-40">
                    <div className="row justify-content-center margin-top-0">
                        <div className="col-xl-11">
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
                <section className="section about-section font-size-15 margin-top-0 padding-top-bottom-40 padding-bottom-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 contact-img">
                                    <img src={bgContact} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title">About Us</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <li><span><BsFillCheckCircleFill /> </span>
                                                <p>
                                                    Sameday Laboratories and Diagnostics is a Full-Service Wellness Center,Clinic,
                                                    Laboratory and Diagnostic Center focused on preventive care.
                                                </p>
                                            </li>
                                            <li><span><BsFillCheckCircleFill /> </span>
                                                <p>
                                                    One of the unique things that sets us apart from others is that we focus on
                                                    wellness and preventive care for our patients -we have a highly skilled team
                                                    of health care professionals including nurses and doctors that will evaluate
                                                    the results of our patient's lab studies and give you advice accordingly.
                                                </p>
                                            </li>
                                            <li><span><BsFillCheckCircleFill /> </span>
                                                <p>
                                                    With our expertise, professionalism, state-of-the-art and highly sterile laboratories for your test needs,
                                                    highly skilled, trained and experienced staff, we aim to be the leading voice of transformation and improvement of
                                                    health care in Uganda.
                                                </p>
                                            </li>
                                            <li>
                                                <Link to="/about" className="link">Read More <RiArrowRightSLine /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Services</span>
                                <h4 className="choose-title mb-4">Our Core Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="rounded overflow-hidden card-group">
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 bg-light p-4 btn-orange border-radius-10 height-100">
                                        <Link to="/clinics" className="text-primary align-text-center">
                                            <BiClinic className='white-text font-size-50' />
                                            <h5 className="mt-1 white-text font-size-30">Clinics <br /></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 bg-light p-4 mx-2 btn-orange border-radius-10 height-100">
                                        <Link to="/wellness-center" className="text-primary align-text-center">
                                            <BsFlower2 className='white-text font-size-50' />
                                            <h5 className="mt-1 white-text font-size-30"> <span className='white-space-wrap-none'>Wellness</span> <br /><span className='white-space-wrap-none'>Center</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 p-4 btn-orange mx-2  border-radius-10 height-100">
                                        <Link to="/radiology-services" className="text-primary align-text-center">
                                            <FaJoomla className='white-text font-size-50' />
                                            <h5 className="mt-1 white-text font-size-30"><span className='white-space-wrap-none'>Radiology</span> <br /><span className='white-space-wrap-none'>Services</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 bg-light p-4 btn-orange mx-2 border-radius-10 height-100">
                                        <Link to="/laboratory-services" className="text-primary align-text-center">
                                            <ImLab className='white-text font-size-50' />
                                            <h5 className="mt-1 white-text font-size-30"><span className='white-space-wrap-none'>Laboratory</span> <br /><span className='white-space-wrap-none'>Services</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 bg-light p-4 btn-orange  border-radius-10 height-100">
                                        <Link to="/covid-testing" className="text-primary align-text-center">
                                            <RiVirusLine className='white-text font-size-50' />
                                            <h5 className="mt-1 white-text font-size-30"><span className='white-space-wrap-none'>Covid</span> <br /><span className='white-space-wrap-none'>Testing</span></h5>
                                        </Link>
                                    </div>
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