import React from 'react'

const ContactMap = () => {
    return (
        <>
            <div className="container-fluid mt-100 mt-60">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.5902380654366!2d32.60185114416244!3d0.33112627018022406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb957772b7af%3A0x170c3fc96e5ebc2e!2s18%20Lugogo%20By-Pass%2C%20Kampala!5e0!3m2!1sen!2sug!4v1652438193126!5m2!1sen!2sug" width="600" height="450" style={{ border: 0 }} title='Map' allowFullScreen="yes" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMap