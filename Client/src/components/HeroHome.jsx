/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi'
import hero_bg from '../assets/images/about/lab003.jpg';
import same_day_logo from '../assets/images/logo_icon.png'
import Sliders from './Sliders';

const HeroHome = () => {
    return (
        <>
            <div className="height-60vh bg-light-orange">
                <div className="container height-100">
                    <div className="row height-100">
                        <div className="col-12 margin-top-10 height-100">
                            <Sliders />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroHome
