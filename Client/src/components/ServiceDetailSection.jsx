import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineClose } from 'react-icons/ai'
import { BsCart, BsCartPlus } from 'react-icons/bs'
import img1 from "../assets/images/pharmacy/shop/01.jpg"

const ServiceDetailSection = () => {
    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="slider slider-for">
                                <div><img src={img1} className="img-fluid rounded" alt="" /></div>
                            </div>
                        </div>

                        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-md-4">
                                <h4 className="title">Plastic Medicine Box</h4>
                                <h5 className="text-muted">$21.00 </h5>
                                <ul className="list-unstyled text-warning h5 mb-0">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item me-2 h6 text-muted">(20 Ratting)</li>
                                </ul>

                                <h5 className="mt-4 py-2">Overview :</h5>
                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>

                                <div className="d-flex shop-list align-items-center">
                                    <h6 className="mb-0">Quantity:</h6>
                                    <div className="qty-icons ms-3">
                                        <button className="btn btn-icon btn-primary minus">-</button>
                                        <input min="0" name="quantity" defaultValue="1" type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity margin-left-right-10 " />
                                        <button className="btn btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <Link to="/shop" className="btn btn-primary"><BsCartPlus /> Shop Now</Link>
                                    <Link to="#" className="btn btn-soft-primary ms-2"><BsCart /> Add to Cart</Link>
                                    <Link to="#" className="btn btn-red ms-2"> <AiOutlineClose /> Remove From Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailSection