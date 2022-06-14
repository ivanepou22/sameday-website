/* eslint-disable */
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../assets/css/Sliders.css';

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
//Images
import img1 from "../assets/images/about/wellness005-removebg-preview.png";
import clinics from "../assets/images/about/clinics.png";
import img2 from "../assets/images/about/rdg03-removebg-preview.png";
import img3 from "../assets/images/about/lab0020-removebg-preview.png";
import img4 from "../assets/images/about//Combineb_pix_020-removebg-preview.png";
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sliders = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 6000,
                    // pauseOnMouseEnter: false
                }}
                direction={"vertical"}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-text-left margin-right-10">
                            <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                <div className="ms-lg-4 slider-wl-content">
                                    <div className="section-title">
                                        <p className="mb-1 slider-title">Clinics</p>
                                        <p className="text-muted para-desc mb-0 font-size-15 color-black">
                                            In order to provide a good service to our customers, we have opened a series of
                                            clinics in several different locations in the Country with a range of affordable and efficient
                                            services, please through the list of services provided per branch.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/clinics" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="position-relative">
                                    <img src={clinics} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-text-left margin-right-10">
                            <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                <div className="ms-lg-4 slider-wl-content">
                                    <div className="section-title">
                                        <p className="mb-1 slider-title">Wellness Center</p>
                                        <p className="text-muted para-desc mb-0 font-size-15 color-black">
                                            One of the unique things that sets us apart from others is that we focus on
                                            wellness and preventive care for our patients -we have a highly skilled team
                                            of health care professionals including nurses and doctors that will evaluate
                                            the results of our patient's lab studies and give you advice accordingly.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/wellness-center" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="position-relative">
                                    <img src={img1} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-text-left">
                            <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                <div className="ms-lg-4">
                                    <div className="section-title">
                                        <p className="mb-1 slider-title">Radiology Services</p>
                                        <p className="text-muted para-desc mb-0 font-size-15 color-black">
                                            We have a comprehensive radiology department that includes x-rays ultrasound and ECG‘s to
                                            further give a more in-depth analysis as to what is going on with the patient.
                                            X-ray imaging is the fastest and easiest way for us to view and assess broken bones, joints or other
                                            injuries to a patient.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/radiology-services" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="position-relative">
                                    <img src={img2} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-text-left">
                            <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                <div className="ms-lg-4">
                                    <div className="section-title">
                                        <p className="mb-1 slider-title">Laboratory Services</p>
                                        <p className="text-muted para-desc mb-0 font-size-15 color-black">
                                            We stand for excellence in delivering high quality, safe, effective and efficient medical laboratory diagnostic
                                            services. With a focus on excellence, we employ the latest technologies in offering top notch medical
                                            diagnostic services and medical laboratory services.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/laboratory-services" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="position-relative">
                                    <img src={img3} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="row align-text-left">
                            <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                <div className="ms-lg-4">
                                    <div className="section-title">
                                        <p className="mb-1 slider-title">Covid Testing</p>
                                        <p className="text-muted para-desc mb-0 font-size-15 color-black">
                                            With our expertise, professionalism, state-of-the-art and
                                            highly sterile laboratories for your test needs, highly
                                            skilled, trained and experienced staff, we aim to be the
                                            leading voice of transformation and improvement of
                                            health care in Uganda.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <Link to="/covid-testing" className="btn btn-orange">Read More <RiArrowRightSLine /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="position-relative">
                                    <img src={img4} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Sliders