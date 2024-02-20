import React from 'react'
import styles from '@/styles/Pricing.module.css'
import PricingCard from '../components/PricingCard'

const page = () => {
    return (
        <div className={`${styles.mainDiv} ${styles.waveDiv} ${styles.wave}`}>
            <div className={styles.cardsDiv}>
                <PricingCard name='Monthly' fkprice='1000' price='700' />
                <PricingCard name='Quarterly' fkprice='3000' price='2000' mostBuy = 'true' />
                <PricingCard name='Yearly' fkprice='10000' price='6500' />
            </div>
        </div>
    )
}

export default page