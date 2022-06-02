import React from 'react'

const DoctorsModal = (props) => {
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
                            <h5 className="modal-title" id="exampleModalLabel">Add a Doctor</h5>
                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 pt-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                            <input name="f_name" id="f_name" type="text" className="form-control" placeholder="Your Full Name :" />
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
                                            <label className="form-label">Image <span className="text-danger">*</span></label>
                                            <input name="image" id="image" type="file" className="form-control" />
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
                                            <label className="form-label">Specialties</label>
                                            <select className="form-control doctor-name select2input">
                                                <option defaultValue="">Select Specialty</option>
                                                <option defaultValue="CA">General Doctor</option>
                                                <option defaultValue="CR">Pediatrician</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="float-right">
                                            <button type="submit" className="btn btn-primary">Submit a Doctor</button>
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

export default DoctorsModal