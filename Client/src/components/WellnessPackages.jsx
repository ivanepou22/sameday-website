/* eslint-disable */
import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img9 from "../assets/images/pharmacy/shop/masks.jpg";
import img10 from "../assets/images/pharmacy/shop/handwash.jpg";
import img11 from "../assets/images/pharmacy/shop/herbal-care.jpg";
import img12 from "../assets/images/pharmacy/shop/medical-equptment.jpg";
import img13 from "../assets/images/pharmacy/shop/praganews.jpg";
import img14 from "../assets/images/pharmacy/shop/ashwagandha.jpg";
import img15 from "../assets/images/pharmacy/shop/beby-products.jpg";
import img16 from "../assets/images/pharmacy/shop/kidney-tray.jpg";
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

const WellnessPackages = () => {
    const [quantity, setQuantity] = React.useState(1);
    console.log(setQuantity);
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
                                    <Link to="/wellness-center" className="btn btn-orange"> Shop Now <RiArrowRightSLine /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row font-size-15 md-5">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img13} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Praganews</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img14} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Ashwagandha churna</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img15} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Beby products</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img16} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Kidney tray</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <ul className="label list-unstyled mb-0">
                                    <li><Link to="/" className="badge badge-pill badge-success">Featured</Link></li>
                                </ul>
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img9} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Face masks</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img10} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Dettol handwash</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img11} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Herbal care product</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="/service-details"><img src={img12} className="img-fluid" alt="" /></Link>
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
                                    <Link to="/service-details" className="text-dark product-name h6">Medical equptment</Link>
                                    <div className="d-flex justify-content-between mt-1">
                                        <h6 className="text-muted small font-italic mb-0 mt-1">$16.00 </h6>
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

                </div>
            </section>
        </>
    )
}

export default WellnessPackages