import Image from 'next/image'
import React from 'react'
import styles from '@/styles/TestCard.module.css'

const TestCard = (props) => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.imgDiv}>
                <Image src={props.img} height={150} width={150} alt='customer_image' className={styles.img} />
            </div>
            <div className={styles.textDiv}>
                <p>
                    {props.text}
                </p>
                <h3 className={styles.name}>{props.name}</h3>
            </div>
        </div>
    )
}

export default TestCard