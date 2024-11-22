'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Optional, Swiper autoplay functionality doesn't need a separate module
import Image from 'next/image';
import partner1 from '../../public/assets/frontend/images/partners/1.webp';

const Partner = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center py-4">
                            <span className="text-sub text-gold">
                                <i className="bi bi-dash-lg"></i> Partners
                            </span>
                            <h3 className="text-head py-2">We partner with the best</h3>
                        </div>
                    </div>
                    <div className="col-12">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="client-box">
                                        <Image
                                            src={`/assets/frontend/images/partners/${index + 1}.webp`}
                                            alt={`Partner Logo ${index + 1}`}
                                            className="img-fluid"
                                            width={150}
                                            height={100}
                                        />
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

export default Partner;
