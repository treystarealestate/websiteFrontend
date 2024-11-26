import React from 'react'

export const VisionMission = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12 my-auto">
                                <div className="descCont text-center ">
                                    <span className="text-sub text-gold">
                                        <i className="bi bi-dash-lg"></i> Mission & Vision
                                    </span>
                                    <h3 className="text-head">Get the Most Out Of Your Property</h3>
                                    <p className="text-para">Selling a property is a big decision & getting the right price is crucial. Our team of experts combine local market knowledge with strategic marketing to ensure your property reaches the most qualified buyers. We work together closely with our clients to price the property competitively based on current market trends, then leverage our negotiation skills to secure the best possible offer.</p>
                                </div>
                            </div>
                            {/* Vision Section */}
                            <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center mb-4 mb-md-0">
                                <div
                                    className="icon-container mb-3 d-flex justify-content-center align-items-center rounded-circle bg-dark"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                    }}
                                >
                                    <i className="bi bi-eye fs-2 text-white"></i>
                                </div>
                                <h3 className="text-dark mb-3">Our Vision</h3>
                                <p className="text-muted">
                                    To be a pioneering leader in our industry, creating innovative
                                    solutions that inspire and empower communities globally.
                                </p>
                            </div>
                            {/* Mission Section */}
                            <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                                <div
                                    className="icon-container mb-3 d-flex justify-content-center align-items-center rounded-circle bg-dark"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                    }}
                                >
                                    <i className="bi bi-bullseye fs-2 text-white"></i>
                                </div>
                                <h3 className="text-dark mb-3">Our Mission</h3>
                                <p className="text-muted">
                                    To deliver exceptional value through innovative, sustainable, and
                                    customer-centric solutions that exceed expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
