/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import bgContact from "../assets/images/about/aboutSameday.PNG";
import wellnessImg from "../assets/images/Icons/wellness.png";
import radiologyImg from "../assets/images/Icons/radiology.png";
import covidImg from "../assets/images/Icons/coronavirus.png";
import labImg from "../assets/images/Icons/lab.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsFillCheckCircleFill } from 'react-icons/bs';

const HomeServices = () => {
    const aboutImg = {
        backgroundImage: `url("${bgContact}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
    }
    return (
        <>
            <section className="section font-size-15 margin-top-0 padding-top-0">
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Services</span>
                                <h4 className="choose-title mb-4 text-orange">Our Core Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="rounded overflow-hidden card-group">
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 p-4 mx-2 border-radius-10 height-100">
                                        <Link to="/laboratory-services" className="text-primary align-text-center">
                                            <img src={labImg} alt="Laboratory" width={100} />
                                            <h5 className="mt-1 font-size-18"><span className='white-space-wrap-none'>Laboratory</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 p-4 mx-2 border-radius-10 height-100">
                                        <Link to="/wellness-center" className="text-primary align-text-center">
                                            <img src={wellnessImg} alt="Wellness" width={100} />
                                            <h5 className="mt-1 font-size-18"> <span className='white-space-wrap-none'>Wellness</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 p-4 mx-2  border-radius-10 height-100">
                                        <Link to="/radiology-services" className="text-primary align-text-center">
                                            <img src={radiologyImg} alt="Radiology" width={100} />
                                            <h5 className="mt-1 font-size-18"><span className='white-space-wrap-none'>Radiology</span></h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-12 mt-2'>
                                    <div className="card border-0 p-4 mx-2 border-radius-10 height-100">
                                        <Link to="/covid-testing" className="text-primary align-text-center">
                                            <img src={covidImg} alt="Covid 19 Testing" width={100} />
                                            <h5 className="mt-1 font-size-18"><span className='white-space-wrap-none'>COVID Testing</span></h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section about-section font-size-15 mt-4 padding-top-bottom-40 padding-bottom-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title text-orange">About Us</h5>
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
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="padding-0 margin-0 height-100">
                                    <img src={bgContact} className="img-fluid height-100" alt="About"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default HomeServices