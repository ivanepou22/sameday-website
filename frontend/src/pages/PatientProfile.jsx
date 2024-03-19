import React from 'react'
import { Footer, Header, HeroSection, ProfileSection } from '../components'

const PatientProfile = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="MY Profile"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <ProfileSection />
            <Footer />
        </>
    )
}

export default PatientProfile