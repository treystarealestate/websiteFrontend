import React from "react";
import Image from "next/image";
import ceoImage from "../../public/assets/frontend/images/ceo1.webp";
import quoteIcon from "../../public/assets/frontend/images/icons/quote.png";

export const CeoMessage = () => {
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
                    <p className="text-sec text-white">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </p>
                  </div>

                  {/* CEO Info */}
                  <div className="text-white">
                    <h5 className="mb-0">John Joe</h5>
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
