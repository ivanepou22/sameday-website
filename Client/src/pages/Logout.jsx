import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BounceLoader } from "react-spinners";
import { authSelector, logout } from '../feautures/auth/authSlice'
import { useEffect } from 'react';

const Logout = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(authSelector);

    useEffect(() => {
        dispatch(logout());
    }
        , [dispatch]);

    return (
        <>
            <div className="container justify-content-center height-100-vh">
                <div className="row justify-content-center height-100">
                    <div className="logout-spinner">
                        <BounceLoader size={100} />
                        <span className="alert alert-secondary align-text-center mt-1">
                            You are being logged out...
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout