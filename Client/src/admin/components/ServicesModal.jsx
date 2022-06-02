import React from 'react'

const ServicesModal = (props) => {
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
                            <h5 className="modal-title" id="exampleModalLabel">Add a Service</h5>
                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-3 pt-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name <span className="text-danger">*</span></label>
                                            <input name="sName" id="sName" type="text" className="form-control" placeholder="Service Name :" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Image <span className="text-danger">*</span></label>
                                            <input name="image" id="image" type="file" className="form-control" placeholder="Image :" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Description <span className="text-danger">*</span></label>
                                            <textarea name="description" id="description" rows="3" className="form-control" placeholder="Description :"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Category <span className="text-danger">*</span></label>
                                            <select className="form-control doctor-name select2input">
                                                <option defaultValue="">Select Category</option>
                                                <option defaultValue="Wellness">Wellness</option>
                                                <option defaultValue="covid">covid</option>
                                                <option defaultValue="Laboratory">Laboratory</option>
                                                <option defaultValue="Radiology">Radiology</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Sub Items <span className="text-danger">*</span></label>
                                            <select className="form-control doctor-name select2input">
                                                <option defaultValue="">Select Items</option>
                                                <option defaultValue="Wellness">Wellness</option>
                                                <option defaultValue="covid">covid</option>
                                                <option defaultValue="Laboratory">Laboratory</option>
                                                <option defaultValue="Radiology">Radiology</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Price <span className="text-danger">*</span></label>
                                            <input name="price" id="price" type="number" className="form-control" placeholder="12,000 :" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Duration <span className="text-danger">*</span></label>
                                            <input name="duration" id="duration" type="number" className="form-control" placeholder="12.00:" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="float-right">
                                            <button type="submit" className="btn btn-primary">Submit a Service</button>
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

export default ServicesModal