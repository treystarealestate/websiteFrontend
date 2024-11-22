'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from '../UI/PropertyCard';
const FeaturedProjects = () => {
    return (
        <section className="py-5 bg-black">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 offset-1">
                        <div className="text-start text-white p-1 p-md-4 p-lg-4">
                            <span className="text-sub text-gold">
                                <i className="bi bi-dash-lg"></i> Featured Projects
                            </span>
                            <h3 className="text-head py-2">Exclusive by Us</h3>
                            <p className="text-para">
                            Your search for UAE's top off-plan developments starts here. Our dedicated property advisors will work closely with you to understand your budget & aspirations, matching you with the perfect opportunity, allowing you to capitalize on the benefits of early investment, flexible payment plans & the potential for substantial returns.
                            </p>
                            <div>
                            <Link href="/off-plan" className='btn btn-main-white'>
                                <span className='align-top'>View All Projects </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-7 my-auto">
                        <Swiper 
                         navigation
                         autoplay={true}
                         loop={true}
                         modules={[Autoplay, Navigation]}
                         breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="projectSwiper">
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="propertyCard">
                                        <PropertyCard  />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
