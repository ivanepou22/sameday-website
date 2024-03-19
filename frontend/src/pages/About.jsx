/* eslint-disable */
import React from 'react'
import { AboutContent, Footer, Header, HeroSection } from '../components'

const About = () => {
    const pageName = 'About Us';
    const pageDescription = 'Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care.';
    const companyName = 'SameDay Laboratories';

    return (
        <>
            <Header />
            <HeroSection pageName={pageName} pageDescription={pageDescription} companyName={companyName} showBreadcrumb={true} />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About