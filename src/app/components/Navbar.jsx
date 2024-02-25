import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.titleDiv}>
                <Link className={styles.titleLink} href={'/'}>
                    <h2 className={styles.title}>Body Temple</h2>
                </Link>
            </div>
            <div className={styles.midDiv}>
                <Link className={styles.pLink} href={'/#features'}>
                    <p className={styles.mDP}>Features</p>
                </Link>
                <Link className={styles.pLink} href={'/pricing'}>
                    <p className={styles.mDP}>Pricing</p>
                </Link>
                <Link className={styles.pLink} href={'/'}>
                    <p className={styles.mDP}>Testimonials</p>
                </Link>
                <Link className={styles.pLink} href={'/#location'}>
                    <p className={styles.mDP}>Contact Us!</p>
                </Link>
            </div>
            <div className={styles.btnDiv}>
                <button className={styles.btn}>Join Now!</button>
            </div>
        </div>
    )
}

export default Navbar