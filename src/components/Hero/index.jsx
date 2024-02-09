// Hero.js

import styles from './style.module.scss';
import { Inter } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation'; 
import { useInView } from 'react-intersection-observer';
import Rounded from '../../common/RoundedButton';
import { motion } from 'framer-motion'; 

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
          <p>
            {inView && (
              <TypeAnimation
                sequence={[
                  'Listo para acelerar tu viaje hacia la reinvencion digital?',
                  1000,
                ]}
                speed={60}
                wrapper='p'
                repeat={Infinity}
              />
            )}
          </p>
        </div>

        <motion.div
          className={styles.roundedButton}
          ref={buttonInViewRef}
          initial={{ opacity: 0, y: 20 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5 }}
        >
          <Rounded onClick={handleWhatsappClick}>Listo para comenzar?</Rounded>
        </motion.div>

      </div>
    </section>
  );
}
