/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom';

const HeroSection = (props) => {
    const { pageName, pageDescription, companyName } = props;
    return (
        <>
            <section className="bg-half-170 d-table w-100 bg-navy-blue">
                <div className="bg-overlay-dark"></div>
                <div className="container">
                    <div className="row mt-1 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-1 text-white title-dark">{pageName}</h3>
                                <p className="para-desc mx-auto text-gray font-size-12">{pageDescription}</p>
                                <nav aria-label="breadcrumb" className="d-inline-block mt-1" >
                                    <ul className="breadcrumb-custom breadcrumb bg-light rounded mb-0">
                                        <li className="breadcrumb-item"><Link to="/">{companyName}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default HeroSection