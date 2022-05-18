/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { RiHospitalLine } from 'react-icons/ri'

const TopIcon = () => {
    return (
        <>
            <div className="back-to-home rounded d-none d-sm-block">
                <Link to="/" className="btn btn-icon btn-orange"><RiHospitalLine /></Link>
            </div>
        </>
    )
}

export default TopIcon