"use client";
import React from 'react';
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "@/components/UI/PropertyCard";

interface Project {
    id:string;
    title: string;
    image: string;
    price: string;
    bedrooms: string;
    developer: string;
    completionDate: string;
    accommodation: string;
    slug: string;
  }
interface RelatedProjectProps {
  nearByProjects: Project[]; // Accept the nearByProjects prop
  openModal: (projectName: string, fileUrl: string, formName: string) => void; // Accept openModal as a prop
}

const RelatedProject: React.FC<RelatedProjectProps> = ({ nearByProjects, openModal }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-12 col-lg-12">
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
          className="projectSwiper"
        >
          {nearByProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="propertyCard">
                <PropertyCard
                  project={project} // Pass the project data to PropertyCard
                  openModal={openModal} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProject;
