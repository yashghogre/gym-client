'use client'

import React, { useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { IoMdMenu } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion"

const Navbar = () => {

    const [menuDisplay, setMenuDisplay] = useState('none')
    const router = useRouter()

    const menuClick = () => {
        setMenuDisplay((prev) => {
            if (prev == 'none') {
                setMenuDisplay('block')
            }
            else {
                setMenuDisplay('none')
            }

            // setMenuDisplay('none')
        })
    }

    const pushPricing = () => {
        router.push('/pricing')
        setMenuDisplay('none')
    }

    const vars = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { delayChildren: 0.5 }
        },
        exit: {
            opacity: 0,
        }
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
            {menuDisplay === 'block' && <motion.div
                variants={vars} initial='initial' animate='animate' exit='exit' className={styles.menuOptDiv} style={{ display: menuDisplay }}>
                <ul className={styles.list}>
                    <li className={styles.listLink} onClick={() => { router.push('/#features'); setMenuDisplay('none'); }}>Features</li>
                    <li className={styles.listLink} onClick={pushPricing}>Pricing</li>
                    <li className={styles.listLink} onClick={() => { router.push('/#testimonials'); setMenuDisplay('none'); }}>Testimonials</li>
                    <li className={styles.listLink} onClick={() => { router.push('/#location'); setMenuDisplay('none'); }}>Contact Us!</li>
                </ul>
            </motion.div>
            }
        </div>
    )
}

export default Navbar