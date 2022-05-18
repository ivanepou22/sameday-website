/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs';

//images
import img1 from "../assets/images/pharmacy/shop/thermometer.jpg";
import img2 from "../assets/images/pharmacy/shop/stethoscope.jpg";
import img3 from "../assets/images/pharmacy/shop/pulse-oximeter.jpg";
import img4 from "../assets/images/pharmacy/shop/medicine.jpg";
import img5 from "../assets/images/pharmacy/shop/smoking-habit.jpg"
import img6 from "../assets/images/pharmacy/shop/sanitizer.jpg";
import img7 from "../assets/images/pharmacy/shop/nicotex.jpg";
import img8 from "../assets/images/pharmacy/shop/medigrip.jpg";
import img9 from "../assets/images/pharmacy/shop/masks.jpg";
import img10 from "../assets/images/pharmacy/shop/handwash.jpg";
import img11 from "../assets/images/pharmacy/shop/herbal-care.jpg";
import img12 from "../assets/images/pharmacy/shop/medical-equptment.jpg";



const ShopSection = () => {
    const [quantity, setQuantity] = React.useState(1);
    console.log(setQuantity);
    return (
        <>
            <section className="section font-size-15">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="mb-0">Most Viewed Products</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <ul className="label list-unstyled mb-0">
                                    <li><Link to="/" className="badge badge-pill badge-success">Featured</Link></li>
                                </ul>
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="pharmacy-product-detail.html"><img src={img1} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Thermometer</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img2} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Stethoscope</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img3} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Pulse oximeter</Link>
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
                        {/* 0777618201 */}
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="pharmacy-product-detail.html"><img src={img4} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Medicine pills</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img5} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Smokill smoking habit</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img6} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Sanitizer</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img7} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Nicotex</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img8} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Medigrip</Link>
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

                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="mb-0">Categories</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-4 pt-2">
                            <div className="slider-range-four">
                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/skin.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Skin</span><br />Care</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/sexual.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Sexual</span><br />Wallness</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/weight.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Weight</span><br />Management</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/pain.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Pain</span><br />Relief</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/heart.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Heart</span><br />Health</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/cough.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Cough</span><br /> & Cold</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/diabetes.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Diabetes</span><br />Care</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="tiny-slide">
                                    <Link to="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                        <img src="../assets/images/pharmacy/cancer.jpg" className="img-fluid" alt="" />
                                        <div className="category-title">
                                            <span className="text-dark title-white"><span className="h5">Cancer</span><br />Care</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="py-5 px-4 rounded shadow" style={{ background: `url('') center` }} >
                        <div className="row my-lg-5">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h1 className="title mb-4">Clinical Equipments <br /> Stellar Price</h1>
                                    <p className="para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary">Shop now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="mb-0">Popular Products</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                            <div className="card shop-list border-0">
                                <ul className="label list-unstyled mb-0">
                                    <li><Link to="/" className="badge badge-pill badge-success">Featured</Link></li>
                                </ul>
                                <div className="shop-image position-relative overflow-hidden rounded shadow">
                                    <Link to="pharmacy-product-detail.html"><img src={img9} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Face masks</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img10} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Dettol handwash</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img11} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Herbal care product</Link>
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
                                    <Link to="pharmacy-product-detail.html"><img src={img12} className="img-fluid" alt="" /></Link>
                                    <ul className="list-unstyled shop-icons">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><AiOutlineHeart /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><AiOutlineEye /></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-warning"><AiOutlineShoppingCart /></Link></li>
                                    </ul>

                                    <div className="qty-icons">
                                        <button className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" value={quantity} name="quantity" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity" />
                                        <button className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                                <div className="card-body content pt-4 p-2">
                                    <Link to="pharmacy-product-detail.html" className="text-dark product-name h6">Medical equptment</Link>
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

export default ShopSection