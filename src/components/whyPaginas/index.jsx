import styles from './style.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const WhyWeb = () => {
  return (
    <section  className={`${styles.whyWeb} ${inter.className}`}>
      <h2 className={styles.title}>¿Por qué tener una página web?</h2>
      <p className={styles.subtitle}>Es simple. Tu negocio debe estar donde todos están.</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.statText}>Los usuarios gastan en internet en promedio 7 horas cada día.</p>
          <p className={styles.source}>Digital 2022 Global Overview Report</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statText}>En Google se realizan 4 millones de búsquedas en un minuto.</p>
          <p className={styles.source}>Estudio Data never sleeps</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statText}>Se proyecta que en 2040 el 95% de las compras se harán online.</p>
          <p className={styles.source}>NASDAQ</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeb;
