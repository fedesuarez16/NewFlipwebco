import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';


export default function logo () {
  return (

 <div  className={styles.header}>
    <div className={styles.logo}>
        <p className={styles.copyright}>
        <Image 
            src="/images/logo.png"
            alt=""
            height={80} // Specify the numeric height value in pixels
            width={100} // Specify the numeric width value in pixels
            style={{ display: 'block' }} // Add inline styles as needed
        />  

        </p>
            
    </div>
    </div>

  )
}
