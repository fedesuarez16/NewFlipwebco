import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../src/components/Header/logo';
import { useRef, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';
import { FaMobile, FaCog, FaSearch, FaWrench } from 'react-icons/fa'; // Importa los iconos que necesites
import Rounded from '../src/common/RoundedButton'


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
              <div className={styles.line}></div>
               
              </p>
          </div>
          
        </div>
      </div>


      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <div className={styles.column}>
          <FaMobile size={30} color="#2e2e2e" />
          <h3>Desarrollo Responsivo</h3>
          <p>Creamos páginas web que se adaptan fluidamente a cualquier dispositivo, brindando una experiencia óptima. Garantizamos accesibilidad y atractivo visual en computadoras, tabletas y teléfonos móviles.</p>
        </div>
        <div className={styles.column}>
          <FaCog size={30} color="#2e2e2e" />
          <h3>Diseño atractivo e intuitivo</h3>
          <p>Un diseño visualmente atractivo que refleje la identidad de la marca y atraiga a los usuarios y Una estructura de navegación lógica y fácil de usar para mejorar la experiencia del usuario.</p>
        </div>
        <div className={styles.column}>
          <FaSearch size={30} color="#2e2e2e" />
          <h3>Optimización para Motores de Búsqueda (SEO)</h3>
          <p>NPotenciamos la visibilidad online de tu página web. Implementamos estrategias que mejoran su posicionamiento en motores de búsqueda, aumentando la relevancia y atrayendo audiencias específicas.</p>
        </div>
        <div className={styles.column}>
          <FaWrench size={30} color="#2e2e2e" />
          <h3>Mantenimiento y Soporte Continuo</h3>
          <p>Nuestro compromiso no termina con el lanzamiento de tu página web...</p>
        </div>
      </div>
      
      {/* Texto centrado debajo de las dos columnas */}
      <div className={styles.centeredText}>
      <div className={styles.line}></div>
        <p>Transforma tu presencia digital con nuestras páginas web excepcionales y a medida. En [Tu Empresa], creamos experiencias online impactantes que cautivan a tus usuarios.</p>
   
      </div>
      



    </section>

  );
}
