// Importa los módulos requeridos
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';

// Inicializa la fuente Inter
const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
  };

  return (
    <section className={inter.className}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {/* Utiliza el componente Image de Next.js para importar la imagen */}
          <Image src="/images/vector.png" alt="Descripción de la imagen" width={500} height={400} />
        </div>
        <div className={styles.introText}>
          <p>"Un producto digital que impulse el crecimiento de tu negocio más allá de los límites."</p>
        </div>
      </div>
    </section>
  );
}
