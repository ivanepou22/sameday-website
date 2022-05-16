import React from 'react'
import bgContact from '../assets/images/PIX/contact.jpg';

const ContactImage = () => {
    console.log(bgContact);
    return (
        <>
            <div className="col-lg-5 col-md-6 padding-0 margin-0">
                <div className="me-lg-5 padding-0 margin-0 contact-img">
                    <img src={bgContact} className="img-fluid" alt="" />
                </div>
            </div>
        </>
    )
}

export default ContactImage