import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCheckSquare } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import wellness1 from '../assets/images/new/moodcow_wellness.png';
import { Link } from 'react-router-dom';

const Wellness02 = () => {
    return (
        <>
            <section className="section about-section font-size-15 margin-top-0 padding-top-bottom-40 bg-light-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 padding-0 margin-0">
                            <div className="me-lg-5 padding-0 margin-0 contact-img">
                                <img src={wellness1} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="custom-choose">
                                <h5 className="choose-title">Wellness Center Services</h5>
                                <div className="choose-content">
                                    <ul>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                Sameday Laboratories and Diagnostics recognizes the importance of customization in delivering quality wellness
                                                programs. Our experienced medical professionals put your healing needs first.
                                            </p>
                                        </li>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                We are proud to provide a high-quality level of customer service, medical experience, and commitment to health and
                                                wellness to all our patients. Our goal is to make you feel better as quickly as possible. Some of our wellness packages
                                                include:
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="bullet-about bullet-about-1">
                                        <ul>
                                            <li><span><AiFillCheckSquare /> </span> Standard Corporate Health Checkup  </li>
                                            <li><span><AiFillCheckSquare /></span> Corporate Plus Checkup </li>
                                            <li><span><AiFillCheckSquare /> </span> Pre-Employment Health Checkup  </li>
                                            <li><span><AiFillCheckSquare /></span> Child Healthcare Checkup </li>
                                            <li><span><AiFillCheckSquare /></span> Pre-Insurance Health Checkup </li>
                                        </ul>
                                        <ul>
                                            <li><span><AiFillCheckSquare /> </span> Pre-Marital Checkup  </li>
                                            <li><span><AiFillCheckSquare /></span> Senior Citizen Health Checkup </li>
                                            <li><span><AiFillCheckSquare /> </span> Oil & Gas OHS Health Checkup  </li>
                                            <li><span><AiFillCheckSquare /></span> Pre-Conception Checkup </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Link to="/wellness-center" className="link">Read More <RiArrowRightSLine /></Link>
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

export default Wellness02