import React from 'react'
import { Link } from 'react-router-dom';
import { GiTransparentTubes } from 'react-icons/gi';
import { FaJoomla } from 'react-icons/fa';
import { BsFlower2, BsFillCheckCircleFill, BsCheck2Circle, BsTelephone } from 'react-icons/bs';
import { BiLocationPlus, BiEnvelope } from 'react-icons/bi';
import { SiTripadvisor } from 'react-icons/si';
import { GiThreePointedShuriken } from 'react-icons/gi';
import bgContact from '../assets/images/PIX/contact-removebg-preview.png';
import ContactMap from './ContactMap';

const AboutContent = () => {
    return (
        <>
            <section className="section about-section font-size-15 margin-top-0 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-us">
                                <div className="about-content">
                                    <div className="title-about">
                                        <div className="about-us-icon1">
                                        </div>
                                        <h4>Who we Are</h4>
                                    </div>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        Sameday Laboratories and Diagnostics is a Full-Service Wellness Center,
                                        Clinic, Laboratory and Diagnostic Center focused on preventive care. <br />
                                    </p>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        One of the unique things that sets us apart from others is that we focus on
                                        wellness and preventive care for our patients -we have a highly skilled team
                                        of health care professionals including nurses and doctors that will evaluate
                                        the results of our patient's lab studies and give you advice accordingly.
                                    </p>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        We stand for excellence in delivering high quality, safe, effective and
                                        efficient medical laboratory diagnostic services. With a focus on excellence,
                                        we employ the latest technologies in offering top notch medical diagnostic services
                                        and medical laboratory services to the people of Uganda.
                                    </p>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        We perform advanced Polymerase Chain Reaction (PCR) and PCR-SARS-CoV-2 diagnostic
                                        testing on travelers and the general public, and on behalf of government and private institutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us">
                                <div className="about-us-icon">
                                </div>
                                <div className="about-content">
                                    <div className="title-about">
                                        <h4>What We Do</h4>
                                    </div>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        Our staff works around-the-clock to process and report results seven days a week for
                                        many of the largest retail, transportation, pharmaceutical, healthcare, and financial
                                        service organizations.
                                    </p>
                                    <p>
                                        <span><BsCheck2Circle /> </span>
                                        From high-complexity molecular diagnostic COVID-19 testing, to
                                        our toxicology and general lab testing, our team is as diverse as the testing we perform.
                                        We treat every study with the same high level of professionalism and attention regardless
                                        of the point entry of that study - whether it comes from:
                                    </p>
                                    <div className="bullet-about">
                                        <ul>
                                            <li><span><BsFillCheckCircleFill /> </span> Referral hospitals  </li>
                                            <li><span><BsFillCheckCircleFill /></span> Referral physicians </li>
                                            <li><span><BsFillCheckCircleFill /> </span> Referral laboratories  </li>
                                            <li><span><BsFillCheckCircleFill /></span> Walk-in clients </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section font-size-15 margin-top-0 padding-top-bottom-40 bg-light-gray">
                <div className="container">
                    <div className="row justify-content-center margin-top-0">
                        <div className="col-xl-10">
                            <div className="row padding-top-20">
                                <div className="col-lg-6">
                                    <div className="mission">
                                        <div className="mission-icon">
                                            <GiThreePointedShuriken />
                                        </div>
                                        <div className="mission-title">
                                            Our Mission
                                        </div>
                                        <div className="mission-content">
                                            With a core value hinged on the drive for
                                            continuous improvement and continuous innovation
                                            in technology, practices and services, we operate
                                            with a vision to create a safer environment for everyone,
                                            while helping to eradicate and/or stop the spread of the
                                            COVID-19 virus and other viral infections and infectious diseases.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vision">
                                        <div className="vision-icon">
                                            <SiTripadvisor />
                                        </div>
                                        <div className="vision-title">
                                            Our Vision
                                        </div>
                                        <div className="vision-content">
                                            We operate in both Kampala and
                                            Entebbe with the main motive to ensure safe diagnoses
                                            and high-quality delivery of fast and convenient medical
                                            testing services. We are focused on creating unprecedented quality,
                                            reliability and convenience in providing highly advanced and specialized
                                            medical laboratory diagnostic services for travelers and the general public
                                            at large.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-section font-size-15 margin-top-0 padding-top-20 bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Services</span>
                                <h4 className="title">Our Core Services</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center bg-gray">
                        <div className="col-xl-12">
                            <div className="shadow rounded overflow-hidden card-group">
                                <div className="card border-0 bg-light p-4 btn-orange border-radius-10">
                                    <Link to="/wellness-center" className="text-primary align-text-center">
                                        <BsFlower2 className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Wellness <br />Center</h5>
                                    </Link>
                                </div>

                                <div className="card border-0 p-4 btn-orange mx-2  border-radius-10">
                                    <Link to="/radiology-services" className="text-primary align-text-center">
                                        <FaJoomla className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Radiology <br />Services</h5>
                                    </Link>
                                </div>

                                <div className="card border-0 bg-light p-4 btn-orange  border-radius-10">
                                    <Link to="laboratory-services" className="text-primary align-text-center">
                                        <GiTransparentTubes className='white-text font-size-50' />
                                        <h5 className="mt-1 white-text font-size-30">Laboratory <br />Services</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-section font-size-15 margin-top-0 padding-top-0 padding-bottom-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="custom-choose">
                                <h5 className="choose-title">Why Choose Us</h5>
                                <div className="choose-content">
                                    <ul>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                We offer a comprehensive and holistic approach to wellness care - we will work closely with your Health
                                                care provider and insurance companies to ensure that all of your needs are attended to. We do this while at
                                                the same time providing world class service , results that are of highest quality and accuracy at a very
                                                competitive pricing.
                                            </p>
                                        </li>
                                        <li><span><BsFillCheckCircleFill /> </span>
                                            <p>
                                                We stand for excellence in delivering high quality, safe, effective and efficient medical laboratory diagnostic
                                                services. With a focus on excellence, we employ the latest technologies in offering top notch medical
                                                diagnostic services and medical laboratory services.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 padding-0 margin-0">
                            <div className="me-lg-5 padding-0 margin-0 contact-img">
                                <img src={bgContact} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-section font-size-15 margin-top-0 padding-top-20 bg-light-gray padding-bottom-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Contact Us</span>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="contact-locations">
                                <h5>Locations</h5>
                                <div className="locations-content">
                                    <ul>
                                        <li>
                                            <span><BiLocationPlus /> </span>
                                            <Link to="https://www.google.com/maps/@0.3311533,32.6025039,3a,90y,72.1h,86.9t/data=!3m6!1e1!3m4!1sfYmrwFrEby97rrxgVVL1hQ!2e0!7i13312!8i6656?hl=en" className="link">
                                                Imperial Mall, Shop No L29, Lower Ground Floor, Lugard Avenue – Entebbe
                                            </Link>
                                        </li>
                                        <li>
                                            <span><BiLocationPlus /> </span>
                                            <Link to="https://www.google.com/maps/@0.3311533,32.6025039,3a,75y,166.64h,87.08t,359.4r/data=!3m6!1e1!3m4!1sfYmrwFrEby97rrxgVVL1hQ!2e0!7i13312!8i6656?hl=en" className="link">
                                                REGENCY PLAZA, Office No 3, 18 Lugogo By-Pass – Kampala
                                            </Link>
                                        </li>
                                        <li>
                                            <span><BiLocationPlus /> </span>
                                            <Link to="https://www.google.com/maps/place/Peniel+Beach+Hotel/@0.0395145,32.4596532,18z/data=!4m8!3m7!1s0x177d86c52afdeed7:0xf99d53c25a719bcc!5m2!4m1!1i2!8m2!3d0.0391212!4d32.4593148?hl=en" className="link">
                                                Peniel Beach Hotel, Airport Road - Airport, Entebbe
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="contact-locations">
                                <h5>Phone & Email</h5>
                                <div className="locations-content">
                                    <ul>
                                        <li>
                                            <span><BsTelephone /></span>
                                            <Link to="tel:+256708850000" className="link">+256708850000 - Entebbe</Link>
                                        </li>
                                        <li>
                                            <span><BsTelephone /></span>
                                            <Link to="tel:+256775108946" className="link">+256775108946 - Kampala</Link>
                                        </li>
                                        <li>
                                            <span><BiEnvelope /></span>
                                            <Link to="mailto:info@samedaylabwork.com" className="link">info@samedaylabwork.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section  font-size-15 margin-top-0 padding-top-0 padding-bottom-0 bg-light-gray">
                <ContactMap />
            </section>
        </>
    )
}

export default AboutContent