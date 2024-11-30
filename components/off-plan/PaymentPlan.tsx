"use client";
import React from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
import { Swiper as SwiperType1 } from 'swiper';
const PaymentPlan = () => {
    const swiperRef1 = useRef<SwiperType1>();
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef1.current = swiper;
                }}
                autoplay={{
                    delay: 0
                }}
                speed={2500}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        autoplay: {
                            delay: 200
                        },
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        autoplay: {
                            delay: 200
                        },
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay]}
                className="achievemntSwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <div className="">
                            <div className="paymentCont text-center my-auto">
                                <h4 className="payTitle mb-0">20%</h4>
                                <p className="payDesc mb-0">On Booking</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=''>
                        <div className="">
                            <div className="paymentCont text-center my-auto">
                                <h4 className="payTitle mb-0">60%</h4>
                                <p className="payDesc mb-0">During Construction</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=''>
                        <div className="">
                            <div className="paymentCont text-center my-auto">
                                <h4 className="payTitle mb-0">20%</h4>
                                <p className="payDesc mb-0">On Handover</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default PaymentPlan