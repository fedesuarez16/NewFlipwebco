import styles from './style.module.scss';
import React from 'react';
import Rounded from '../../common/RoundedButton';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section id='inicio' className={`${styles.hero} ${inter.className}`}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>La Página Web <br /> para tu negocio a solo ARS15.900/mes</h1>
          <p className={styles.description}>
            ¡Transforma tu negocio con una página web profesional! Atrae más clientes, mejora tu presencia en línea y destaca frente a la competencia. Diseño personalizado, desarrollo responsivo y optimización SEO incluidos.
          </p>
          <div className={styles.buttonContainer}>
            <Rounded Color={"#fcfcfc"}>
              <p className={styles.button}>Comenzar</p>
            </Rounded>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/hero.jpg" alt="Hero Image" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
