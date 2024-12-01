"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType1 } from 'swiper';

interface PaymentRow {
  id: string;
  key: string;
  value: string;
}

interface PaymentPlanProps {
  payment: {
    title: string;
    rows: PaymentRow[];
  }[];
}

const PaymentPlan: React.FC<PaymentPlanProps> = ({ payment }) => {
  const swiperRef1 = useRef<SwiperType1>();

  return (
    <div>
      {payment?.map((paymentItem, index) => (
        <div key={index} >
          
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef1.current = swiper;
            }}
            autoplay={{
              delay: 0,
            }}
            speed={2500}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                  delay: 200,
                },
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                  delay: 200,
                },
              },
              900: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="achievemntSwiper text-center"
          >
            {paymentItem.rows?.map((paymentPlan) => (
              <SwiperSlide key={paymentPlan.id}>
                 <div className='text-center'>
                
                <div className="paymentCont text-center my-auto">
                  <h4 className="payTitle mb-0">{paymentPlan?.key}</h4>
                  <p className="payDesc mb-0"> {paymentPlan?.value}</p>
                </div>
               
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default PaymentPlan;
