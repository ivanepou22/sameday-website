import React from 'react'

const PatientLogsModal = (props) => {
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
                            <h5 className="modal-title" id="exampleModalLabel">Add a Patient Log</h5>
                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 pt-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Patient ID <span className="text-danger">*</span></label>
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
                                            <label className="form-label"> Engagement Date : <span className="text-danger">*</span></label>
                                            <input name="date" type="date" className="flatpickr flatpickr-input form-control" id="checkin-date" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Activity <span className="text-danger">*</span></label>
                                            <input name="activity" id="activity" type="text" className="form-control" placeholder="Activity... :" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Initiation Direction <span className="text-danger">*</span></label>
                                            <select className="form-control department-name select2input">
                                                <option defaultValue="">Select Direction</option>
                                                <option defaultValue="incomingCall">Incoming Call</option>
                                                <option defaultValue="OutGoingCall">Outgoing Call</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Engagement Type <span className="text-danger">*</span></label>
                                            <select className="form-control department-name select2input">
                                                <option defaultValue="">Select Type</option>
                                                <option defaultValue="phone">Phone Call</option>
                                                <option defaultValue="email">Email</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Notes <span className="text-danger">*</span></label>
                                            <textarea name="notes" id="notes" rows="3" className="form-control" placeholder="Notes... :"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="float-right">
                                            <button type="submit" className="btn btn-primary">Submit a Log</button>
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

export default PatientLogsModal