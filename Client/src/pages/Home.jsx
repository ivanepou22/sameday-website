/* eslint-disable */
import React, { useEffect } from "react";
import {
  Header,
  HomeServices,
  Footer,
  HeroHome,
  WellnessPackages,
  Wellness02,
  RadiologySection,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { serviceSelector, getServices } from "../feautures/services/serviceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { services } = useSelector(serviceSelector);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  //limited to 8 services
  const servicesList = services.slice(0, 8);

  return (
    <>
      <Header />
      <HeroHome />
      <HomeServices />
      <Wellness02 />
      <WellnessPackages services={servicesList} />
      <RadiologySection />
      <Footer />
    </>
  );
};

export default Home;
