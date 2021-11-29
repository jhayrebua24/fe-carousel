import { Swiper, SwiperSlide } from "swiper/react";
import { Hotels } from "./dataset";
import { IData } from "./interface";
import SingleSlide from "./SingleSlide";

function Slides(): JSX.Element {
  return (
    <div className="w-full max-w-7xl">
      <Swiper
        spaceBetween={20}
        speed={500}
        wrapperTag="div"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 800,
        }}
        loop
        pagination
        navigation
      >
        {Hotels.map((hotel: IData) => (
          <SwiperSlide>
            <SingleSlide data={hotel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slides;
