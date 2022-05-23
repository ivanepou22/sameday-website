import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

//images
import img1 from '../assets/images/pharmacy/shop/ashwagandha.jpg';
import img2 from "../assets/images/pharmacy/shop/diabend.jpg";
import img4 from "../assets/images/pharmacy/shop/handwash.jpg";

const CartSection = () => {
    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table table-center table-padding mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{ minWidth: '20px' }}></th>
                                            <th className="border-bottom p-3" style={{ minWidth: '300px' }}>Product</th>
                                            <th className="border-bottom text-center p-3" style={{ minWidth: '160px' }}>Price</th>
                                            <th className="border-bottom text-center p-3" style={{ minWidth: '190px' }}>Qty</th>
                                            <th className="border-bottom text-end p-3" style={{ minWidth: '50px' }}>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="h5 p-3 text-center"><Link to="/" className="text-danger"><AiOutlineClose /></Link></td>
                                            <td className="p-3">
                                                <div className="d-flex align-items-center">
                                                    <img src={img1} className="img-fluid avatar avatar-small rounded shadow" style={{ height: 'auto' }} alt="" />
                                                    <h6 className="mb-0 ms-3">Ashwagandha Churna</h6>
                                                </div>
                                            </td>
                                            <td className="text-center p-3">$ 255.00</td>
                                            <td className="text-center shop-list p-3">
                                                <div className="qty-icons">
                                                    <button className="btn btn-icon btn-primary minus">-</button>
                                                    <input min="0" name="quantity" defaultValue="2" type="number" className="btn btn-icon btn-primary qty-btn quantity margin-left-right-10" />
                                                    <button className="btn btn-icon btn-primary plus">+</button>
                                                </div>
                                            </td>
                                            <td className="text-end font-weight-bold p-3">$510.00</td>
                                        </tr>

                                        <tr>
                                            <td className="h5 p-3 text-center"><Link to="/" className="text-danger"><AiOutlineClose /></Link></td>
                                            <td className="p-3">
                                                <div className="d-flex align-items-center">
                                                    <img src={img2} className="img-fluid avatar avatar-small rounded shadow" style={{ height: 'auto' }} alt="" />
                                                    <h6 className="mb-0 ms-3">Diabend</h6>
                                                </div>
                                            </td>
                                            <td className="text-center p-3">$ 520.00</td>
                                            <td className="text-center shop-list p-3">
                                                <div className="qty-icons">
                                                    <button className="btn btn-icon btn-primary minus">-</button>
                                                    <input min="0" name="quantity" defaultValue="1" type="number" className="btn btn-icon btn-primary qty-btn quantity margin-left-right-10" />
                                                    <button className="btn btn-icon btn-primary plus">+</button>
                                                </div>
                                            </td>
                                            <td className="text-end font-weight-bold p-3">$520.00</td>
                                        </tr>
                                        <tr>
                                            <td className="h5 p-3 text-center"><Link to="/" className="text-danger"><AiOutlineClose /></Link></td>
                                            <td className="p-3">
                                                <div className="d-flex align-items-center">
                                                    <img src={img4} className="img-fluid avatar avatar-small rounded shadow" style={{ height: 'auto' }} alt="" />
                                                    <h6 className="mb-0 ms-3">Dettol handwash</h6>
                                                </div>
                                            </td>
                                            <td className="text-center p-3">$ 260.00</td>
                                            <td className="text-center shop-list p-3">
                                                <div className="qty-icons">
                                                    <button className="btn btn-icon btn-primary minus">-</button>
                                                    <input min="0" name="quantity" defaultValue="2" type="number" className="btn btn-icon btn-primary qty-btn quantity margin-left-right-10" />
                                                    <button className="btn btn-icon btn-primary plus">+</button>
                                                </div>
                                            </td>
                                            <td className="text-end font-weight-bold p-3">$520.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 mt-4 pt-2">
                            <Link to="/shop" className="btn btn-primary">Shop More</Link>
                            <Link to="/shop" className="btn btn-soft-primary ms-2">Update Cart</Link>
                        </div>
                        <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                            <div className="table-responsive bg-white rounded shadow">
                                <table className="table table-center table-padding mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="h6 p-3">Subtotal</td>
                                            <td className="text-end font-weight-bold p-3">$ 2190</td>
                                        </tr>
                                        <tr>
                                            <td className="h6 p-3">Taxes</td>
                                            <td className="text-end font-weight-bold p-3">$ 219</td>
                                        </tr>
                                        <tr className="bg-light">
                                            <td className="h6 p-3">Total</td>
                                            <td className="text-end font-weight-bold p-3">$ 2409</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 pt-2 text-end">
                                <Link to="/checkout" className="btn btn-primary">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartSection