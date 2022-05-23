import React from 'react'
import { CartSection, Footer, Header, HeroSection } from '../components'

const ShoppingCart = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Shopping Cart"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
            />
            <CartSection />
            <Footer />
        </>
    )
}

export default ShoppingCart