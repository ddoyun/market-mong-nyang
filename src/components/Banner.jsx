import React from 'react';
import style from './Banner.module.scss';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/scss"; //basic
import "swiper/scss/pagination";
// import "swiper/scss/navigation";


export default function Banner() {
  return (
    <div className={style.banner}>
      <Swiper
      modules = {[Pagination, Autoplay]}
      pagination={{ clickable : true }}
      loop={true} // 루프 슬라이드
      autoplay={{ delay: 4000 }} // 자동 슬라이드
      spaceBetween={0} // 슬라이드간의 간격
      slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
        "--swiper-navigation-color": "#43007c",
        "--swiper-pagination-color": "#43007c",
      }}
    >
    <SwiperSlide className={style.slide}>
      <a href="/products/yZC7r2wzAuFxtDtWSmI3">
      <img src="/images/main-banner-01.jpg" alt="" className={style.image}/>
      </a>
      </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="/products/0W89Uu9F5PIrvyPGKHQG">
      <img src="/images/main-banner-02.jpg" alt="" className={style.image}/>
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="products/DNrJxxfgQWCcnRE7BKBJ">
      <img src="/images/main-banner-03.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="/products/9vTncKT8yKKsTlc9kkNN">
      <img src="/images/main-banner-04.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    <SwiperSlide className={style.slide}>
      <a href="/products/3cO9tjuAdcjWA1lKfb94">
      <img src="/images/main-banner-05.jpg" alt="" className={style.image} />
      </a>
    </SwiperSlide>
    </Swiper>
    </div>
  );
}