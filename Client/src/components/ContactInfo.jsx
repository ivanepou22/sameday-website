import React from 'react'
import { Link } from 'react-router-dom';
import { FiPhone, } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { AiOutlineEnvironment } from 'react-icons/ai'

const ContactInfo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card features feature-primary text-center border-0">
                            <div className="icon text-center rounded-md mx-auto bg-light-orange">
                                <FiPhone className='font-size-20' />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <h5>Phone</h5>
                                <p className="text-muted mt-3">Great doctor if you need your family member to get effective assistance</p>
                                <Link to="tel:+152534-468-854" className="link">+152 534-468-854</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card features feature-primary text-center border-0">
                            <div className="icon text-center rounded-md mx-auto bg-light-orange">
                                <BiEnvelope className='font-size-20' />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <h5>Email</h5>
                                <p className="text-muted mt-3">Great doctor if you need your family member to get effective assistance</p>
                                <Link to="mailto:contact@example.com" className="link">contact@example.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card features feature-primary text-center border-0">
                            <div className="icon text-center rounded-md mx-auto">
                                <AiOutlineEnvironment className='font-size-20' />
                            </div>
                            <div className="card-body p-0 mt-3">
                                <h5>Location</h5>
                                <p className="text-muted mt-3">C/54 Northwest Freeway, Suite 558, <span>Houston, USA 485 </span></p>
                                <Link to="#" className="link">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo