import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { RiHeartPulseLine } from 'react-icons/ri';
import { GiUltrasound } from 'react-icons/gi';
import { SiElectron } from 'react-icons/si';

const Radiology = () => {
    return (
        <>
            <div className="container padding-top-bottom-60  font-size-15">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="badge badge-pill badge-soft-primary mb-3">Radiology</span>
                            <h4 className="choose-title mb-4">Our Radiology Services</h4>
                            <p className="text-muted mx-auto para-desc mb-0">
                                We have a comprehensive radiology department that includes x-rays ultrasound and ECG‘s to
                                further give a more in-depth analysis as to what is going on with the patient.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md">
                                <RiHeartPulseLine className="icon-radiology  h3 mb-0"></RiHeartPulseLine>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">X-ray imaging</Link>
                                <p className="text-muted mt-3">
                                    This is the fastest and easiest way for us to view and assess broken bones, joints or other
                                    injuries to a patient.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md">
                                <GiUltrasound className="icon-radiology h3 mb-0"></GiUltrasound>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Ultrasound</Link>
                                <p className="text-muted mt-3">
                                    Some of the organs that can be imaged with our ultrasound machine are the breast,
                                    thyroid, liver, pancreas, gallbladder, kidneys, spleen, uterus, ovaries, testicles, appendix and bladder.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 col-12 mt-5">
                        <div className="card features feature-primary border-0">
                            <div className="icon text-center rounded-md">
                                <SiElectron className="icon-radiology h3 mb-0"></SiElectron>
                            </div>
                            <div className="card-body p-0 mt-3">
                                <Link to="#/" className="title text-dark h5">Electrocardiogram (ECG)</Link>
                                <p className="text-muted mt-3">
                                    An electrocardiogram is a painless, noninvasive way to help diagnose many common heart
                                    problems. Some of what we use it for is to detect:

                                </p>
                                <div className="bullet-about bullet-about-1">
                                    <ul>
                                        <li><span><BsFillCheckCircleFill /> </span> Irregular heart rhythms (arrhythmias) </li>
                                        <li><span><BsFillCheckCircleFill /></span> If blocked or narrowed arteries in the heart (coronary artery disease) are causing chest pain or a heart attack. </li>
                                        <li><span><BsFillCheckCircleFill /> </span> Whether you have had a previous heart attack  </li>
                                        <li><span><BsFillCheckCircleFill /></span> How well certain heart disease treatments, such as a pacemaker, are working. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Radiology