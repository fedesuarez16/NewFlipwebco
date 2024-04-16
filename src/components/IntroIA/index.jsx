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
          <Image src="/images/bannerIA.png" alt="Banner" layout="responsive" width={900} height={850} />
        </div>
        <div className={styles.introText}>
          <p>Potencia tu empresa con nuestra IA 360, transformando cada aspecto de tu negocio. Desde la automatización de tareas hasta la optimización de procesos, nuestra tecnología inteligente impulsa la eficiencia operativa </p>
        </div>
      </div>
    </section>
  );
}
