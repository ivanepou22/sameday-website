import React from 'react'
import { Link } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import same_day_logo from '../assets/images/Sameday-original.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineDribbble } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'

const Settings = ({ showSettings, setShowSettings }) => {
    return (
        <>
            <div className={`offcanvas offcanvas-end bg-white shadow ${showSettings ? 'show visible' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" role={showSettings ? 'dialog' : ''} aria-modal={showSettings} >
                <div className="offcanvas-header p-4 border-bottom">
                    <h5 id="offcanvasRightLabel" className="mb-0">
                        <img src={same_day_logo} height="24" className="light-version" alt="" />
                    </h5>
                    <RiCloseLine className='text-dark font-size-20 curser-pointer' onClick={() => setShowSettings(false)} />
                </div>
                <div className="offcanvas-body p-4 px-md-5">
                    <div className="row">
                        <div className="col-12">
                            <div id="style-switcher">
                                <div>
                                    {/* Here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas-footer p-4 border-top text-center">
                    <ul className="list-unstyled social-icon mb-0">
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><AiOutlineShoppingCart className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><AiOutlineDribbble className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><FiFacebook className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><FiInstagram className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><FiTwitter className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" className="rounded link-data"><BiEnvelope className="icon-font" /></Link></li>
                        <li className="list-inline-item mb-0 margin-lr-10"><Link to="/" target="_blank" className="rounded link-data"><BsGlobe className="icon-font" /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Settings