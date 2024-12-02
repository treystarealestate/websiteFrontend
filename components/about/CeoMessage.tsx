"use client";
import React, { useState } from "react";
import Image from "next/image";
import ceoImage from "../../public/assets/frontend/images/team/ceo.webp";
import quoteIcon from "../../public/assets/frontend/images/icons/quote.png";

export const CeoMessage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-black">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="row">
              {/* Image Section */}
              <div className="col-12 col-lg-4 col-md-5 my-auto">
                <div>
                  <Image
                    src={ceoImage}
                    alt="Ceo"
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="col-12 col-lg-8 col-md-7 my-auto">
                <div className="px-0 px-lg-5 px-md-3 py-3 position-relative">
                  {/* Quote Icon */}
                  <div className="quotSec mb-3">
                    <Image
                      src={quoteIcon}
                      alt="Quote Icon"
                      className="img-fluid"
                      width={200}
                    />
                  </div>

                  {/* CEO Message */}
                  <div className="mb-3 mt-4">
                    <h3 className="text-head text-white">Founder's Story: Inspired by Fatherhood,
                      Built on Trust
                    </h3>
                    <p className="text-sec text-white">
                     Vaibhav always believed that great foundations—whether in buildings or in life—are built on trust. As a civil engineer, he spent years designing structures that stood the test of time. But his perspective shifted profoundly when he held his newborn daughter, Baani, for the first time. That moment wasn’t just life-changing; it was eye-opening.
                    </p>
                    <p className="text-sec text-white">
                      “Everything I did suddenly felt bigger than myself,” Vaibhav recalls. “I wanted to create something lasting—not just for my family, but for everyone who trusted me with their future.”
                    </p>

                    {/* Toggleable Content */}
                    {showMore && (
                      <div className="text-sec text-white">
                        <p>
                          This sense of purpose became the foundation of Treÿsta, a boutique real estate agency named after the Nordic word for “trust.” Fatherhood didn’t just change the way he approached life; it redefined his vision for real estate. Inspired by his role as a father, he committed to creating a company where every client and agent would feel like part of an extended family—valued, cared for, and secure.
                        </p>
                        <p>
                          Today, Vaibhav leads Treÿsta with the same values that guide him as a father: trust, transparency, and care. His civil engineering expertise ensures a detail-oriented approach, while his fatherly instincts drive his commitment to building lifelong relationships. Treÿsta isn’t just a real estate agency; it’s a big family of agents, clients, and partners, working together to create something meaningful.
                        </p>
                      </div>
                    )}

                    {/* Read More / Read Less Link */}
                    <button
                      className="btn btn-link text-gold p-0"
                      onClick={toggleShowMore}
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  {/* CEO Info */}
                  <div className="text-white">
                    <h5 className="mb-0">Vaibhav Setiya</h5>
                    <p className="text-sec text-gold">CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
