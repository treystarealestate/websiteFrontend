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
                                <div className="descCont text-white p-2 p-md-3 p-lg-5">
                                    <h3 className="text-head py-2"><span className='text-gold fw-bold'> Trëysta:</span> Where Trust Meets Fun in Real Estate
                                    </h3>
                                    <p className="text-para">At Treysta, trust isn’t just a value; it’s our IDENTITY. Inspired by the Nordic word for “trust,” we’re here to bring integrity, reliability, and a little fun into the world of real estate.

                                    </p>
                                    <p className="text-para pb-2">We believe that buying, selling, or investing in property doesn’t have to be a stressful ordeal—it can be exciting, enjoyable, and surprisingly refreshing.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
