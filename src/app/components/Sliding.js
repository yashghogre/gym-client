'use client'

import TestCard from './TestCard'
import styles from '@/styles/Sliding.module.css'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Sliding = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Sliding