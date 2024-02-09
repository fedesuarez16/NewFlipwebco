import Image from 'next/image';
import styles from './styles.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { useInView } from 'react';
import { FaMobileAlt, FaCogs, FaEye, FaToolbox } from 'react-icons/fa'; // Importa los iconos que necesites
import Rounded from '../../common/RoundedButton';

const inter = Inter({ subsets: ['latin'] });

export default function AppsColumn() {

   
        const handleWhatsappClick = () => {
          window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
        };
  return (
    <section className={inter.className}>

      {/* Cuatro columnas con títulos, texto y iconos */}
       {/* Cuatro columnas con títulos, texto y iconos */}
       <div className={styles.fourColumns}>
        <Column
          icon={<FaMobileAlt size={30} color="#ffe747" />}
          title="Mejora la Experiencia del Cliente"
          description="Una aplicación empresarial brinda comodidad y accesibilidad las 24 horas del día, permitiendo a los clientes acceder fácilmente a productos, servicios y soporte, lo que aumenta la satisfacción y fidelidad del cliente."
        />
        <Column
          icon={<FaCogs size={30} color="#ffe747" />}
          title="Optimización de Procesos Internos"
          description="Automatiza tareas repetitivas, mejora la eficiencia operativa y facilita la colaboración entre equipos al integrar sistemas y proporcionar herramientas de gestión centralizadas."
        />
        <Column
          icon={<FaEye size={30} color="#ffe747" />}
          title="Mayor Visibilidad y Alcance"
          description="Una app empresarial aumenta la visibilidad de la marca al estar disponible en las tiendas de aplicaciones, lo que amplía el alcance del negocio y atrae a nuevos clientes a través de estrategias de marketing digital."
        />
        <Column
          icon={<FaToolbox size={30} color="#ffe747" />}
          title="Recopilación de Datos y Análisis"
          description="Permite la recopilación de datos detallados sobre el comportamiento del usuario y las interacciones con la aplicación, lo que proporciona información valiosa para mejorar productos, servicios y estrategias comerciales mediante análisis y toma de decisiones basadas en datos."
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
