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

      <div className={styles.imageContainer}>
        {/* Use Next.js Image component to import the image */}
        <Image src="/images/vector.png" alt="Description of the image" width={500} height={400} />
      </div>
      <div className={styles.introText}>
        <p>"Un producto digital que impulse el crecimiento de tu negocio más allá de los límites."</p>
      </div>

     
    </section>
  );
}