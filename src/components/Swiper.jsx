import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import StoreCard from './StoreCard';

export default function StoreSwiper() {

  const [slides, setSlides] = useState([]);
  
  useEffect(() => {
    const initialSlides = [
      { image: "chinchwad", city: "Chinchwad", address: "Shop No.1, ABC Plaza, Near, Sant Dyaneshwar Chowk, opp. Delhi Swad, Sector 25, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044" },
      { image: "baner", city: "Baner", address: "Shop No: 3, Shubhamkaroti Building, Jadhav Nagar, Main, Baner Rd, opposite MoMo Panda, Baner, Pune, Maharashtra 411045" },
      { image: "hinjawadi", city: "Hinjawadi", address: "Ground Floor, Grand Highstreet Mall, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057" },
      { image: "pimplesaudagar", city: "Pimple Saudagar", address: "Shop No 3 , Queen's Park, near Shivar Garden Hotel, Pimple Saudagar, Pune, Maharashtra 411 27" },
      { image: "tathawade", city: "Tathawade", address: "Shop no.03, Gophane Wasti, The Centrum, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033" },
      { image: "wakad", city: "Wakad", address: "Shop No. 8, Mauli Chowk, Windsor Apartment, Datta Mandir Rd, Shankar Kalat Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057" },
      { image: "vimannagar", city: "Viman Nagar", address: "Survey no 204/205 Riddhi Enclave Shop no 4 Shree 2, behind Phoneix Mall, near Ganpati chowk, Viman Nagar, Pune, Maharashtra 411014" },
      { image: "shivajinagar", city: "Shivaji Nagar", address: "Fergusson College Rd, near Vi Store, Shivajinagar, Pune, Maharashtra 411004" },
      { image: "kothrud", city: "Kothrud", address: "Shop No 1, Sr No 121/122, Baskin Robbins, Sheshadri Apartment, Karve Rd, Rambaug Colony, Kothrud, Pune, Maharashtra 411038" }
    ];

    const duplicatedSlides = [...initialSlides, ...initialSlides];
    setSlides(duplicatedSlides);
  }, []);

  const handleSlideChange = (swiper) => {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.style.opacity = '1';
      } 
      else if (index === activeIndex - 1) {
        slide.style.opacity = '0.8';
      } 
      else if (index === activeIndex - 2 || index === activeIndex + 1) {
        slide.style.opacity = '0.6';
      } 
      else if (index === activeIndex - 3 || index === activeIndex + 2) {
        slide.style.opacity = '0.4';
      } 
      else if (index === activeIndex - 4 || index === activeIndex + 3) {
        slide.style.opacity = '0.2';
      }
    });
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSlideChange={handleSlideChange}
        // loopAdditionalSlides={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          dynamicBullets: true,
          el: '.swiper-pagination',
          clickable: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}

        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <StoreCard image={slide.image} city={slide.city} address={slide.address} />
          </SwiperSlide>
        ))}

        <div className="slider-controler flex justify-center gap-16">
          <div className="swiper-button-prev slider-arrow">
            <img src="../../assets/swiper-left-arrow.svg" alt="" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <img src="../../assets/swiper-right-arrow.svg" alt="" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}