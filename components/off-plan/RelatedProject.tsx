"use client";
import React from 'react'
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from '../UI/PropertyCard';
interface RelatedProjectProps {
    openModal: (projectName: string, fileUrl: string, formName: string) => void; // Accept openModal as a prop
  }
const RelatedProject : React.FC<RelatedProjectProps> = ({ openModal }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 col-lg-12 ">
                        <Swiper 
                         navigation
                         autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                         loop={true}
                         modules={[Autoplay, Navigation]}
                         breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="projectSwiper">
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="propertyCard">
                                        {/* <PropertyCard openModal={openModal} /> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
    </div>
  )
}

export default RelatedProject