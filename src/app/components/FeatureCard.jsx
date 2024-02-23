import Image from 'next/image'
import React from 'react'
import styles from '@/styles/FeatureCard.module.css'

const FeatureCard = () => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.imgDiv}>
                    <Image src={'/gym1.jpg'} height={150} width={150} alt='gym-1' className={styles.img} />
                </div>
                <div className={styles.textDiv}>
                    <h3>Diverse Workout Equipment</h3>
                    <p>We provide a wide range of workout equipment such as cardio machines, weightlifting equipment and resistance training machines.</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard