import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getService, serviceSelector } from "../feautures/services/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart, BsCartPlus } from "react-icons/bs";
import { addToCart, cartSelector, clearItemFromCart } from "../feautures/cart/cartSlice";

const ServiceDetailSection = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { service } = useSelector(serviceSelector);
    const { cart } = useSelector(cartSelector);

    const isInCart = cart.some((item) => item.id === id);
    //   quantity is the quantity property of the current cart item in the cart
    const quantity = cart.find((item) => item.id === id)?.quantity || 0;

    useEffect(() => {
        dispatch(getService(id));
    }, [dispatch, id]);

    console.log(isInCart);
    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="slider slider-for">
                                <div>
                                    <img src={service.image ? service.image : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png"} className="img-fluid rounded" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-md-4">
                                <h4 className="title">{service.name}</h4>
                                <h5 className="text-muted">
                                    {service?.price?.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'UGX',
                                        maximumFractionDigits: 2,
                                    })}
                                </h5>
                                <ul className="list-unstyled text-warning h5 mb-0">
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="mdi mdi-star"></i>
                                    </li>
                                    <li className="list-inline-item me-2 h6 text-muted">(20 Ratting)</li>
                                </ul>

                                <h5 className="mt-4 py-2">Overview :</h5>
                                <p className="text-muted">{service.description}</p>

                                <div className="d-flex shop-list align-items-center">
                                    <h6 className="mb-0">Quantity:</h6>
                                    <div className="qty-icons ms-3">
                                        <input
                                            min="0"
                                            name="quantity"
                                            value={quantity}
                                            type="number"
                                            readOnly
                                            className="btn btn-pills btn-icon btn-primary qty-btn quantity margin-left-right-10 "
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <Link to="/shop" className="btn btn-primary mt-3">
                                        <BsCartPlus /> Shop Now
                                    </Link>
                                    {
                                        isInCart ? (
                                            <Link
                                                to="#"
                                                className="btn btn-soft-primary ms-2 mt-3"
                                            >
                                                <BsCart /> Go to Cart
                                            </Link>
                                        ) : (
                                            <Link
                                                to="#"
                                                onClick={() => dispatch(addToCart(service))}
                                                className="btn btn-soft-primary ms-2 mt-3"
                                            >
                                                <BsCart /> Add to Cart
                                            </Link>
                                        )
                                    }

                                    {/* {isInCart && (
                    <Link
                      to="#"
                      onClick={() => dispatch(clearItemFromCart(service))}
                      className="btn btn-red ms-2 mt-3"
                    >
                      <AiOutlineClose /> Remove From Cart
                    </Link>
                  )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailSection;
