import { Autoplay, Pagination, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
import { BusinessCard } from "../businessCard";
import { folioMock } from "../mock/mock"
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
            speed={10000}
            spaceBetween={"50px"}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
                1000: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 3,
                },
            }}
        >
            {folioMock.map((portFolio) => (
                <SwiperSlide className={styles.businessCard} key={portFolio.userID}>
                    <a href={`/portFolio/${portFolio.userID}`}>
                        <BusinessCard params={portFolio}/>
                    </a>
                </SwiperSlide>
                ))}
        </Swiper>
    );
}