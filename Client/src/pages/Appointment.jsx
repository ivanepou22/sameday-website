import React from 'react'
import { Footer, Header, HeroSection, AppointmentSection } from '../components'

const Appointment = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Book an Appointment"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <AppointmentSection />
            <Footer />
        </>
    )
}

export default Appointment