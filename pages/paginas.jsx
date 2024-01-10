import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../src/components/Header/logo';
import { useRef, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';
import { FaMobile, FaCog, FaSearch, FaWrench } from 'react-icons/fa'; // Importa los iconos que necesites

const inter = Inter({ subsets: ['latin'] });

export default function Paginas() {
  const phrase = "Impulsando el crecimiento de negocios & marcas a través del desarrollo de productos digitales excepcionales.";
  const isInView = useInView(phrase);

  return (
    <section className={inter.className}>
      <Logo />
      <div className={styles.main}>
        <Image
          className={styles.img}
          src="/images/bg-paginas.jpg"
          fill={true}
          alt=""
        />
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <p>Paginas Web -</p>
            <p>Paginas Web -</p>
          </div>
        </div>
      </div>

      <div className={styles.mainn}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/mac lionseg.png"
            width={500}
            height={340}
            alt=""
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.body}>
            <p>
              {phrase.split(" ").map((word, index) => (
                <span key={index} className={styles.mask}>
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>


      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <div className={styles.column}>
          <FaMobile size={40} color="#333" />
          <h3>Desarrollo Responsivo</h3>
          <p>Nos aseguramos de que tu página web sea accesible desde cualquier dispositivo...</p>
        </div>
        <div className={styles.column}>
          <FaCog size={40} color="#333" />
          <h3>Funcionalidades Avanzadas</h3>
          <p>Implementamos funcionalidades avanzadas según tus necesidades...</p>
        </div>
        <div className={styles.column}>
          <FaSearch size={40} color="#333" />
          <h3>Optimización para Motores de Búsqueda (SEO)</h3>
          <p>Nos aseguramos de que tu página sea fácilmente encontrada en los motores de búsqueda...</p>
        </div>
        <div className={styles.column}>
          <FaWrench size={40} color="#333" />
          <h3>Mantenimiento y Soporte Continuo</h3>
          <p>Nuestro compromiso no termina con el lanzamiento de tu página web...</p>
        </div>
      </div>
      {/* Texto centrado debajo de las dos columnas */}
      <div className={styles.centeredText}>
        <p>Transforma tu presencia digital con nuestras páginas web excepcionales y a medida. En [Tu Empresa], creamos experiencias online impactantes que cautivan a tus usuarios.</p>
      </div>
    </section>
  );
}
