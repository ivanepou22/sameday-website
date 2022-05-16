import React from 'react'
import { Footer, Header, HeroSection } from '../components'
import { ContactImage, ContactMap, ContactForm, ContactInfo } from '../components'

const Contact = () => {
    const pageName = 'Contact Us';
    const pageDescription = 'We Would Love To Hear From You Please Send Us A Message Here.';
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