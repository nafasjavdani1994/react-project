import React from 'react';

import styles from './Logos.module.css';
import apple from '../images/png-apple-logo-9718.png';
import samsung from '../images/samsung-logo-png-1294.png';
import xiaomi from '../images/xiaomi-33317.png';

export default function Logos() {
  return (
    <div className={styles.container}>
        <h3>Who Support Us?</h3>
        <div>
            <img src={apple} alt='apple-logo'/>
            <img src={samsung} alt='samsung-logo'/>
            <img src={xiaomi} alt='xiaomi-logo'/>
        </div>
    </div>
  )
}
