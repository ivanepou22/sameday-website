import React, { useEffect } from 'react'
import { Footer, Header, HeroSection, WellnessContent, WellnessPackages } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { serviceSelector, getServices } from '../feautures/services/serviceSlice';

const WellnessCenter = () => {
    const dispatch = useDispatch();
    const { services } = useSelector(serviceSelector);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    console.log(services);

    return (
        <>
            <Header />
            <HeroSection
                pageName="Wellness Center"
                pageDescription="
                    One of the unique things that sets us apart from others is that we focus on
                    wellness and preventive care for our patients -we have a highly skilled team
                    of health care professionals including nurses and doctors that will evaluate
                    the results of our patient's lab studies and give you advice accordingly.
                "
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <WellnessContent />
            <WellnessPackages services={services} />
            <Footer />
        </>
    )
}

export default WellnessCenter