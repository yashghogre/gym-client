import React from 'react'
import TestCard from './TestCard'
import styles from '@/styles/TestMain.module.css'

const TestMain = () => {
    return (
        <div className={styles.mainDiv}>
            <TestCard />
            <TestCard />
            <TestCard />
        </div>
    )
}

export default TestMain