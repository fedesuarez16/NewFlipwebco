'use client';
import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function index({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p> 

                <Link href="/paginas">
            <Image 
                            src="/images/logo.png"
                            alt="background"
                            height={30} // Specify the numeric height value in pixels
                            width={40} // Specify the numeric width value in pixels
                            style={{ display: 'block' }} // Add inline styles as needed
                        />
                        </Link>
            </p>
        </div>
     
    )
}
