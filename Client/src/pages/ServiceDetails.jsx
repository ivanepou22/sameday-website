import React from 'react'
import { Header, Footer, ServiceDetailSection, HeroSection } from '../components';

const ServiceDetails = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Service Details"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <ServiceDetailSection />
            <Footer />
        </>
    )
}

export default ServiceDetails