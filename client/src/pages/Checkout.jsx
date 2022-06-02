import React from 'react'
import { CheckoutSection, Footer, Header, HeroSection } from '../components'

const Checkout = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Checkout"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <CheckoutSection />
            <Footer />
        </>
    )
}

export default Checkout