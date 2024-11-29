import ContactForm from '@/components/contact-us/ContactForm';
import ContactMap from '@/components/contact-us/ContactMap';
import Breadcrumb from '@/components/UI/Breadcrumb';
import React from 'react'

export default function page() {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Contact Us", link: "/contact", active: true },
    ];
    return (
        <main>
            {/* Breadcrumb Section */}
            <Breadcrumb items={breadcrumbItems} />
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="shadow-sm p-3 p-md-4 p-lg-5">
                                <div className="descCont text-start pb-3 ">
                                    <h4 className="text-head ">Contact Us</h4>
                                    <p className="text-desc">Please use the form below to send us a message. We’ll get back
                                        to you as soon as possible.</p>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="my-auto me-3">
                                        <img
                                            src='/assets/frontend/images/icons/call.webp'
                                            alt="team"
                                            className="image-fluid invertImgWhite" width={50}
                                        />
                                    </div>
                                    <div className="my-auto">
                                        <h6 className="mb-1 text-gold">Address</h6>
                                        <p className='mb-0'>123 Business Bay, Dubai, UAE</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="my-auto me-3">
                                        <img
                                            src='/assets/frontend/images/icons/email.webp'
                                            alt="team"
                                            className="image-fluid invertImgWhite" width={50}
                                        />
                                    </div>
                                    <div className="my-auto">
                                        <h6 className="mb-1 text-gold">Phone</h6>
                                        <p className='mb-0'><a href="tel:+971 50 123 4567" className="text-decoration-none text-black">+971 50 123 4567</a></p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div className="my-auto me-3">
                                        <img
                                            src='/assets/frontend/images/icons/location.png'
                                            alt="team"
                                            className="image-fluid invertImgWhite" width={50}
                                        />
                                    </div>
                                    <div className="my-auto">
                                        <h6 className="mb-1 text-gold">Email</h6>
                                        <p className='mb-0'><a href="mailto:info@treysta.com" className="text-decoration-none text-black">info@treysta.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='p-3'>
                            <div className="descCont text-start pb-2 ">
                                    <h4 className="text-head ">Get in Touch with Us</h4>
                                </div>
                                <ContactForm formName='Contact Us Form' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
