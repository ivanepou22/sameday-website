import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {SiPytest} from 'react-icons/si'
import {RiServiceLine, RiHomeGearLine, RiHotelBedLine} from 'react-icons/ri'
import {FaWalking   } from 'react-icons/fa'

const CovidContent = () => {
    return (
        <section className="section about-section font-size-15 padding-bottom-20">
            <div className="container">
            <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <h4 className="choose-title mb-4">COVID Testing Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    We perform advanced Polymerase Chain Reaction (PCR) and PCR-SARS-CoV-2
                                    rapid diagnostic testing on travelers, the general public, and on behalf of private institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <AiOutlineSafetyCertificate />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Flying Certificate</Link>
                                <p className="text-muted mt-3">Get fast, accurate results and your flying certificate with enough time to spare for your flight.</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <SiPytest />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">PCR Testing</Link>
                                <p className="text-muted mt-3">The gold standard of covid-19 testing with a high level of professionalism and expertise. Come and get to know your results.</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <RiServiceLine />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Same Day Service</Link>
                                <p className="text-muted mt-3">Need to travel today? Get your results and certificate to fly on the same day before your flight!</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <RiHomeGearLine />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Home Testing Service</Link>
                                <p className="text-muted mt-3">How convenient can it get? We come to your home, take your sample and send you the results. Sweet!</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <RiHotelBedLine />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Hotel Testing Service</Link>
                                <p className="text-muted mt-3">Schedule your covid-19 test with the front desk in the convenience of your hotel room and we will come to you !</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md icon-font">
                                <FaWalking />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Walk In Testing</Link>
                                <p className="text-muted mt-3">Walk into our testing facilities and get your results in person or at your convenience via email or whatsApp.</p>
                                <Link to="#/" className="link">Read More <i className="ri-arrow-right-line align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CovidContent