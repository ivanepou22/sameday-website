import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogsService as blogs } from '../data/blogs'
import moment from 'moment';

//images
import img2 from "../assets/images/client/01.jpg";
import img3 from "../assets/images/client/02.jpg";
import img4 from "../assets/images/client/03.jpg";
import img5 from "../assets/images/client/01.jpg";
import img6 from "../assets/images/blog/03.jpg";
import img7 from "../assets/images/blog/04.jpg";
import img8 from "../assets/images/blog/05.jpg";
import img9 from "../assets/images/blog/06.jpg";
import img10 from "../assets/images/blog/07.jpg";
import img11 from "../assets/images/blog/07.jpg";
import img12 from "../assets/images/blog/08.jpg";
import img13 from "../assets/images/blog/01.jpg";
import HeroSection from './HeroSection';

const BlogDetailSection = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id.toString() === id.toString());
    return (
        <>
            <HeroSection
                pageName={blog.title}
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName={`${blog.user.name} - ${moment(blog.createdAt).format('LL')}`}
                showBreadcrumb={false}
            />
            <section className="section font-size-15 padding-top-20">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-7">
                            <img src={blog.image} className="img-fluid rounded shadow" alt="" />

                            <ul className="list-unstyled mt-4">
                                <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> {blog.user.name}</li>
                                <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> {moment(blog.createdAt).format('LL')}</li>
                            </ul>

                            <p className="text-muted mt-4">{blog.description}</p>
                            <h5 className="card-title mt-4 mb-0">Comments :</h5>

                            <ul className="media-list list-unstyled mb-0">
                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="/">
                                                <img src={img2} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="/" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                                <small className="text-muted">15th August, 2019 at 01:25 pm</small>
                                            </div>
                                        </div>
                                        <Link to="/" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>

                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="/">
                                                <img src={img3} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="/" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                                <small className="text-muted">15th August, 2019 at 05:44 pm</small>
                                            </div>
                                        </div>
                                        <Link to="/" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </li>

                                <li className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="/">
                                                <img src={img4} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="/" className="media-heading text-dark">Tammy Camacho</Link></h6>
                                                <small className="text-muted">16th August, 2019 at 03:44 pm</small>
                                            </div>
                                        </div>
                                        <Link to="/" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>

                                    <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                                        <li className="mt-4">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <Link className="pe-3" to="/">
                                                        <img src={img5} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img" />
                                                    </Link>
                                                    <div className="commentor-detail">
                                                        <h6 className="mb-0"><Link to="/" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                                        <small className="text-muted">17th August, 2019 at 01:25 pm</small>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted font-italic p-3 bg-light rounded">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <h5 className="card-title mt-4 mb-0">Leave A Comment :</h5>

                            <form className="mt-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Comment</label>
                                            <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Name <span className="text-danger">*</span></label>
                                            <input id="name" name="name" type="text" placeholder="Name" className="form-control" required="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input id="email" type="email" placeholder="Email" name="email" className="form-control" required="" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="send d-grid">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 sidebar sticky-bar rounded shadow">
                                <div className="card-body">
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Search</h5>
                                        <div id="search2" className="widget-search mt-4 mb-0">
                                            <form role="search" method="get" id="searchform" className="searchform">
                                                <div>
                                                    <input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..." />
                                                    <input type="submit" id="searchsubmit" defaultValue="Search" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Recent Post</h5>
                                        <div className="mt-4">
                                            <div className="clearfix post-recent">
                                                <div className="post-recent-thumb float-start"> <Link to="/"> <img alt="img" src={img11} className="img-fluid rounded" /></Link></div>
                                                <div className="post-recent-content float-start"><Link to="/">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                                            </div>
                                            <div className="clearfix post-recent">
                                                <div className="post-recent-thumb float-start"> <Link to="/"> <img alt="img" src={img12} className="img-fluid rounded" /></Link></div>
                                                <div className="post-recent-content float-start"><Link to="/">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                            </div>
                                            <div className="clearfix post-recent">
                                                <div className="post-recent-thumb float-start"> <Link to="/"> <img alt="img" src={img13} className="img-fluid rounded" /></Link></div>
                                                <div className="post-recent-content float-start"><Link to="/">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Tags Cloud</h5>
                                        <div className="tagcloud mt-4">
                                            <Link to="/" className="rounded">Business</Link>
                                            <Link to="/" className="rounded">Finance</Link>
                                            <Link to="/" className="rounded">Marketing</Link>
                                            <Link to="/" className="rounded">Fashion</Link>
                                            <Link to="/" className="rounded">Bride</Link>
                                            <Link to="/" className="rounded">Lifestyle</Link>
                                            <Link to="/" className="rounded">Travel</Link>
                                            <Link to="/" className="rounded">Beauty</Link>
                                            <Link to="/" className="rounded">Video</Link>
                                            <Link to="/" className="rounded">Audio</Link>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h5 className="widget-title">Follow us</h5>
                                        <ul className="list-unstyled social-icon mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="facebook" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="instagram" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="github" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="youtube" className="fea icon-sm fea-social"></i></Link></li>
                                            <li className="list-inline-item"><Link to="/" className="rounded"><i data-feather="gitlab" className="fea icon-sm fea-social"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="title mb-0">Related Post:</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mt-4 pt-2">
                            <div className="slider-range-three">
                                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1">
                                    <img src={img6} className="img-fluid" alt="" />
                                    <div className="card-body p-4">
                                        <ul className="list-unstyled mb-2">
                                            <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                            <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                        </ul>
                                        <Link to="blog-detail.html" className="text-dark title h5">medicine research course for doctors</Link>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="/" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="/" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="blog-detail.html" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1">
                                    <img src={img7} className="img-fluid" alt="" />
                                    <div className="card-body p-4">
                                        <ul className="list-unstyled mb-2">
                                            <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                            <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                        </ul>
                                        <Link to="blog-detail.html" className="text-dark title h5">Comparing Nitrogen And Mechanical Freezers</Link>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="/" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="/" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="blog-detail.html" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1">
                                    <img src={img8} className="img-fluid" alt="" />
                                    <div className="card-body p-4">
                                        <ul className="list-unstyled mb-2">
                                            <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                            <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                        </ul>
                                        <Link to="blog-detail.html" className="text-dark title h5">It Is Very Important To Wear Proper Clothing</Link>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="/" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="/" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="blog-detail.html" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1">
                                    <img src={img9} className="img-fluid" alt="" />
                                    <div className="card-body p-4">
                                        <ul className="list-unstyled mb-2">
                                            <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                            <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                        </ul>
                                        <Link to="blog-detail.html" className="text-dark title h5">Hollowed-Out Faces More Cuts Amid Virus</Link>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="/" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="/" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="blog-detail.html" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1">
                                    <img src={img10} className="img-fluid" alt="" />
                                    <div className="card-body p-4">
                                        <ul className="list-unstyled mb-2">
                                            <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>20th November, 2020</li>
                                            <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                        </ul>
                                        <Link to="blog-detail.html" className="text-dark title h5">A Researcher Is Research On Coronavirus In Lab</Link>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item me-2 mb-0"><Link to="/" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="/" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                            </ul>
                                            <Link to="blog-detail.html" className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
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

export default BlogDetailSection