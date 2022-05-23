/* eslint-disable */
import React from 'react'
import Sliders from './Sliders';
import bg from "../assets/images/bg//AlarmingUnselfishKangaroo-size_restricted.gif";

const HeroHome = () => {
    const styles = {
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return (
        <>
            <div className="height-70vh bg-gray home-hero" style={styles}>
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
