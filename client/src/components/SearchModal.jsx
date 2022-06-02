/* eslint-disable */
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
    return (
        <>
            <div className={`offcanvas bg-white offcanvas-top ${showSearchModal ? 'show visible' : ''}`} tabIndex="-1" id="offcanvasTop" aria-modal={showSearchModal} role={showSearchModal ? 'dialog' : ''}>
                <div className="offcanvas-body d-flex align-items-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="text-center position-relative">
                                    <h4>Search now.....</h4>
                                    <VscChromeClose className="text-dark font-size-20 position-absolute curser-pointer search-close" onClick={() => setShowSearchModal(false)} />
                                    <div className="subcribe-form mt-4">
                                        <form>
                                            <div className="mb-0">
                                                <input type="text" id="help" name="name" className="border bg-white rounded-pill font-size-14" required="" placeholder="Search..." />
                                                <button type="submit" className="btn btn-pills btn-orange top-10">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchModal