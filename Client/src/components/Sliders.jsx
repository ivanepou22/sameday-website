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
import wellnessImg from "../assets/images/Slides/Wellness.jpeg";
import radiologyImg from "../assets/images/Slides/RadioGraphy.jpeg";
import covidImg from "../assets/images/Slides/Covid.jpeg";
import labImg from "../assets/images/Slides/Laboratory.jpeg";
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sliders = () => {

    const wellnessPic = {
        backgroundImage: `url("${wellnessImg}")`,
        backgroundSize: "auto 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
    }

    const radiologyPic = {
        backgroundImage: `url("${radiologyImg}")`,
        backgroundSize: "auto 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
    }

    const covidPic = {
        backgroundImage: `url("${covidImg}")`,
        backgroundSize: "auto 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
    }

    const labPic = {
        backgroundImage: `url("${labImg}")`,
        backgroundSize: "auto 90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
    }

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
                    <div className="container-fluid" style={wellnessPic}>
                        <div className="container height-100">
                            <div className="row align-text-left margin-tp-20-per">
                                <div className="col-lg-12 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0 height-100">
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
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container-fluid" style={radiologyPic}>
                        <div className="container height-100">
                            <div className="row align-text-left margin-tp-20-per">
                                <div className="col-lg-12 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
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
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container-fluid" style={labPic}>
                        <div className="container height-100">
                            <div className="row align-text-left margin-tp-20-per">
                                <div className="col-lg-12 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
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
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container-fluid" style={covidPic}>
                        <div className="container height-100">
                            <div className="row align-text-left margin-tp-20-per">
                                <div className="col-lg-12 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                                    <div className="ms-lg-4">
                                        <div className="section-title">
                                            <p className="mb-1 slider-title">COVID 19 Testing</p>
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
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Sliders