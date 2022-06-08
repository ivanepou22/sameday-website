/* eslint-disable */
import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feautures/cart/cartSlice";

const WellnessPackages = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState({
    quantity: 0,
    id: "",
  });
  const { services } = props;

  const handleAddToCart = (e, service) => {
    setQuantity((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
      id: service.id,
    }));
    if (e.target.id === service.id) {
      dispatch(addToCart(service));
    }
  };
  const handleRemoveFromCart = (e, service) => {
    quantity > 0
      ? setQuantity((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
        id: service.id,
      }))
      : setQuantity({
        quantity: 0,
        id: "",
      });
    if (quantity > 0 && e.target.id === service.id) {
      dispatch(removeFromCart(service));
    }
  };
  return (
    <>
      <section className="section font-size-15 padding-top-bottom-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <span className="badge badge-pill badge-soft-primary mb-3">Packages</span>
                <h4 className="choose-title mb-4">Wellness Packages</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                  Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic,
                  Laboratory and Diagnostic Center focused on preventive care.
                </p>
                <div className="mt-4">
                  <Link to="/shop" className="btn btn-orange">
                    {" "}
                    Shop Now <RiArrowRightSLine />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row font-size-15 md-5">
            {services?.map((service) => {
              return (
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={service.id}>
                  <div className="card shop-list border-0">
                    <div className="shop-image position-relative overflow-hidden rounded shadow">
                      <Link to="/service-details">
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
                          <Link to="#" className="btn btn-icon btn-pills btn-soft-danger">
                            <AiOutlineHeart />
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link to="#" className="btn btn-icon btn-pills btn-soft-primary">
                            <AiOutlineEye />
                          </Link>
                        </li>
                        <li className="mt-2">
                          <Link to="#" className="btn btn-icon btn-pills btn-soft-warning">
                            <AiOutlineShoppingCart />
                          </Link>
                        </li>
                      </ul>

                      <div className="qty-icons">
                        <button
                          id={service.id}
                          onClick={(e) => handleRemoveFromCart(e, service)}
                          className="btn btn-pills btn-icon btn-primary minus mx-1"
                        >
                          -
                        </button>
                        <input
                          min="0"
                          defaultValue={quantity.quantity}
                          value={quantity.quantity}
                          name="quantity"
                          type="number"
                          readOnly
                          className="btn btn-pills btn-icon btn-primary qty-btn quantity mx-1"
                        />
                        <button
                          id={service.id}
                          onClick={(e) => handleAddToCart(e, service)}
                          className="btn btn-pills btn-icon btn-primary plus"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="card-body content pt-4 p-2">
                      <Link to="/service-details" className="text-dark product-name h6">
                        {service.name}
                      </Link>
                      <div className="d-flex justify-content-between mt-1">
                        <h6 className="text-muted small font-italic mb-0 mt-1">{service.price} </h6>
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessPackages;
