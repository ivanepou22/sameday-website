import React from 'react'
import { Footer, Header, HeroSection, BlogCard } from '../components'
import { blogsService as blogsData } from '../data/blogs'

const Blogs = () => {
    return (
        <>
            <Header />
            <HeroSection
                pageName="Blog & News"
                pageDescription="Sameday Laboratories and Diagnostics is a Full-Service Wellness Center, Clinic, Laboratory and Diagnostic Center focused on preventive care."
                companyName="SameDay Laboratories"
            />
            <section className="section">
                <div className="container">
                    <div className="row">
                        {
                            blogsData.map((blog, index) => {
                                return (
                                    <BlogCard key={index} blog={blog} />
                                )
                            })
                        }
                    </div>
                    <div className="row text-center">
                        <div className="col-12">
                            <ul className="pagination justify-content-center mb-0 list-unstyled">
                                <li className="page-item"><a className="page-link" href="#/" aria-label="Previous">Prev</a></li>
                                <li className="page-item active"><a className="page-link" href="#/">1</a></li>
                                <li className="page-item"><a className="page-link" href="#/">2</a></li>
                                <li className="page-item"><a className="page-link" href="#/">3</a></li>
                                <li className="page-item"><a className="page-link" href="#/" aria-label="Next">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blogs