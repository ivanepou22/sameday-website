import React from 'react'

const CheckoutSection = () => {
    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <div className="card rounded shadow p-4 border-0">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="h5 mb-0">Your cart</span>
                                    <span className="badge bg-primary rounded-pill">3</span>
                                </div>
                                <ul className="list-group mb-3 border">
                                    <li className="d-flex justify-content-between lh-sm p-3 border-bottom">
                                        <div>
                                            <h6 className="my-0">Product name</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$12</span>
                                    </li>
                                    <li className="d-flex justify-content-between lh-sm p-3 border-bottom">
                                        <div>
                                            <h6 className="my-0">Second product</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$8</span>
                                    </li>
                                    <li className="d-flex justify-content-between lh-sm p-3 border-bottom">
                                        <div>
                                            <h6 className="my-0">Third item</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted">$5</span>
                                    </li>
                                    <li className="d-flex justify-content-between bg-light p-3 border-bottom">
                                        <div className="text-success">
                                            <h6 className="my-0">Promo code</h6>
                                            <small>EXAMPLECODE</small>
                                        </div>
                                        <span className="text-success">−$5</span>
                                    </li>
                                    <li className="d-flex justify-content-between p-3">
                                        <span>Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                </ul>

                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Promo code" />
                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-7 col-lg-8">
                            <div className="card rounded shadow p-4 border-0">
                                <h5 className="mb-3">Billing address</h5>
                                <form className="needs-validation" novalidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="username" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text bg-light text-muted border">@</span>
                                                <input type="text" className="form-control" id="username" placeholder="Username" required />
                                                <div className="invalid-feedback"> Your username is required. </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="email" className="form-label">Email <span
                                                className="text-muted">(Optional)</span></label>
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                                                required />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address2" className="form-label">Address 2 <span
                                                className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                        </div>

                                        <div className="col-md-5">
                                            <label for="country" className="form-label">Country</label>
                                            <select className="form-select form-control" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <label for="state" className="form-label">State</label>
                                            <select className="form-select form-control" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-check mt-4 pt-4 border-top">
                                        <input type="checkbox" className="form-check-input" id="same-address" />
                                        <label className="form-check-label" for="same-address">Shipping address is the same as my
                                            billing address</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="save-info" />
                                        <label className="form-check-label" for="save-info">Save this information for next
                                            time</label>
                                    </div>
                                    <div className="padding-top-20 float-right">
                                        <button className="btn btn-primary" type="submit">Continue to checkout</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckoutSection