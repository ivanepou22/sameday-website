import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import wellness from '../assets/images/new/wellness001.jpg';

const Wellness01 = () => {
    return (
        <>
            <section className="section about-section font-size-15 margin-top-0 padding-top-0 padding-bottom-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="custom-choose">
                                <h5 className="choose-title">Wellness Center</h5>
                                <div className="choose-content">
                                    <ul>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                When you enter any of our facilities you will be greeted by a friendly healthcare professional - you
                                                will also be given a consultation by a doctor - if a laboratory test or radiology study is recommended
                                                Sameday Laboratories and Diagnostics will conduct it on the premises and interpret the results with
                                                physician’s recommendations.
                                            </p>
                                        </li>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                We will identify and address your physical & behavioral health needs. Our team-based
                                                patient-centered approach to care for adults and children, includes routine visits, common
                                                laboratory tests, acute and chronic care, routine immunizations, diabetes education, nutrition
                                                counseling and referral to specialists.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 padding-0 margin-0">
                            <div className="me-lg-5 padding-0 margin-0 contact-img">
                                <img src={wellness} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wellness01