import React from 'react'

export const AboutBanner = () => {
    return (
        <section className='bg-black'>
            <div className="container-fluid px-0">
                <div className="row g-0">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className="row position-relative">
                            <div className="col-12 col-lg-5 col-md-5">
                                <div className="aboutBannerimg"></div>
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 my-auto">
                                <div className="descCont text-white p-sm-2 p-md-3 p-lg-5">
                                    <h3 className="text-head py-2">Why <span className='text-gold fw-bold'> Trëysta?</span></h3>
                                    <p className="text-para">At Treysta, we redefine the real estate experience by making trust the cornerstone of every interaction. Rooted in the Nordic concept of "trust," we combine integrity and reliability with a touch of fun, ensuring that your property journey is both smooth and enjoyable.</p>
                                    <p className="text-para pb-2">Whether you're buying, selling, or investing, our team is committed to providing you with a refreshing, stress-free approach. With Treysta, real estate doesn't have to be a daunting process—it's an exciting opportunity, guided by experts you can truly trust.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
