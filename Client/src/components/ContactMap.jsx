/* eslint-disable */
import React from 'react'

const ContactMap = () => {
    return (
        <>
            <div className="container-fluid mt-100 mt-60">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.5902380654366!2d32.60185114416244!3d0.33112627018022406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb957772b7af%3A0x170c3fc96e5ebc2e!2s18%20Lugogo%20By-Pass%2C%20Kampala!5e0!3m2!1sen!2sug!4v1652438193126!5m2!1sen!2sug" width="600" height="450" style={{ border: 0 }} title='Map' allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container margin-top-neg-20 padding-bottom-40">
                <div className="row justify-content-center margin-top-0">
                    <div className="col-xl-12">
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
        </>
    )
}

export default ContactMap