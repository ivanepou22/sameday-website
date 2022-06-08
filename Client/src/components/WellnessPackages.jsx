/* eslint-disable */
import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

const WellnessPackages = (props) => {
    const [quantity, setQuantity] = React.useState(1);
    const { services } = props;
    return (
        <>
            <section className="section font-size-15 padding-top-bottom-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge badge-pill badge-soft-primary mb-3">Packages</span>
                                <h4 className="choose-title mb-4">Wellness Packages</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care.</p>
                                <div className="mt-4">
                                    <Link to="/shop" className="btn btn-orange"> Shop Now <RiArrowRightSLine /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        services?.map((service, index) => {
                            return (
                                <div className="row font-size-15 md-5" key={service.id}>
                                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div className="card shop-list border-0">
                                            <div className="shop-image position-relative overflow-hidden rounded shadow">
                                                <Link to="/service-details"><img src={service.image} className="img-fluid" alt="" /></Link>
                                                <ul className="list-unstyled shop-icons">
                                                    <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                                    <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                                    <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                                </ul>

                                                <div className="qty-icons">
                                                    <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                                    <input min="0" defaultValue={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                                    <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                                </div>
                                            </div>
                                            <div className="card-body content pt-4 p-2">
                                                <Link to="/service-details" className="text-dark product-name h6">{service.name}</Link>
                                                <div className="d-flex justify-content-between mt-1">
                                                    <h6 className="text-muted small font-italic mb-0 mt-1">{service.price} </h6>
                                                    <ul className="list-unstyled text-warning mb-0">
                                                        <li className="list-inline-item"><BsStarFill /></li>
                                                        <li className="list-inline-item"><BsStarFill /></li>
                                                        <li className="list-inline-item"><BsStarFill /></li>
                                                        <li className="list-inline-item"><BsStarFill /></li>
                                                        <li className="list-inline-item"><BsStarFill /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default WellnessPackages