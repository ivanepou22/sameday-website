import { useState } from "react";

const UpdateOrder = (props) => {
    const { show, setShowEditOrder, order } = props;

    const handleClose = () => {
        setShowEditOrder(false);
    };
    const [formData, setFormData] = useState({
        status: "",
      });


    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      handleClose();
    };

    return (
      <>
        <div
          className={`modal modal-blur fade bg-gray ${show ? "display-block show" : "display-none"}`}
          id="appointmentform"
          tabIndex="-1"
          onClick={handleClose}
          aria-labelledby="exampleModalLabel"
          aria-hidden={!show}
          aria-modal={show}
          role={show ? "dialog" : ""}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-content">
              <div className="modal-header border-bottom p-3">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Order Status
                </h5>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-3 pt-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                  <div className="col-lg-6 col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="orderNumber">
                          Order Number:
                        </label>
                        <input
                          name="orderNumber"
                          id="orderNumber"
                          type="text"
                          defaultValue={order.orderNumber}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Order Status <span className="text-danger">*</span>
                        </label>
                        <select
                          value={formData.status}
                          onChange={handleChange}
                          name="status"
                          className="form-control department-name select2input"
                        >
                          <option value="">Select Status</option>
                          <option value="pending">pending</option>
                          <option value="approved">approved</option>
                          <option value="rejected">rejected</option>
                          <option value="delivered">delivered</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="float-right">
                        <button type="submit" className="btn btn-primary">
                          {"Update Order"}
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
    );
  };

export default UpdateOrder