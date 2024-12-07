"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Optional, Swiper autoplay functionality doesn't need a separate module
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

interface Developer {
  logo: string; // Path to partner's logo
  name: string; // Name of the partner
}

interface PartnerProps {
  developers: Developer[];
}

const Partner = ({ developers }: PartnerProps) => {
  const [developerData, setDeveloperData] = useState<Developer[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const developerRes = await fetch(`${process.env.API_HOST}developers`);
        const developerData = await developerRes.json();
        if (developerData.success && Array.isArray(developerData.data.data)) { // Check if it's an array
          setDeveloperData(developerData.data.data);
        } else {
          console.error("Invalid data format", developerData);
        }
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  if (loading) {
    return <div>Loading Partners...</div>; // Fallback loading state
  }

  if (developerData.length === 0) {
    return <div>No partners available at the moment.</div>; // Error handling for empty data
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="descCont text-center py-4">
              <div>
                <span className="text-sub text-gold">
                  <i className="bi bi-dash-lg"></i> Partners
                </span>
                <h3 className="text-head py-2">We partner with the best</h3>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              className="swiper-slide-developr"
              slidesPerView={2}
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay={{
                delay: 1000,
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
              {developerData.map((developer, index) => (
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
