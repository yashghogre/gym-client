'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/TrainerCard.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrainerCard = (props) => {

    // const [fd, setFd] = useState(props.side === 'left' ? 'row': 'row-reverse');

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const fd = props.side === 'left' ? 'row' : 'row-reverse'
    const br = props.side === 'left' ? '45% 0 0 45%' : '0 45% 45% 0'
    const pdr = props.side === 'left' ? '5vw' : '0'
    const pdl = props.side === 'left' ? '0' : '5vw'
    const lg = props.side === 'left' ? 'linear-gradient(to right, #3559E0, #9cb1ffb3)' : 'linear-gradient(to left, #3559E0, #9cb1ffb3)'
    const an = props.side === 'left' ? 'fade-left' : 'fade-right'

    return (
        <div className={styles.mainDiv} style={{ flexDirection: fd, borderRadius: br, paddingRight: pdr, paddingLeft: pdl, backgroundImage: lg }} data-aos= {an}>
            <div className={styles.imgDiv}>
                <Image src={props.img} height={500} width={200} alt='gym-trainer' className={styles.img} />
            </div>
            <div>
                <h3 className={styles.name}>{props.name}</h3>
                <ul className={styles.list}>
                    <li>Certified Fitness Trainer</li>
                    <li>Certification in Sports Nutrition</li>
                    <li>Certification in First Aid Training</li>
                </ul>
            </div>
        </div>
    )
}

export default TrainerCard