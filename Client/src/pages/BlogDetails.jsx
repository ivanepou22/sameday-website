import React from 'react'
import { Header, Footer, HeroSection } from '../components';

const BlogDetails = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Blog Details"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
            />
            <Footer />
        </>
    )
}

export default BlogDetails