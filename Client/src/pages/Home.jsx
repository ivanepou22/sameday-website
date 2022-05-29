/* eslint-disable */
import React from 'react'
import { Header, HomeServices, Footer, HeroHome, WellnessPackages, Wellness02, RadiologySection } from '../components';

const Home = () => {
    return (
        <>
            <Header />
            <HeroHome />
            <HomeServices />
            <Wellness02 />
            <WellnessPackages />
            <RadiologySection />
            <Footer />
        </>
    )
}

export default Home