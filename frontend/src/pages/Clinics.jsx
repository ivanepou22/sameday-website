import React from 'react'
import { Header, HeroSection } from '../components'

const Clinics = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Clinics|Hospitals"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
        </>
    )
}

export default Clinics