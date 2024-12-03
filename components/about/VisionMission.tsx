'use client';
import Image from "next/image";
import React, { useState } from "react";
import aboutImage1 from "../../public/assets/frontend/images/img93.jpg";
import { useResponsive } from "@/src/hooks/useResposive";
export const VisionMission = () => {
    const isMobileDev = useResponsive();
    return (

        <>
            <section  className={`${isMobileDev ? "py-2" : "py-2"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 d-flex align-items-center">
                            <div>
                                <h2 className="text-head text-black fw-bold py-3"> Ready to Experience the
                                    Treysta Difference?</h2>
                                <ol className="numbered">

                                    <li>
                                        <h4>Reach Out</h4>
                                        <p className="text-para">Contact us to discuss your real estate needs and goals.</p>
                                    </li>

                                    <li>
                                        <h4>Meet Your Agent</h4>
                                        <p className="text-para">We'll pair you with an expert who matches your style.</p>
                                    </li>
                                    <li>
                                        <h4>Enjoy the Journey</h4>
                                        <p className="text-para">Experience a property transaction that's actually enjoyable and
                                            stress-free.</p>
                                    </li>
                                    <li>
                                        <h4>Achieve Your Dreams</h4>
                                        <p className="text-para">Let's turn your real estate aspirations into reality, together.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 d-flex align-items-center">
                            <Image
                                src={aboutImage1}
                                className="img-fluid rounded-3"
                                alt="about us"

                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <h3 className="text-head text-black fw-bold text-center py-3"> Founder's Story: Inspired by Fatherhood,
                                Built on Trust</h3>

                            <p className="text-para">Vaibhav always believed that great foundations—whether in buildings or in life—are built on trust. As a civil engineer,
                                he spent years designing structures that stood the test of time. But his perspective shifted profoundly when he held
                                his newborn daughter,Baani, for the first time. That moment wasn’t just life-changing; it was eye-opening.</p>
                            <p className="text-para">
                                “Everything I did suddenly felt bigger than myself,” Vaibhav recalls. “I wanted to create something lasting—not just
                                for my family, but for everyone who trusted me with their future.”
                            </p>
                            <p className="text-para">
                                This sense of purpose became the foundation of Treÿsta, a boutique real estate agency named after the Nordic word
                                for “trust.” Fatherhood didn’t just change the way he approached life; it redefined his vision for real estate. Inspired
                                by his role as a father, he committed to creating a company where every client and agent would feel like part of an
                                extended family—valued, cared for, and secure.
                            </p>
                            <p className="text-para">
                                Today, Vaibhav leads Treysta with the same values that guide him as a father: trust, transparency, and care. His civil
                                engineering expertise ensures a detail-oriented approach, while his fatherly instincts drive his commitment to
                                building lifelong relationships. Treÿsta isn’t just a real estate agency; it’s a big family of agents, clients, and partners,
                                working together to create something meaningful.
                            </p>

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
            </section> */}
        </>

    )
}
