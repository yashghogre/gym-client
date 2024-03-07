import React from 'react'
import styles from '@/styles/TestTitle.module.css'

const TestTitle = () => {
  return (
    <div>
        <h3 className={styles.title}>Testimonials</h3>
        <p style={{color: 'white'}} className={styles.text}>See what our customers think about us.</p>
    </div>
  )
}

export default TestTitle