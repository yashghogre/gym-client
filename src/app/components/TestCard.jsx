import Image from 'next/image'
import React from 'react'
import styles from '@/styles/TestCard.module.css'

const TestCard = () => {
    return (
        <div style={{width: '25vw'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className={styles.imgDiv}>
                <Image src={'/cust.jpg'} height={150} width={150} alt='customer_image' className={styles.img} />
            </div>
            <div className={styles.textDiv}>
                <p>
                    Fantastic gym! Clean, friendly staff, and a great community vibe. Diverse classes, modern equipment, and flexible schedules make it a top choice for a positive fitness experience. Highly recommend!
                </p>
                <h3 style={{textAlign: 'end', fontSize: '2.3vh'}}>~ Mr. Moe Lester</h3>
            </div>
        </div>
    )
}

export default TestCard