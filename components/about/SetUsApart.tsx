'use client';
import Image from "next/image";
import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import aboutImage1 from "../../public/assets/frontend/images/aboutMain.jpg";
import aboutImage2 from "../../public/assets/frontend/images/img77-1.jpg";
import aboutImage3 from "../../public/assets/frontend/images/img61.jpg";
import aboutImage4 from "../../public/assets/frontend/images/img45.jpg";
import aboutImage5 from "../../public/assets/frontend/images/img9.jpg";
import mission from "../../public/assets/frontend/images/mission2.png";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faSmile, faHeart, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { useResponsive } from "@/src/hooks/useResposive";


export const SetUsApart = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const isMobileDev = useResponsive();
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
            {/* <section className="py-5">
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
            <section  className={`${isMobileDev ? "py-2" : "py-5"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 d-flex align-items-center">
                            <div>
                                <h2 className={`text-head text-black fw-bold  ${isMobileDev ? "py-2" : "py-3"}`}>
                                    Trëysta: Where Trust Meets Fun in Real Estate
                                </h2>
                                <ul className="unnumbered">
                                    <li>At treysta, trust isn’t just a value; it’s our IDENTITY.</li>
                                    <li>
                                        Inspired by the Nordic word for “trust,” we’re here to bring
                                        integrity, reliability, and a little fun into the world of real
                                        estate.
                                    </li>
                                    <li>
                                        We believe that buying, selling, or investing in property doesn’t
                                        have to be a stressful ordeal—it can be exciting, enjoyable, and
                                        surprisingly refreshing.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5">
                            <Image
                                src={aboutImage5}
                                className="img-fluid rounded-3"
                                alt="about us"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section  className={`${isMobileDev ? "py-2" : "py-2"}`}>
                <div className="container">
                    <div className="row">
                       
                        <h2 className={`text-head text-black fw-bold  ${isMobileDev ? "py-2" : "py-5"}`}>Our Mission: Trust, Joy, and Success</h2>
                        <Image
                            src={mission}
                            className="img-fluid rounded-3"
                            alt="about us"
                        />
                    </div>
                </div>
            </section>  */}


            <section className='py-5 bg-darkGold position-relative'>
                <div className="bgSkyline"></div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 d-flex align-items-center">

<div className="row">
    
    <h2 className={`text-head text-black text-center fw-bold  ${isMobileDev ? "py-2" : "py-2"}`}>Core Values: Our Foundation</h2>
    <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-2 my-1"}`}>
        <div className="icon-container mb-3 d-flex">
            <FontAwesomeIcon icon={faHandshake} size="2x" />
        </div>
        <h5 className="text-dark mb-3">Trust as Our Foundation</h5>
        <p className="text-muted">
            We earn your trust every step of the
            way.
        </p>
    </div>

    <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-2 my-1"}`}>
        <div className="icon-container mb-3 d-flex">
            <FontAwesomeIcon icon={faSmile} size="2x" />
        </div>
        <h5 className="text-dark mb-3">Fun in the Process</h5>
        <p className="text-muted">
            Buying property should feel like a win,
            not a chore.
        </p>
    </div>

    <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-2 my-1"}`}>
        <div className="icon-container mb-3 d-flex">
            <FontAwesomeIcon icon={faDoorOpen} size="2x" />
        </div>
        <h5 className="text-dark mb-3">Transparency Always</h5>
        <p className="text-muted">
            We provide straight answers and
            clear processes, with no surprises
        </p>
    </div>


    <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-2 my-1"}`}>
        <div className="icon-container mb-3 d-flex">
            <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
        <h5 className="text-dark mb-3">Experience Matters</h5>
        <p className="text-muted">
            Turning what could be a nervewracking process into a rewarding
            experience.
        </p>
    </div>

</div>
</div>
                    </div>
                </div>
            </section>

{/* 
            <section  className={`${isMobileDev ? "py-2" : "py-5"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 d-flex align-items-center">
                            <Image
                                src={aboutImage4}
                                className="img-fluid rounded-3"
                                alt="about us"
                            />
                        </div>
                        <div className="col-lg-8 col-md-8 d-flex align-items-center">

                            <div className="row">
                                
                                <h2 className={`text-head text-black fw-bold  ${isMobileDev ? "py-2" : "py-5"}`}>Core Values: Our Foundation</h2>
                                <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-3 my-2"}`}>
                                    <div className="icon-container mb-3 d-flex">
                                        <FontAwesomeIcon icon={faHandshake} size="2x" />
                                    </div>
                                    <h5 className="text-dark mb-3">Trust as Our Foundation</h5>
                                    <p className="text-muted">
                                        We earn your trust every step of the
                                        way.
                                    </p>
                                </div>

                                <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-3 my-2"}`}>
                                    <div className="icon-container mb-3 d-flex">
                                        <FontAwesomeIcon icon={faSmile} size="2x" />
                                    </div>
                                    <h5 className="text-dark mb-3">Fun in the Process</h5>
                                    <p className="text-muted">
                                        Buying property should feel like a win,
                                        not a chore.
                                    </p>
                                </div>

                                <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-3 my-2"}`}>
                                    <div className="icon-container mb-3 d-flex">
                                        <FontAwesomeIcon icon={faDoorOpen} size="2x" />
                                    </div>
                                    <h5 className="text-dark mb-3">Transparency Always</h5>
                                    <p className="text-muted">
                                        We provide straight answers and
                                        clear processes, with no surprises
                                    </p>
                                </div>


                                <div className={`col-6 d-flex flex-column  ${isMobileDev ? "py-2 my-1" : "py-3 my-2"}`}>
                                    <div className="icon-container mb-3 d-flex">
                                        <FontAwesomeIcon icon={faHeart} size="2x" />
                                    </div>
                                    <h5 className="text-dark mb-3">Experience Matters</h5>
                                    <p className="text-muted">
                                        Turning what could be a nervewracking process into a rewarding
                                        experience.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <section className="">
                <div className="full-container">
                    <div className="row">
                        <Image
                            src={aboutImage3}
                            className="img-fluid rounded-3"
                            alt="about us"
                        />
                    </div>
                </div>
            </section> */}
            <section  className={`${isMobileDev ? "py-2" : "py-2"}`}>
                <div className="container">
                    <div className="row">
                        <h2 className="text-head text-black fw-bold py-2 text-center"> The treysta Difference: Our Unique Approach</h2>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                            <Card className="p-3 bgsecondary border-none my-2 w-100">
                            <h4>Coffee Fuels Us</h4>
                            <h4>Deals Drive Us!</h4>
                            <p className="text-para">
                                We're passionate about closing great deals and staying caffeinated.
                            </p>
                            </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                            <Card className="p-3 bgsecondary border-none my-2 w-100">
                            <h4>We Take Your Calls</h4>
                            <h4>(Yes! Even at Midnight!)</h4>
                            <p className="text-para">
                                Your midnight worries about curtains? That's our priority too.
                            </p>
                            </Card>
                        </div>
                       

                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <Card className="p-3 bgsecondary border-none my-2 w-100">
                                <h4>No such thing as "Too Picky"</h4>

                                <p className="text-para">Bring your 12-page checklist. We love a good challenge.</p>
                            </Card>
                        </div>

                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <Card className="p-3 bgsecondary border-none my-2 w-100">
                                <h4>Overthinking is a skill, we've perfected</h4>

                                <p className="text-para">We overthink the small stuff so you don't have to.</p>
                            </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <Card className="p-3 bgsecondary border-none my-2 w-100">
                                <h4>We're Realtors, Not Magicians( But Close)</h4>

                                <p className="text-para">If you want a castle for the price of a studio, we'll do or bestbut no promises!</p>
                            </Card>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <Card className="p-3 bgsecondary border-none my-2 w-100">
                                <h4> Fun is a Non-Negotiable</h4>

                                <p className="text-para">As you can tell, we are a little witty and we do like to have fun!
                                    Life is stressful enough; buying or selling real estate doesn’t
                                    have to be</p>
                            </Card>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section  className={`${isMobileDev ? "py-2" : "py-5"}`}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4">
                            <Image
                                src={aboutImage2}
                                className="img-fluid rounded-3"
                                alt="about us"
                            />
                        </div>
                        <div className="col-lg-8 col-md-8 d-flex align-items-center">
                            <div>
                                <h2 className="text-head text-black fw-bold py-4"> Our Promise: More Than Just Transactions</h2>
                                <ol className="numbered">
                                    <li>
                                        <h4>Build Trust</h4>
                                        <p className="text-para">We earn your confidence through every interaction and
                                            decision.</p>
                                    </li>
                                    <li>
                                        <h4>Create Joy</h4>
                                        <p className="text-para">We infuse fun and excitement into the property journey.</p>
                                    </li>
                                    <li>
                                        <h4>Ensure Transparency</h4>
                                        <p className="text-para">We provide clear communication and honest guidance
                                            throughout the process.</p>
                                    </li>

                                    <li>
                                        <h4>Deliver Success</h4>
                                        <p className="text-para">We work tirelessly to achieve your real estate goals.</p>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            
        </>

    );
};
