// Header.js
import React from 'react';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <h1 className={styles.title}>Tech trends</h1>
    </header>
  );
};

export default Header;
