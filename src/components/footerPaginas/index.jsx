import styles from './style.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  return (
    <section  className={`${styles.footer} ${inter.className}`}>
      <div className={styles.footerContent}>
       
        <a href="https://www.flipwebco.com" className={styles.mainButton}>
          Página Principal
        </a>
      </div>
      <p className={styles.copyright}>© 2024 Flipwebco. Todos los derechos reservados.</p>
    </section>
  );
};

export default Footer;
