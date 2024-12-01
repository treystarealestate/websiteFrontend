"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
interface TeamMember {
  id: number;
  name: string;
  image: string;
}
export const MeetTheTeam = ({teamData}: { teamData: any }) => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          {/* Text Content */}
          <div className="col-12 col-lg-4 col-md-4  offset-0 offset-md-1">
            <div className="descCont text-start p-1 p-md-4 p-lg-4">
              <span className="text-sub text-gold">
                <i className="bi bi-dash-lg"></i> Our Team
              </span>
              <h3 className="text-head py-2">Meet the Treysta Team
              </h3>
              <p className="text-para mb-4">
              At Treysta, we don’t just know real estate—we live it, with a passion that goes beyond just closing deals. Each of us is here because we love what we do, but more importantly, we’re here because we believe in making your experience smoother, simpler, and more human. Buying or selling a home can feel overwhelming, but with us, it’s never just about the transaction—it’s about you. We blend sharp data-driven insights with a genuine care for your goals, ensuring that every step is guided by a personal touch. At Treysta, trust isn’t a promise, it’s a way of life, and we’re here to make your journey effortless, with the knowledge and passion to back it up.
              </p>
              {/* Swiper Navigation */}
              <div className="d-flex justify-content-start my-3">
                <button
                  title="Previous Slide"
                  className="swiper-button-prevNew btn btn-outline-dark me-3"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  title="Next Slide"
                  className="swiper-button-nextNew btn btn-outline-dark"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="col-12 col-md-8 col-lg-7 my-auto">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-nextNew",
                prevEl: ".swiper-button-prevNew",
              }}
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
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
              }}
              className="projectSwiper"
            >
              {teamData?.map((team) => (
                <SwiperSlide key={team.id}>
                  <div className="card bg-transparent border-0">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="card-img-top teamImage rounded-3"
                    />
                    <div className="card-body">
                      <h5 className="mb-0">{team.name}</h5>
                      {/* <p className="text-sec text-gold">Client Manager</p> */}
                    </div>
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
