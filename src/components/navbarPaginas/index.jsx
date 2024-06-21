import styles from './style.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${inter.className}`}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#cards">Precios</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
