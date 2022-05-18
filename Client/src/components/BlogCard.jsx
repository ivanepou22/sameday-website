/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BiCalendar } from 'react-icons/bi'
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { VscComment } from 'react-icons/vsc'
import { IoIosArrowForward } from 'react-icons/io'

const BlogCard = ({ blog }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2 font-size-15">
                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                    <img src={blog.image} className="img-fluid" alt="" />
                    <div className="card-body p-4">
                        <ul className="list-unstyled mb-2 justify-content-space-between">
                            <li className="list-inline-item text-muted small me-3"><BiCalendar className='font-size-16' /> {moment(blog.createdAt).format('LL')}</li>
                            <li className="list-inline-item text-muted small"><AiOutlineClockCircle className='font-size-16' /> {blog.readTime} read</li>
                        </ul>
                        <Link to="blog-detail.html" className="text-dark title h5">{blog.title}</Link>
                        <div className="post-meta d-flex justify-content-between mt-3">
                            <ul className="list-unstyled mb-0 font-size-15" >
                                <li className="list-inline-item me-2 mb-0"><Link to="#/" className="text-muted like"><AiOutlineHeart /> 33</Link></li>
                                <li className="list-inline-item"><Link to="#/" className="text-muted comments"><VscComment /> 08</Link></li>
                            </ul>
                            <Link to="blog-detail.html" className="link">Read More <IoIosArrowForward /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard