"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Optional, Swiper autoplay functionality doesn't need a separate module
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useVariants } from "@/hooks/useVariants";

interface Developer {
  logo: string; // Assuming 'logo' is a path to the partner's logo
  name: string; // Assuming each developer has a name, you can adjust this as needed
}

interface PartnerProps {
  developers: Developer[];
}

const Partner = ({ developers }: PartnerProps) => {
  const { introTopVariants } = useVariants();

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="descCont text-center py-4">
              <motion.div
                variants={introTopVariants} // Use the header animation variants
                initial="hide"
                whileInView="show"
                transition={{ duration: 1 }}
              >
                <span className="text-sub text-gold">
                  <i className="bi bi-dash-lg"></i> Partners
                </span>
                <h3 className="text-head py-2">We partner with the best</h3>
              </motion.div>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay={{
                delay: 2100,
                disableOnInteraction: true,
              }}
              loop={true}
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
              {developers?.map((developer, index) => (
                <SwiperSlide key={index}>
                  <div className="client-box">
                    <Image
                      src={developer?.logo} // Dynamic logo source
                      alt={`Partner Logo ${developer.name}`} // Dynamic alt text
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
