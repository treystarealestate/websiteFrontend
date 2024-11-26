'use client';
import Image from "next/image";
import React, { useState } from "react";
import aboutImage1 from "../../public/assets/frontend/images/aboutMain.jpg";

export const SetUsApart = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    const accordionData = [
        {
            title: "Commitment to Excellence",
            content: "Forget the impersonal transactions. We’re actively striving to bring back the true essence of having a real estate advisor, a guiding hand, unforgettable customer service, & someone willing to go the extra mile for you. Our advisors are more than agents – they're guides who understand their dedicated communities, anticipate your needs, & strive to become your trusted real estate partner for life.",
        },
        {
            title: "Customer-Centric Approach",
            content: "Forget the impersonal transactions. We’re actively striving to bring back the true essence of having a real estate advisor, a guiding hand, unforgettable customer service, & someone willing to go the extra mile for you. Our advisors are more than agents – they're guides who understand their dedicated communities, anticipate your needs, & strive to become your trusted real estate partner for life.",
        },
        {
            title: "Innovative Practices",
            content: "Forget the impersonal transactions. We’re actively striving to bring back the true essence of having a real estate advisor, a guiding hand, unforgettable customer service, & someone willing to go the extra mile for you. Our advisors are more than agents – they're guides who understand their dedicated communities, anticipate your needs, & strive to become your trusted real estate partner for life.",
        },
    ];

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-12 col-lg-5 col-md-6 my-auto">
                                    <div className="descCont text-start ">
                                        <span className="text-sub text-gold">
                                            <i className="bi bi-dash-lg"></i> Trust & Integrity
                                        </span>
                                        <h3 className="text-head">What sets us Apart?</h3>
                                    </div>
                                    <div className="accordion aboutAccordion">
                                        {accordionData.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`accordion-item ${activeIndex === index ? "active" : ""
                                                    }`}>
                                                <div
                                                    className="accordion-header d-flex justify-content-between align-items-center p-3"
                                                    onClick={() => toggleAccordion(index)}>
                                                    <span>{item.title}</span>
                                                    <div className="accordButton">
                                                        {activeIndex === index ? (
                                                            <span><i className="bi bi-dash"></i></span>
                                                        ) : (
                                                            <span><i className="bi bi-plus"></i></span>
                                                        )}
                                                    </div>
                                                </div>
                                                {activeIndex === index && (
                                                    <div
                                                        className="accordion-body p-3 "
                                                    >
                                                        {item.content}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-auto">
                                    <div className="py-3">
                                        <Image
                                            src={aboutImage1}
                                            className="img-fluid rounded-3"
                                            alt="about us"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5 bg-darkGold position-relative'>
                <div className="bgSkyline"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className='row justify-content-center'>
                                <div className="col-12 col-lg-8 col-md-8">
                                    <div className=''>
                                        <div className="descCont text-center py-3 ">
                                            <h4 className="text-head text-black fw-bold">We Focus On The Journey, Not The Destination</h4>
                                            <p className="text-desc">

                                                A home is more than just a physical space; it’s the heartbeat of our most cherished memories & our deepest emotions. Whether you're a first-time homebuyer, an investor, or looking for that perfect commercial space, we make sure the journey is as important as the destination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};
