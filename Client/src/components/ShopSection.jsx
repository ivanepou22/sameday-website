/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { serviceSelector, getServices } from '../feautures/services/serviceSlice';

//icons
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCart, BsStarFill } from 'react-icons/bs';

const ShopSection = () => {
    const dispatch = useDispatch();
    const { services } = useSelector(serviceSelector);
    const [niche, setNiche] = useState('all');
    //active class for the navbar
    const [activeAll, setActiveAll] = useState(false);
    const [activeWomen, setActiveWomen] = useState(false);
    const [activeMen, setActiveMen] = useState(false);
    const [activeChildren, setActiveChildren] = useState(false);
    const [activeGeneral, setActiveGeneral] = useState(false);

    useEffect(() => {
        if (niche === 'all') {
            setActiveAll(true);
            setActiveWomen(false);
            setActiveMen(false);
            setActiveChildren(false);
            setActiveGeneral(false);
        } else if (niche === 'Women') {
            setActiveAll(false);
            setActiveWomen(true);
            setActiveMen(false);
            setActiveChildren(false);
            setActiveGeneral(false);
        } else if (niche === 'Men') {
            setActiveAll(false);
            setActiveWomen(false);
            setActiveMen(true);
            setActiveChildren(false);
            setActiveGeneral(false);
        } else if (niche === 'Children') {
            setActiveAll(false);
            setActiveWomen(false);
            setActiveMen(false);
            setActiveChildren(true);
            setActiveGeneral(false);
        } else if (niche === 'General') {
            setActiveAll(false);
            setActiveWomen(false);
            setActiveMen(false);
            setActiveChildren(false);
            setActiveGeneral(true);
        } else {
            setActiveAll(false);
            setActiveWomen(false);
            setActiveMen(false);
            setActiveChildren(false);
            setActiveGeneral(false);
        }

        dispatch(getServices());
    }, [dispatch, niche]);

    //filter services by category
    const filterServicesWellness = services?.filter(service => service.category === 'Wellness');
    let filterServicesByNiche = filterServicesWellness;

    //filter services by niche
    if (niche !== 'all') {
        filterServicesByNiche = filterServicesWellness.filter(service => service.niche[0] === niche);
    }

    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="mb-0">WELLNESS CLINIC PACKAGES</h5>
                        </div>
                    </div>
                    <div className="row justify-content-center margin-top-0">
                        <div className="packages-niche">
                            <button className={`btn btn-outline-primary btn-sm btn-block ${activeAll ? 'active': ''}`} onClick={() => setNiche('all')}>All</button>
                            <button className={`btn btn-outline-primary btn-sm btn-block ${activeWomen ? 'active': ''}`} onClick={() => setNiche('Women')}>Women</button>
                            <button className={`btn btn-outline-primary btn-sm btn-block ${activeChildren ? 'active': ''}`} onClick={() => setNiche('Children')}>Children</button>
                            <button className={`btn btn-outline-primary btn-sm btn-block ${activeMen ? 'active': ''}`} onClick={() => setNiche('Men')}>Men</button>
                            <button className={`btn btn-outline-primary btn-sm btn-block ${activeGeneral ? 'active': ''}`} onClick={() => setNiche('General')}>General</button>
                        </div>
                    </div>
                    <div className="row">
                        {filterServicesByNiche?.map((service) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={service.id}>
                                    <div className="card shop-list border-0">
                                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                                            <Link to={`/service-details/${service.id}`}>
                                                <img
                                                    src={
                                                        service.image
                                                            ? service.image
                                                            : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"
                                                    }
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </Link>
                                            <ul className="list-unstyled shop-icons">
                                                <li>
                                                    <Link to="#" className="btn btn-icon btn-pills btn-danger">
                                                        <AiOutlineHeart />
                                                    </Link>
                                                </li>
                                                <li className="mt-2">
                                                    <Link to={`/service-details/${service.id}`} className="btn btn-icon btn-pills btn-primary">
                                                        <AiOutlineEye />
                                                    </Link>
                                                </li>
                                                <li className="mt-2">
                                                    <Link to="#"
                                                        onClick={() => handleAddToCart(service)}
                                                        className="btn btn-icon btn-pills btn-warning"
                                                    >
                                                        <AiOutlineShoppingCart />
                                                    </Link>
                                                </li>
                                            </ul>

                                            <div className="qty-icons">
                                                <button
                                                    onClick={() => handleAddToCart(service)}
                                                    className="btn btn-primary ms-2"><BsCart /> Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="card-body content pt-4 p-2">
                                            <Link to={`/service-details/${service.id}`} className="text-dark product-name h6">
                                                {service.name}
                                            </Link>
                                            <div className="d-flex justify-content-between mt-1">
                                                <h6 className="text-muted small font-italic mb-0 mt-1">
                                                    {service?.price?.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'UGX',
                                                        maximumFractionDigits: 2,
                                                    })}
                                                </h6>
                                                <ul className="list-unstyled text-warning mb-0">
                                                    <li className="list-inline-item">
                                                        <BsStarFill />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <BsStarFill />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <BsStarFill />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <BsStarFill />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <BsStarFill />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopSection