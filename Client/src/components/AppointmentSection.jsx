import React from 'react'

const AppointmentSection = () => {
    return (
        <>
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow rounded overflow-hidden">
                                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link rounded-0 active" id="clinic-booking" data-bs-toggle="pill" href="#pills-clinic" role="tab" aria-controls="pills-clinic" aria-selected="false">
                                            <div className="text-center pt-1 pb-1">
                                                <h4 className="title fw-normal mb-0">Book An Appointment</h4>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content p-4" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-clinic" role="tabpanel" aria-labelledby="clinic-booking">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label"> Date : <span className="text-danger">*</span></label>
                                                        <input name="date" type="date" className="flatpickr flatpickr-input form-control" id="checkin-date" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" for="input-time">Time : <span className="text-danger">*</span></label>
                                                        <input name="time" type="time" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Departments</label>
                                                        <select className="form-control department-name select2input">
                                                            <option value="EY">Eye Care</option>
                                                            <option value="GY">Gynecologist</option>
                                                            <option value="PS">Psychotherapist</option>
                                                            <option value="OR">Orthopedic</option>
                                                            <option value="DE">Dentist</option>
                                                            <option value="GA">Gastrologist</option>
                                                            <option value="UR">Urologist</option>
                                                            <option value="NE">Neurologist</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Doctor</label>
                                                        <select className="form-control doctor-name select2input">
                                                            <option value="CA">Dr. Calvin Carlo</option>
                                                            <option value="CR">Dr. Cristino Murphy</option>
                                                            <option value="AL">Dr. Alia Reddy</option>
                                                            <option value="TO">Dr. Toni Kovar</option>
                                                            <option value="JE">Dr. Jessica McFarlane</option>
                                                            <option value="EL">Dr. Elsie Sherman</option>
                                                            <option value="BE">Dr. Bertha Magers</option>
                                                            <option value="LO">Dr. Louis Batey</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Comments</label>
                                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <button type="submit" className="btn btn-primary float-right">Book An Appointment</button>
                                                </div>
                                            </div>
                                        </form>
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

export default AppointmentSection