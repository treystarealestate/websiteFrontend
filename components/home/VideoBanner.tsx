'use client';

import React from 'react';

const VideoBanner = () => {
  return (
    <section className='position-relative videoBanner'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
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
              <h1 className="display-4">Treysta: Where Trust, Integrity, and Fun Redefine Real Estate</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
