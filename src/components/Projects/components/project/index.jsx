import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ index, title, manageModal, route }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
      style={{ textDecoration: 'none' }} 
    >
      <Link href={route} style={{ textDecoration: 'none' }}  passHref >
        <div style={{ textDecoration: 'none' }} s className={styles.linkContainer}>
          <h2 style={{ textDecoration: 'none' }}   className={styles.title}>{title}</h2>
        </div>
      </Link>
      <p>
        <Image
          src="/images/logo.png"
          alt="background"
          height={30}
          width={40}
          style={{ display: 'block' }}
        />
      </p>
    </div>
  );
}
