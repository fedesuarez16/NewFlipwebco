import styles from './style.module.scss';
import { Inter } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation'; 
import { useInView } from 'react-intersection-observer';
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';


const inter = Inter({ subsets: ['latin'] });

export default function Hero() {
  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={inter.className}>
      <div className={styles.hero} ref={inViewRef}>
        <div className={styles.text}>
          <p> 3 enfoques para tu transformacion  
            {inView && (
              <TypeAnimation
                sequence={[
                  ' digital',
                  1000,
                ]}
                speed={60}
                wrapper='b'
                repeat={Infinity}
              /> 
            )}
          </p>
        </div>

        {/* Nueva sección con tres recuadros conectados */}
        <div className={styles.boxContainer}>
          <div className={styles.line}></div> {/* Línea que conecta los recuadros */}
          
          <div className={styles.box}>
            <h3>Innovación Tecnológica</h3>
            <p>Desarrollamos soluciones que aprovechan las últimas tecnologías para transformar tu negocio.</p>
          </div>

          <div className={styles.box}>
            <h3>Soluciones a Medida</h3>
            <p>Creamos aplicaciones personalizadas que responden a las necesidades específicas de tu empresa.</p>
          </div>

          <div className={styles.box}>
            <h3>Resultados Garantizados</h3>
            <p>Mejora la eficiencia y rentabilidad con nuestras herramientas impulsadas por IA.</p>
          </div>
          <div className={styles.boton} >
          <a href='#contact' >
                        <p>
                            <Image
                                src="/images/logosoloblanco.png"
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
