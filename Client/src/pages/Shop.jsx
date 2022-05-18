/* eslint-disable */
import React from 'react'
import { Header, Footer, ShopSection, HeroSection } from '../components'

const Shop = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Shop"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
            />
            <ShopSection />
            <Footer />
        </>
    )
}

export default Shop