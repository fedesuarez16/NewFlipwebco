// Import the required modules
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
  };

  return (
    <section className={inter.className}>
      <div className={styles.introText}>
        <p>"Optimizamos tu marca o negocio para alcanzar los mejores rankings en buscadores y aumentar la visibilidad de tu negocio."</p>
      </div>

      <div className={styles.roundedButton} onClick={handleWhatsappClick}>
        <Rounded>Listo para comenzar?</Rounded>
      </div>


     
    </section>
  );
}