import React from 'react'
import { Footer, Header, HeroSection } from '../components'
import { ContactImage, ContactMap, ContactForm, ContactInfo } from '../components'

const Contact = () => {
    const pageName = 'Contact Us';
    const pageDescription = 'Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.';
    const companyName = 'SameDay Laboratories';
    return (
        <>
            <Header />
            <HeroSection pageName={pageName} pageDescription={pageDescription} companyName={companyName} />
            <section className="margin-tp-3rem mt-60 font-size-15">
                <ContactInfo />
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        <ContactImage />
                        <ContactForm />
                    </div>
                </div>
                <ContactMap />
            </section>
            <Footer />
        </>
    )
}

export default Contact