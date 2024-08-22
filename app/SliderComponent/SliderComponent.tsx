"use client";
import React from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderComponent = () => {
  const slideData = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "./images/Illustration.svg",
      imageAlt: "hero-image-1",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-gray-100 py-12">
              <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-2/3 w-full mb-12 lg:mb-0 flex flex-col justify-center">
                  <div className="mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                      {slide.title} <br />
                      <span className="text-green-500">{slide.subtitle}</span>
                    </h1>
                  </div>
                  <div className="mb-8 text-gray-700">{slide.description}</div>
                  <div>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-md transition">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/3 w-full flex justify-center">
                  <img
                    className="w-full max-w-sm"
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderComponent;
