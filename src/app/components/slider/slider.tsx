import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
import { BusinessCard } from "../businessCard";
import {folioMock} from "../mock/mock"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideSettings = {
    0 : {
        slidesPerView: 1.4,
        spaceBetween: 100,
    },
    1024 : {
        slidesPerView: 2,
        spaceBetween: 100,
    },
}

export function CardSlider() {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            //breakpoints={slideSettings}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500 , disableOnInteraction : false}}
            navigation={true}
        >
            <div className={styles.portFolioList}>
            {folioMock.map((portFolio) => (
                <SwiperSlide className={styles.portFolio} key={portFolio.userID}>
                    <a href={`/portFolio/${portFolio.userID}`}><BusinessCard params={portFolio} /></a>
                </SwiperSlide>
            ))}
            </div>
        </Swiper>
    );
}
