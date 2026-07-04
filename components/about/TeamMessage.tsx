"use client";
import React, { useState } from "react";
import Image from "next/image";
import TeamMessageImage from "../../public/assets/frontend/images/team/TeamMessageImage.webp";
import MobileTeamMessageImage from "../../public/assets/frontend/images/team/TeamMessageImage.webp";
import quoteIcon from "../../public/assets/frontend/images/icons/quote.png";
import { useResponsive } from "@/src/hooks/useResposive";

export const TeamMessage = () => {
  const [showMore, setShowMore] = useState(false);
  const isMobileDev = useResponsive();
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bgsecondary">
      <div className="container py-5">
        <div className="row g-4">
          {/* Content Section (Left on Desktop) */}
          <div className="col-12 col-lg-8 col-md-7 my-auto order-2 order-md-1">
            <div className="px-0 px-lg-5 px-md-3 py-3 position-relative">
              {/* Quote Icon - Inverted for white bg if needed, or kept as is */}
              <div className="quotSec mb-3" style={{ marginLeft: "600px" }}>
                <Image
                  src={quoteIcon}
                  alt="Quote Icon"
                  className="img-fluid"
                  width={200}
                  style={{ filter: "invert(1)", transform: "scale(-1)" }} // Inverts black icon to show on white, remove if icon is already colored
                />
              </div>

              {/* Message */}
              <div className="mb-3 mt-4">
                <h3 className="text-head text-black mb-4">
                  The treÿsta Story: A Vision of Destiny and Trust
                </h3>
                <p className="text-sec text-black">
                Vaibhav and Simran never planned to build a company together. What brought them together was something simpler, they both believed that real estate clients deserved the truth.
                </p>
                <p className="text-sec text-black">
                    Vaibhav came with years of real-world experience in the Indian market. He understood how pricing worked, what made a good deal, and how to read a market that most outsiders couldn't. Simran came from the Canadian real estate world, where she had built her name by genuinely caring about the high-net-worth individuals she guided through their investments. Different markets, different journeys, but the same core values.
                </p>
                
                {showMore && (
                  <div className="text-sec text-black">
                                        <p>
                    "We didn't start Treÿsta because we wanted to sell properties," Vaibhav says. "We started it because we were tired of watching people get misled."
                    </p>
                    <p>
                    When they publicly called out the real risks clients faced, including hawala transactions being quietly normalised, the industry pushed back. But they didn't flinch.
                    </p>
                    <p>
                    Today, Vaibhav and Simran lead Treÿsta with the same honesty that defined them from day one. Because doing right by clients will always matter more than fitting in.
                    </p>
                  </div>
                )}

                <button
                  className="btn btn-link text-gold p-0 fw-bold text-decoration-none"
                  onClick={toggleShowMore}
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Partners Info */}
              <div className="text-black border-top pt-3">
                <h5 className="mb-0 fw-bold">Vaibhav Setiya & Simran Sethi</h5>
                <p className="text-sec text-gold fw-bold">Founding Partners</p>
              </div>
            </div>
          </div>

          {/* Image Section (Right on Desktop) */}
          <div className="col-12 col-lg-4 col-md-5 my-auto order-1 order-md-2">
            <div className="text-center">
              <Image
                src={isMobileDev ? MobileTeamMessageImage : TeamMessageImage}
                alt="Treysta Founders"
                className="img-fluid rounded-4 shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
