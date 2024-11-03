import { Autoplay, Pagination, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
import { BusinessCard } from "../businesscard/businessCardFront";
import { folioMock, findUserByID} from "../mock/mock"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CardSlider() {
  return (
    <Swiper
      wrapperClass={styles.customSwiperWrapper}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 0 }}
      loop={true}
      speed={15000}
      allowTouchMove={false}
      slidesPerView={1}
      centeredSlides={true}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        1100: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 3,
        }
      }}
    >
      {folioMock.map((portFolio) => (
        <SwiperSlide className={styles.businessCard} key={portFolio.userID}>
          <div>
            <BusinessCard params={{ folio: findUserByID(portFolio.userID ?? "")}} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
