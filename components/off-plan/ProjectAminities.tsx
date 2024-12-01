"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";

interface Amenity {
  id: string;
  name: string;
  image: string;
}

interface ProjectAmenitiesProps {
  amenities?: Amenity[];
}

const ProjectAmenities: React.FC<ProjectAmenitiesProps> = ({ amenities }) => {
  const swiperRef1 = useRef<SwiperType>();

  if (!amenities || amenities.length === 0) {
    return <p className="text-para">No amenities available.</p>;
  }

  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        grid={{
          rows: 2,
          fill: "row",
        }}
        modules={[Grid]}
        onBeforeInit={(swiper) => {
          swiperRef1.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
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
        {amenities.map((amenity) => (
          <SwiperSlide key={amenity.id}>
            <div className="d-flex  justify-content-center">
                            <div className="descCont text-start my-auto">
                                <p className="text-para fw-semibold mb-0">{amenity.name}</p>
                            </div>
                        </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectAmenities;
