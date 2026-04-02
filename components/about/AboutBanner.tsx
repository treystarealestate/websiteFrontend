'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useVariants } from '@/src/hooks/useVariants';
import { useResponsive } from "@/src/hooks/useResposive";

export const AboutBanner = () => {
  const { introHeaderVariants } = useVariants();
  const isMobileDev = useResponsive();

  return (
    /* Reduced minHeight from 40vh to 20vh to bring the edges closer to the text */
    <section className="bg-darkgold d-flex align-items-center justify-content-center" style={{ minHeight: '20vh' }}>
      {/* Changed py-5 to py-2 to drastically reduce top/bottom internal margin */}
      <div className="container py-2">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-md-10 text-center">
            
            {isMobileDev ? (
              <h2 className="text-black fw-bold text-uppercase m-0" style={{ fontSize: '1.5rem', letterSpacing: '2px', lineHeight: '1.2' }}>
                AS EXPERT ADVISORS, TRUSTED <br className="d-none d-md-block"/> ENTREPRENEURS, MENTORS and VISIONARIES.
              </h2>
            ) : (
              <motion.h2
                variants={introHeaderVariants}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-black fw-bold text-uppercase m-0"
                /* Reduced lineHeight from 1.5 to 1.2 to tighten the space between the two lines of text */
                style={{ letterSpacing: '2px', lineHeight: '1.2' }}
              >
                AS EXPERT ADVISORS, TRUSTED <br className="d-none d-md-block"/> ENTREPRENEURS, MENTORS and VISIONARIES.
              </motion.h2>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};