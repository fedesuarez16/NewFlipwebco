// Hero.js

import styles from './style.module.scss';
import { Inter } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation'; 
import { useInView } from 'react-intersection-observer';


const inter = Inter({ subsets: ['latin'] });


export default function Hero ()  {
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
  return (

 <section className={inter.className}>
    <div className={styles.hero}>
      <div className={styles.text}>
        <p  ref={inViewRef} > 
            {inView && (
        <TypeAnimation 
          sequence={[
            'Listo para acelerar tu viaje hacia la reinvencion digital?', 
            1000,
          ]}
          speed={60}
          wrapper='h3'
          repeat={Infinity}
          className=''
        />
      )}
      </p>
      </div>
    </div>
    </section>
  );
};

