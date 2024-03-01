import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const [menuDisplay, setMenuDisplay] = useState('none')

    const menuClick = () => {
        
    }

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
                <Link className={styles.pLink} href={'/#testimonials'}>
                    <p className={styles.mDP}>Testimonials</p>
                </Link>
                <Link className={styles.pLink} href={'/#location'}>
                    <p className={styles.mDP}>Contact Us!</p>
                </Link>
            </div>
            <div className={styles.btnDiv}>
                <button className={styles.btn}>Join Now!</button>
            </div>
            <div className={styles.menuDiv} onClick={menuClick}>
                <IoMdMenu size={50} color='#3559E0' />
            </div>
            <div className={styles.menuOptDiv}>
                <ul>
                    <li><Link href={'/#features'}>Features</Link></li>
                    <li><Link href={'/pricing'}>Pricing</Link></li>
                    <li><Link href={'/#testimonials'}>Testimonials</Link></li>
                    <li><Link href={'/#location'}>Contact Us!</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar