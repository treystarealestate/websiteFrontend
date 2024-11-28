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
            title: "Trust as Our Foundation",
            content: "We earn your trust every step of the way.",
        },
        {
            title: "Fun in the Process",
            content: "Buying property should feel like a win, not a chore.",
        },
        {
            title: "Transparency Always",
            content: "We provide straight answers and clear processes, with no surprises.",
        },
        {
            title: "Experience Matters",
            content: "Turning what could be a nerve- wracking process into a rewarding experience.",
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
                                        <h3 className="text-head">Core Values: Our Foundation</h3>
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
                                            <h4 className="text-head text-black fw-bold"> Our Promise: More Than Just Transactions
                                            </h4>
                                            <p className="text-desc">We build trust by earning your confidence through honest guidance and transparent communication. Your success is our priority, and we work tirelessly to achieve your real estate goals.</p>
                                            <p className="text-desc">We make the property journey exciting by infusing joy and enthusiasm into every step. With clarity and support, we turn your real estate dreams into reality.</p>
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
