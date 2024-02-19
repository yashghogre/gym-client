'use client'

import React, { useState } from 'react'
import styles from '@/styles/PricingCard.module.css'
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';

const PricingCard = (props) => {

    // const [bgColor, setBgColor] = useState('white')

    // if(props.mostBuy)
    // {
    //     setBgColor('#3559E0')
    //     co
    // }

    return (
        <div>
            <div className={styles.mainDiv} >
                {props.mostBuy &&
                    <div className={styles.mb}>
                        <Image src={'/underline.jpg'} height={50} width={200} alt='underline' className={styles.ulImg} />
                        <p className={styles.mbText}>Most Bought</p>
                    </div>}
                <div className={styles.titleDiv}>
                    <h3 className={styles.title}>{props.name}</h3>
                </div>
                <div className={styles.priceDiv}>
                    <p><strike className={styles.fkprice}>₹{props.fkprice}</strike><span className={styles.rlprice}> ₹{props.price}</span></p>
                </div>
                <div className={styles.featDiv}>
                    <ul className={styles.featList}>
                        <li><FaCheck color='#3559E0' /> Personal Trainer</li>
                        <li><FaCheck color='#3559E0' /> Diet Plan Included</li>
                        <li><FaCheck color='#3559E0' /> Yoga</li>
                        <li><FaCheck color='#3559E0' /> Steam Bath</li>
                    </ul>
                </div>
                <div className={styles.btnDiv}>
                    <button className={styles.btn}>Join Now!</button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard