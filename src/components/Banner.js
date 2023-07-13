import React from 'react';
import styles from './Banner.module.css'
import bg from '../images/3d-render-snowy-mountain-landscape.jpg'

export default function Banner() {
  return (
    <main className={styles.banner}>
    <div className={styles.bgImg}>
      <img src={bg} alt='bg'/>
    </div>
    <div className={styles.textContainer}>
        <h1>Botostart</h1>
        <p>I'm learning <span>React.js</span></p>
    </div>
    </main>
  )
}
