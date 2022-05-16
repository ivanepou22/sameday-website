import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi'
import hero_bg from '../assets/images/bg/bg-px.jpg';
import same_day_logo from '../assets/images/logo_icon.png'

const HeroHome = () => {
    return (
        <>
            <section className="bg-half-260 d-table w-100" style={{ background: `url('${hero_bg}') center` }}>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row mt-lg-0">
                        <div className="col-12">
                            <div className="heading-title">
                                <img src={same_day_logo} height="40" alt="" />
                                <h4 className="display-4 fw-bold text-white title-dark mt-2 mb-4">Meet The <br /> Best Doctor</h4>
                                <p className="para-desc text-white-50 mb-0 font-size-15">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                <div className="mt-2 pt-2">
                                    <Link to="booking-appointment.html" className="btn btn-orange">Book Appointment</Link>
                                    <p className="text-white-50 mb-0 mt-2 font-size-14">Please read <Link to="#" className="text-white-50">Terms and Conditions <HiOutlineArrowRight /></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroHome