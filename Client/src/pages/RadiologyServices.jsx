import React from 'react'
import { Footer, Header, HeroSection } from '../components';

const RadiologyServices = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Radiology Services"
                pageDescription="
                    We have a comprehensive radiology department that includes x-rays ultrasound and ECG‘s to
                    further give a more in-depth analysis as to what is going on with the patient.
                    X-ray imaging is the fastest and easiest way for us to view and assess broken bones, joints or other
                    injuries to a patient.
                "
                companyName="SameDay Laboratories"
            />
            <Footer />
        </>
    )
}

export default RadiologyServices