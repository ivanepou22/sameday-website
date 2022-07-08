import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { serviceSelector, getServices } from '../feautures/services/serviceSlice';
import { Footer, Header, HeroSection, CovidPackages } from '../components'

const CovidTesting = () => {
    const dispatch = useDispatch();
    const { services } = useSelector(serviceSelector);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    return (
        <>
            <Header />
            <HeroSection
                pageName="Covid-19 Testing"
                pageDescription="
                    With our expertise, professionalism, state-of-the-art and
                    highly sterile laboratories for your test needs, highly
                    skilled, trained and experienced staff, we aim to be the
                    leading voice of transformation and improvement of
                    health care in Uganda.
                "
                companyName="SameDay Laboratories"
                showBreadcrumb={true}
            />
            <CovidPackages services={services} />
            <Footer />
        </>
    )
}

export default CovidTesting