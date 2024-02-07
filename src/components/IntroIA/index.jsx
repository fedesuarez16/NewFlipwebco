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
        <p>"Potencia tu negocio con chatbots inteligentes que automatizan tareas, mejoran la atención al cliente y aumentan la eficiencia operativa"</p>
      </div>

     

     
    </section>
  );
}