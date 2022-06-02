import React from 'react'

const AppointmentModal = (props) => {
    const { show, setShowModal } = props;

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className={`modal modal-blur fade bg-gray ${show ? 'display-block show' : 'display-none'}`} id="appointmentform" tabIndex="-1" onClick={handleClose} aria-labelledby="exampleModalLabel" aria-hidden={!show} aria-modal={show} role={show ? 'dialog' : ''} >
                <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => { e.stopPropagation(); }} >
                    <div className="modal-content">
                        <div className="modal-header border-bottom p-3">
                            <h5 className="modal-title" id="exampleModalLabel">Book an Appointment</h5>
                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 pt-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                            <select className="form-control department-name select2input">
                                                <option defaultValue="">Select Patient</option>
                                                <option defaultValue="EY">John Rico</option>
                                                <option defaultValue="GY">Joseph Crocks</option>
                                                <option defaultValue="PS">Ben Simon</option>
                                                <option defaultValue="OR">Peter River</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                            <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Departments</label>
                                            <select className="form-control department-name select2input">
                                                <option defaultValue="EY">Eye Care</option>
                                                <option defaultValue="GY">Gynecologist</option>
                                                <option defaultValue="PS">Psychotherapist</option>
                                                <option defaultValue="OR">Orthopedic</option>
                                                <option defaultValue="DE">Dentist</option>
                                                <option defaultValue="GA">Gastrologist</option>
                                                <option defaultValue="UR">Urologist</option>
                                                <option defaultValue="NE">Neurologist</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Doctor</label>
                                            <select className="form-control doctor-name select2input">
                                                <option defaultValue="CA">Dr. Calvin Carlo</option>
                                                <option defaultValue="CR">Dr. Cristino Murphy</option>
                                                <option defaultValue="AL">Dr. Alia Reddy</option>
                                                <option defaultValue="TO">Dr. Toni Kovar</option>
                                                <option defaultValue="JE">Dr. Jessica McFarlane</option>
                                                <option defaultValue="EL">Dr. Elsie Sherman</option>
                                                <option defaultValue="BE">Dr. Bertha Magers</option>
                                                <option defaultValue="LO">Dr. Louis Batey</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"> Date : </label>
                                            <input name="date" type="date" className="flatpickr flatpickr-input form-control" id="checkin-date" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="input-time">Time : </label>
                                            <input name="time" type="time" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentModal