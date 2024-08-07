import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cus_1 from "./assets/cus_1.webp";
import cus_2 from "./assets/cus_2.webp";
import cus_3 from "./assets/cus_3.webp";
import cus_4 from "./assets/cus_4.webp";
import cus_5 from "./assets/cus_5.webp";
import cus_6 from "./assets/cus_6.webp";
import cus_7 from "./assets/cus_7.webp";
import cus_8 from "./assets/cus_8.webp";
import cus_9 from "./assets/cus_9.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Cards() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      content: "Slide 1",
      description: "Emily Johnson",
      review:
        "Amazing experience! The itinerary was well-planned, and the accommodations were comfortable. Our guide was knowledgeable and friendly, making the trip even more enjoyable. Highly recommend this company for a stress-free vacation. We can't wait to book our next adventure with them! 🌟🌟🌟🌟🌟",
    },
    {
      content: "Slide 2",
      description: "Michael Smith",
      review:
        "Our family had an incredible time on our trip! The destinations were breathtaking, and the activities were perfect for all ages. The staff was attentive and made sure we had everything we needed. We'll cherish these memories forever. Thank you for a fantastic experience!",
    },
    {
      content: "Slide 3",
      description: "Olivia Brown",
      review:
        "This was one of the best trips I've ever taken. Everything was organized to perfection, and the attention to detail was impressive. Our guide was fantastic, sharing insights and stories that added so much to the experience. I highly recommend this travel company! 😊✈️",
    },
    {
      content: "Slide 4",
      description: "James Davis",
      review:
        "We had a wonderful time exploring new places with this travel company. The service was exceptional, from the booking process to the end of our trip. The tours were well-curated, and we felt safe and taken care of the entire time. We'll definitely travel with them again.",
    },
    {
      content: "Slide 5",
      description: "Sophia Wilson",
      review:
        "I can't say enough good things about our trip. The destinations were stunning, and the excursions were so much fun. The company took care of every detail, allowing us to relax and enjoy our vacation. Thank you for an unforgettable experience. Five stars! ⭐⭐⭐⭐⭐",
    },
    {
      content: "Slide 6",
      description: "Benjamin Garcia",
      review:
        "Our tour was a fantastic adventure! The guides were knowledgeable and friendly, and the itinerary was perfect. We got to see so many beautiful places and learn about the local culture. The accommodations were comfortable and the food was delicious. Highly recommend! 🌍❤️",
    },
    {
      content: "Slide 7",
      description: "Ava Martinez",
      review:
        "What an amazing journey! The entire trip was perfectly planned, and we felt well taken care of from start to finish. The team was professional and attentive, ensuring we had a memorable experience. We look forward to traveling with this company again in the future.",
    },
    {
      content: "Slide 8",
      description: "William Anderson",
      review:
        "Our experience with this travel company was outstanding. The tours were engaging, the guides were excellent, and the service was top-notch. We had a fantastic time and made memories that will last a lifetime. We highly recommend this company for your next adventure! 🏖️🗺️",
    },
    {
      content: "Slide 9",
      description: "Mia Taylor",
      review:
        "This was our first time booking with this travel company, and it certainly won't be the last. Everything was seamless, and the level of care and attention we received was exceptional. We had an amazing time exploring new destinations and can't wait to plan our next trip. Thank you!",
    },
  ];
  return (
    <>
      <div className="w-full scale-[1] h-[40rem] bg-newCream  px-10 lg:px-20 py-5 lg:py-10 ">
        <div className="h-max lg:w-[50%] w-full lg:ml-[7rem]  ">
          <div className="text-dream  font-semibold text-newOrange md:text-[3rem] md:mt-[4rem] lg:text-sp-size lg:mb-[10rem] mb-[2rem] border-b-2 border-newOrange flex">
            Our Precious Customers
          </div>
          <div className="md:flex ">
            <div className="md:w-[40%] lg:w-[100%]">
              <p className="text-nunito font-medium  text-cus-size text-black md:text-[2rem]">
                {slides[currentSlide].description}
              </p>
              <p className="text-roboto text-[.6rem] lg:text-[1rem] font-medium mt-[1rem] md:text-[1rem] md:w-fit  lg:w-[80%] w-full">
                {slides[currentSlide].review}
              </p>
              <button className="text-newOrange text-roboto text-[.7rem] font-medium border-2 lg:py-2 lg:px-3 py-[0.8px] px-1 border-newOrange lg:mt-[2rem] mt-[1rem] hover:bg-newOrange hover:text-white">
                Contact Now
              </button>
            </div>
          </div>
          <div className="lg:sticky -translate-y-[23rem] md:-translate-y-[42rem] lg:-translate-y-[23rem] md:translate-x-[25rem] lg:translate-x-[43rem] md:scale-[1] lg:scale-[1] scale-[0.7] lg:mt-[0] mt-[23rem] right-1 relative md:w-[40%]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              spaceBetween={50}
              modules={[EffectCards]}
              className="mySwiper mb-[4rem]  mr-[13%]"
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}>
              <SwiperSlide>
                <img src={cus_7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={cus_9} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
