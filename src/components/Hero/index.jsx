// Hero.js

import styles from './style.module.scss';
import { Inter } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation'; 
import { useInView } from 'react-intersection-observer';
import Rounded from '../../common/RoundedButton';
import { motion } from 'framer-motion'; 
import Image from 'next/image';
import Clients from '@/components/Clients';



const inter = Inter({ subsets: ['latin'] });

export default function Hero() {
  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [buttonInViewRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={inter.className}>
      <div className={styles.hero} ref={inViewRef}>
        <div className={styles.text}>
          <p> Reinventa la experiencia de tus usuarios, procesos empresariales y estrategias de venta a traves de   
            {inView && (
              <TypeAnimation
                sequence={[
                  ' aplicaciones potenciadas por la IA',
                  1000,
                ]}
                speed={60}
                wrapper='b'
                repeat={Infinity}
              /> 
            )}
          </p>

        </div>

        <button className={styles.roundedButton}>
          Descubri el poder de la IA
        </button>

       

      </div>

    </section>
  );
}
