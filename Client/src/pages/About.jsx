import React from 'react'
import { Footer, Header, HeroSection } from '../components'

const About = () => {
    const pageName = 'About Us';
    const pageDescription = 'Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.';
    const companyName = 'SameDay Laboratories';
    // const pageTitle = `${pageName} | ${pageDescription}`;

    return (
        <>
            <Header />
            <HeroSection pageName={pageName} pageDescription={pageDescription} companyName={companyName} />
            <Footer />
        </>
    )
}

export default About