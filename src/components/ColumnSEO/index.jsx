import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { useInView } from 'react';
import { FaMobile, FaCog, FaSearch, FaWrench, FaChartBar, FaShieldAlt, FaRobot, FaTools } from 'react-icons/fa'; // Importa los iconos que necesites
import Rounded from '../../common/RoundedButton';

const inter = Inter({ subsets: ['latin'] });

export default function AppsColumn() {

   
        const handleWhatsappClick = () => {
          window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
        };
  return (
    <section className={inter.className}>

          {/* Banner Image */}
          <div className={styles.banner}>
          <Image src="/images/bannerSEO.png" alt="Banner" width={1200} height={400} />
        </div> 

      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <Column
          icon={<FaMobile size={30} color="#ffe747" />}
          title="Desarrollo Responsivo"
          description="Creamos páginas web que se adaptan fluidamente a cualquier dispositivo, brindando una experiencia óptima. Garantizamos accesibilidad y atractivo visual en computadoras, tabletas y teléfonos móviles."
        />
        <Column
          icon={<FaCog size={30} color="#ffe747" />}
          title="Diseño atractivo e intuitivo"
          description="Un diseño visualmente atractivo que refleje la identidad de la marca y atraiga a los usuarios y Una estructura de navegación lógica y fácil de usar para mejorar la experiencia del usuario."
        />
        <Column
          icon={<FaSearch size={30} color="#ffe747" />}
          title="Optimización para Motores de Búsqueda (SEO)"
          description="Potenciamos la visibilidad online de tu página web. Implementamos estrategias que mejoran su posicionamiento en motores de búsqueda, aumentando la relevancia y atrayendo audiencias específicas."
        />
        <Column
          icon={<FaWrench size={30} color="#ffe747" />}
          title="Mantenimiento y Soporte Continuo"
          description="Nuestro compromiso no termina con el lanzamiento de tu página web..."
        />
      </div>

      <div className={styles.roundedButton} onClick={handleWhatsappClick}>
        <Rounded>Tenes una idea?</Rounded>
      </div>

      
    
    </section>
  );
}

// Column Component
const Column = ({ icon, title, description }) => (
  <div className={styles.column}>
    {icon}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
