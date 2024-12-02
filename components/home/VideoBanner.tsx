'use client';

import React from 'react';
import Search from '../layout/Search';
import { motion } from 'framer-motion';
import { useVariants } from '@/src/hooks/useVariants';
const VideoBanner = () => {
  const { introHeaderVariants } = useVariants();

  return (
    <section className='position-relative videoBanner'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-md-10">
            {/* Video Background */}
            <video
              className='video d-none d-md-block d-lg-block'
              autoPlay
              loop
              muted
              playsInline
              poster="/video-poster.jpg" // Fallback image for browsers that don't support video
            >
              <source src="/assets/frontend/images/banners/homeVideoPc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              className='video d-block d-md-none d-lg-none'
              autoPlay
              loop
              muted
              playsInline
              poster="/video-poster.jpg" // Fallback image for browsers that don't support video
            >
              <source src="/assets/frontend/images/banners/homeVideoMob.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className='videoOverlay'></div>

            {/* Text Content */}

            <div className="text-white textContent">

              <motion.h1
                variants={introHeaderVariants} // Use the header animation variants
                initial="hide"
                whileInView="show"
                transition={{ duration: 1 }} className="display-4">Treysta: Where Trust, Integrity, and Fun Redefine <span className='text-gold fw-bold'> Real Estate</span></motion.h1>
            </div>
            <div>
              <Search bgClass="bgSearch" formClass="formSearch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
