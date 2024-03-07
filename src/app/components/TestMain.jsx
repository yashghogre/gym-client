'use client'

import TestCard from '@/app/components/TestCard'
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'

const TestMain = () => {
    return (
        <div style={{ display: 'flex', }}>
            <AnimatePresence>
                <div>
                    <TestCard img = '/cust.jpg' text = 'Fantastic gym! Clean, friendly staff, and a great community vibe. Diverse classes, modern equipment, and flexible schedules make it a top choice for a positive fitness experience. Highly recommend!' name = '~ Mr. Moe Lester 1' />
                </div>
                <motion.div 
                initial={{ x: '100vw', scale: 1.5 }} 
                animate={{ x: '0vw', scale: 1 }} 
                exit={{opacity: 0}} 
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 10 }} 
                style={{ position: 'absolute' }}>
                    <TestCard img = '/cust.jpg' text = 'I am thrilled with this gym! The welcoming atmosphere, top-notch equipment, and motivating trainers make every workout enjoyable. The sense of community is fantastic.' name = '~ Mr. Moe Lester 2' />
                </motion.div>
                <motion.div 
                initial={{ x: '100vw', scale: 1.5 }} 
                animate={{ x: '0vw', scale: 1 }} 
                exit={{opacity: 0}} 
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 20 }} 
                style={{ position: 'absolute' }}>
                    <TestCard img = '/cust.jpg' text = 'Fantastic gym! Clean, friendly staff, and a great community vibe. Diverse classes, modern equipment, and flexible schedules make it a top choice for a positive fitness experience. Highly recommend!' name = '~ Mr. Moe Lester 3' />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default TestMain