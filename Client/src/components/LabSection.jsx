import React from 'react'

//images
import bloodAnalysis from '../assets/images/lab/blood.PNG'
import molecular from '../assets/images/lab/Molecular.PNG'
import clinical from '../assets/images/lab/clinical.PNG'
import courier from '../assets/images/lab/courier.PNG'
import specialized from '../assets/images/lab/specialized.PNG'

const LabSection = () => {
    return (
        <>
            <div className="container padding-top-bottom-60  font-size-15 bg-lighter" style={{ backgroundColor: 'white' }}>
                <div className="row justify-content-center margin-bottom-1rem">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="badge badge-pill badge-soft-primary mb-3">Laboratory</span>
                            <h4 className="choose-title mb-4">Our Laboratory Services</h4>
                            <p className="text-muted mx-auto para-desc mb-0">
                                We stand for excellence in delivering high quality, safe, effective and efficient medical laboratory diagnostic
                                services. With a focus on excellence, we employ the latest technologies in offering top notch medical
                                diagnostic services and medical laboratory services.
                            </p>
                        </div>

                    </div>
                </div>
                <section className="section about-section font-size-15 margin-top-0 padding-top-0 padding-bottom-20">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 lab-img">
                                    <img src={bloodAnalysis} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title-1">BLOOD ANALYSIS</h5>
                                    <h5 className="choose-title-2">Chemistry, Hematology, and Immunoassay</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <div className="dropdown-divider border-top"></div>
                                            <li>
                                                <p>
                                                    We offer a comprehensive and holistic approach to wellness care - we will work closely with your Health
                                                    care provider and insurance companies to ensure that all of your needs are attended to. We do this while at
                                                    the same time providing world class service , results that are of highest quality and accuracy at a very
                                                    competitive pricing.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center margin-bottom-1rem">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 lab-img">
                                    <img src={molecular} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title-1">MOLECULAR PCR TESTING</h5>
                                    <h5 className="choose-title-2">Polymerase Chain Reaction (PCR) Testing</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <div className="dropdown-divider border-top"></div>
                                            <li>
                                                <p>
                                                    Sameday Laboratories and Diagnostics is using cutting
                                                    edge technology to release accurate and reliable test
                                                    results to our clients faster so they can make critical
                                                    decisions on patient treatment plans.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center margin-bottom-1rem">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 lab-img">
                                    <img src={clinical} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title-1">CLINICAL TOXICOLOGY</h5>
                                    <h5 className="choose-title-2">Urine Drug Testing</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <div className="dropdown-divider border-top"></div>
                                            <li>
                                                <p>
                                                    UTD and SUD testing help clients make decisions for patient
                                                    pain management care. Accurate results are necessary for
                                                    Doctors to adjust medication and identify necessary changes
                                                    that can make a difference in the treatment plan.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center margin-bottom-1rem">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 lab-img">
                                    <img src={courier} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title-1">COURIER SERVICE</h5>
                                    <h5 className="choose-title-2">Daily Courier Pickups</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <div className="dropdown-divider border-top"></div>
                                            <li>
                                                <p>
                                                    Testing samples can only happen after we receive them,
                                                    and our courier service can get your collected samples
                                                    from your facility to our lab daily, or on-demand when
                                                    needed.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                                <div className="me-lg-5 padding-0 margin-0 lab-img">
                                    <img src={specialized} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-choose">
                                    <h5 className="choose-title-1">SPECIALIZED TESTING</h5>
                                    <h5 className="choose-title-2">CGx and PGx Testing Services to Expand Diagnostic Capabilities</h5>
                                    <div className="choose-content">
                                        <ul>
                                            <div className="dropdown-divider border-top"></div>
                                            <li>
                                                <p>
                                                    With our CGx and PGx testing we can elevate your
                                                    diagnostic capabilities for patient care. From cancer
                                                    screening to identifying pharmaceutical interactions with a
                                                    patient, our specialized testing can greatly enhance a
                                                    patients quality of life.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LabSection