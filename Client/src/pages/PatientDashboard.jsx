import React from 'react'
import { DashboardSection, Footer, Header, HeroSection } from '../components'

const PatientDashboard = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="MY Dashboard"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
            />
            <DashboardSection />
            <Footer />
        </>
    )
}

export default PatientDashboard