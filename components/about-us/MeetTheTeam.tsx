"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const teams = [
  {
      id: 1,
      name: "Ali Dab",
      image: "/assets/frontend/images/team/Ali Dab.webp"
  },
  {
      id: 2,
      name: "ishu bhatia",
      image: "/assets/frontend/images/team/ishu bhatia.webp"
  },
  {
      id: 3,
      name: "vaibhav setiya",
      image: "/assets/frontend/images/team/vaibhav setiya.webp"
  },
  {
      id: 4,
      name: "simran sethi",
      image: "/assets/frontend/images/team/simran sethi.webp"
  },
  {
      id: 5,
      name: "priyanka halari",
      image: "/assets/frontend/images/team/priyanka halari.webp"
  },
  {
      id: 6,
      name: "Pallavi Tathe",
      image: "/assets/frontend/images/team/Pallavi Tathe.webp"
  },
  {
      id: 7,
      name: "Muhammad Fayyaz",
      image: "/assets/frontend/images/team/Muhammad Fayyaz.webp"
  },
  {
      id: 7,
      name: "Mohammed Shuraim",
      image: "/assets/frontend/images/team/Mohammed Shuraim.webp"
  }
];
export const MeetTheTeam = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          {/* Text Content */}
          <div className="col-12 col-lg-4 col-md-4 offset-1">
            <div className="descCont text-start p-1 p-md-4 p-lg-4">
              <span className="text-sub text-gold">
                <i className="bi bi-dash-lg"></i> Our Team
              </span>
              <h3 className="text-head py-2">Meet the Team</h3>
              <p className="text-para mb-4">
                At Treysta, our team of industry experts leads with passion and
                precision, ensuring that every aspect of your real estate
                experience is handled with care and professionalism.
              </p>
              {/* Swiper Navigation */}
              <div className="d-flex justify-content-start mt-3">
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
              {teams.map((team) => (
                <SwiperSlide key={team.id}>
                  <div className="card bg-transparent border-0">
                    <img
                      src={team.image}
                      alt="team"
                      className="card-img-top teamImage rounded-3"
                    />
                    <div className="card-body">
                      <h5 className="mb-0">{team.name}</h5>
                      <p className="text-sec text-gold">Client Manager</p>
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
