import React from 'react'
import { Footer, Header, HeroSection } from '../components'

const LaboratoryServices = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Laboratory Services"
                pageDescription="
                    We stand for excellence in delivering high quality, safe, effective and efficient medical laboratory diagnostic
                    services. With a focus on excellence, we employ the latest technologies in offering top notch medical
                    diagnostic services and medical laboratory services.
                "
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <Footer />
        </>
    )
}

export default LaboratoryServices