import React, { useState } from 'react'
import { toast } from "react-toastify";
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectOptions, customStyles } from '../../data/SelectOptions';
import { serviceSelector, createService } from '../../feautures/services/serviceSlice';
import { imageSelector, UploadImage, reset } from '../../feautures/image/imageSlice';

const ServicesModal = (props) => {
    const dispatch = useDispatch();
    const { isLoading, isError, errorMessage, service } = useSelector(serviceSelector);
    const { imageUrl } = useSelector(imageSelector);
    const { show, setShowModal } = props;
    const [subItems, setSubItems] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        duration: "",
        category: "",
        niche: "",
        image: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: [e.target.value],
        }));
    };

    const handleImageChange = (e) => {
        dispatch(reset());
        const ps = new Promise((resolve, reject) => {
            const data = new FormData();
            data.append("file", e.target.files[0]);
            data.append("upload_preset", "ggikucjk");
            resolve(dispatch(UploadImage(data)));
        });
        toast.promise(ps, {
            pending: "Uploading...",
            success: "Image uploaded successfully",
            error: "Image upload failed",
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formData);
        if (imageUrl) {
            dispatch(
                createService({
                    name: formData.name[0],
                    description: formData.description[0],
                    price: formData.price[0],
                    duration: formData.duration[0],
                    category: formData.category[0],
                    niche: formData.niche,
                    subItems: subItems,
                    image: imageUrl,
                })
            );
        } else {
            toast.error("Please upload an image");
            return;
        }
    };

    const handleClose = () => {
        setShowModal(false);
    }

    // handle multi select
    const selectFn = (e) => {
        e.forEach(el => {
            subItems?.includes(el.value) ? console.log('yes') : setSubItems([...subItems, el.value])
        })
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
                            {service && service.id && <div className="alert alert-success">Service created successfully</div>}
                            {isError && <div className="alert alert-danger">{errorMessage}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name <span className="text-danger">*</span></label>
                                            <input
                                                name="name"
                                                id="sName"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Service Name :" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Image <span className="text-danger">*</span></label>
                                            <input
                                                name='image'
                                                onChange={handleImageChange}
                                                value={formData.image}
                                                id="image"
                                                type="file"
                                                className="form-control"
                                                placeholder="Image :"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Description <span className="text-danger">*</span></label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                id="description"
                                                rows="3"
                                                className="form-control"
                                                placeholder="Description :">

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Category <span className="text-danger">*</span></label>
                                            <select
                                                className="form-control doctor-name select2input"
                                                name='category'
                                                value={formData.category}
                                                onChange={handleChange}
                                            >
                                                <option defaultValue="">Select Category</option>
                                                <option defaultValue="Wellness">Wellness</option>
                                                <option defaultValue="COVID">covid</option>
                                                <option defaultValue="Laboratory">Laboratory</option>
                                                <option defaultValue="Radiology">Radiology</option>
                                                <option defaultValue="Clinic">Clinics</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Sub Items <span className="text-danger">*</span></label>
                                            <Select
                                                name="subItems"
                                                defaultInputValue={subItems}
                                                onChange={(e) => selectFn(e)}
                                                options={selectOptions}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 0,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#61DAFB',
                                                        primary: '#61DAFB',
                                                    },
                                                })}
                                                styles={customStyles}
                                                isMulti
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Price <span className="text-danger">*</span></label>
                                            <input
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                id="price"
                                                type="number"
                                                className="form-control"
                                                placeholder="12,000 :"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Niche <span className="text-danger">*</span></label>
                                            <select
                                                className="form-control doctor-name select2input"
                                                name='niche'
                                                value={formData.niche}
                                                onChange={handleChange}
                                            >
                                                <option defaultValue="">Select Niche</option>
                                                <option defaultValue="Women">Women</option>
                                                <option defaultValue="Men">Men</option>
                                                <option defaultValue="Children">Children</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Duration <span className="text-danger">*</span></label>
                                            <input
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                id="duration"
                                                type="number"
                                                className="form-control"
                                                placeholder="12.00:" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="float-right">
                                            <button type="submit" className="btn btn-primary">
                                                {
                                                    isLoading ? 'Loading...' : ' Submit a Service'
                                                }
                                            </button>
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