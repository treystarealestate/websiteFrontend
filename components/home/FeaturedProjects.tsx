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
import { motion } from 'framer-motion';
import { useVariants } from '@/src/hooks/useVariants';
import { useResponsive } from "@/src/hooks/useResposive";
interface FeaturedProps {
    openModal: (projectName: string, fileUrl: string, formName: string) => void;
    projects: Array<Project>; // Use the full Project type here
}
export interface Project {
    title: string;
    image: string;
    price: string;
    bedrooms: string;
    developer: string;
    completionDate: string;
    accommodation: string;
    slug: string;
}
const FeaturedProjects: React.FC<FeaturedProps> = ({ openModal, projects }) => {
    const { introHeaderVariants } = useVariants();
    const isMobileDev = useResponsive();
    return (
        <section className="py-5 bg-black">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-12 col-lg-4 col-md-4  offset-0  ${isMobileDev ? "" : "offset-md-1"}`}>
                        <div className="descCont text-start text-white p-1 p-md-4 p-lg-4">

                            {isMobileDev ? (
                                <div>
                                    <span className="text-sub text-gold">
                                        <i className="bi bi-dash-lg"></i> Featured Projects
                                    </span>
                                    <h3 className="text-head py-2">Exclusive from Trëysta</h3>
                                    <p className="text-para mb-4">
                                        Start your search for UAE's top off-plan developments with treysta. Our expert advisors will match you with the perfect opportunity, offering early investment benefits, flexible payment plans, and the potential for great returns—all backed by our trusted approach.
                                    </p>
                                    <div className='mb-3'>
                                        <Link href="/off-plan" className='btn btn-main-white'>
                                            <span className='align-top'>View All Projects </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <motion.div variants={introHeaderVariants} // Use the header animation variants
                                    initial="hide"
                                    whileInView="show"
                                    transition={{ duration: 1 }}>
                                    <span className="text-sub text-gold">
                                        <i className="bi bi-dash-lg"></i> Featured Projects
                                    </span>
                                    <h3 className="text-head py-2">Exclusive from Trëysta</h3>
                                    <p className="text-para mb-4">
                                        Start your search for UAE's top off-plan developments with treysta. Our expert advisors will match you with the perfect opportunity, offering early investment benefits, flexible payment plans, and the potential for great returns—all backed by our trusted approach.
                                    </p>
                                    <div className='mb-3'>
                                        <Link href="/off-plan" className='btn btn-main-white'>
                                            <span className='align-top'>View All Projects </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            )}





                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-7 my-auto">
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
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                            }}
                            className="projectSwiper">
                            {projects?.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <div className="propertyCard">
                                        <PropertyCard project={project} openModal={openModal} />
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
