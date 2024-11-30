"use client";
import React from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import "swiper/css";
import { Grid} from 'swiper/modules';
import { Swiper as SwiperType1 } from 'swiper';
import 'swiper/css/grid';
const ProjectAmenities = () => {
    const numbers = [5, 6, 7, 8,9,10,11,12,90,20];
    const swiperRef1 = useRef<SwiperType1>();
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                grid={{
                    rows: 3,
                    fill: "row",
                  }}
                modules={[Grid]}
                onBeforeInit={(swiper) => {
                    swiperRef1.current = swiper;
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    900: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="offplanAminitySwiper"
            >
                {numbers.map(number =>
                    <SwiperSlide key={number}>
                         <div className="d-flex  justify-content-center">
                            <div className="descCont text-start my-auto">
                                <p className="text-para fw-semibold mb-0">Swimming Pool</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

        </div>
    )
}

export default ProjectAmenities