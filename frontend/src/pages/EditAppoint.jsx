import React from 'react'
import { EditAppointment, Footer, Header, HeroSection,  } from '../components'

const EditAppoint = () => {
  return (
    <>
        <Header />
        <HeroSection
            pageName="Edit Appointment"
            pageDescription="We Would Love To Hear From You Please Send Us A Message Here."
            companyName="SameDay Laboratories"
            showBreadcrumb={true}
        />
        <EditAppointment />
        <Footer />
    </>
  )
}

export default EditAppoint