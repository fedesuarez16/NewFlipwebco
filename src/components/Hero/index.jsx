import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Inter } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation'; 
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import LogoBlanco from "../../../public/images/logosoloblanco.png"

const inter = Inter({ subsets: ['latin'] });

const texts = [
  { title: 'Innovación Tecnológica', description: 'Desarrollamos soluciones que aprovechan las últimas tecnologías para transformar tu negocio.' },
  { title: 'Soluciones a Medida', description: 'Creamos software personalizado para ajustarse a las necesidades específicas de tu empresa.' },
  { title: 'Resultados Garantizados', description: 'Nos aseguramos de que nuestras soluciones ofrezcan resultados efectivos y medibles.' }
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Iniciar desvanecimiento
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFading(false); // Resetear la animación
      }, 500); // Duración de la animación de desvanecimiento
    }, 3500); // Cambiar cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={inter.className}>
      <div className={styles.hero}>
      <div className={styles.text}>
        <p> Reinventa la experiencia de tus 
          <TypeAnimation
            sequence={[
              ' usuarios',
              1000,
            ]}
            speed={60}
            wrapper='b'
            repeat={Infinity}
          />
        </p>
      </div>


        {/* Nueva sección con un recuadro que cambia */}
        <div className={styles.boxContainer}>
          <div className={styles.line}></div> {/* Línea que conecta los recuadros */}
          
          <div className={`${styles.box} `}>
            <h3>{texts[currentTextIndex].title}</h3>
            <p>{texts[currentTextIndex].description}</p>
          </div>

          <div className={styles.boton}>
            <a href='#contact'>
              <p>
                <Image
                  src={LogoBlanco}
                  alt="background"
                  height={70}
                  width={70}
                  style={{ display: 'block' }}
                />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
