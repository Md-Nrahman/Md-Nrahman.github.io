import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <section className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-white min-h-screen">
      <div className=" flex flex-col items-center w-5/6 lg:w-3/6 mx-auto space-y-6 ">
        <h1 className="font-bold text-5xl">
          <span className="text-[#66bb6a]">&#60;</span>Projects
          <span className="text-[#66bb6a]">&#47;&#62;</span>
        </h1>
      </div>

      <div className="w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
