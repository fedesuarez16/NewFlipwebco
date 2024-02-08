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

      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <Column
          icon={<FaMobile size={30} color="#ffe747" />}
          title="Gestión Integral"
          description="Nuestro sistema centraliza y automatiza procesos clave como contabilidad, inventario y recursos humanos, brindando una visión completa y actualizada del estado operativo de la empresa para una toma de decisiones más informada y ágil."
        />
        <Column
          icon={<FaCog size={30} color="#ffe747" />}
          title="Reportes y Análisis Avanzados"
          description="Con capacidades robustas de generación de informes y análisis de datos, nuestro sistema ofrece insights detallados sobre el desempeño financiero, operativo y estratégico de la empresa, permitiendo identificar áreas de mejora y oportunidades de crecimiento."
        />
        <Column
          icon={<FaSearch size={30} color="#ffe747" />}
          title="Gestión de Clientes y Proveedores"
          description=" Facilitamos la administración de relaciones con clientes y proveedores, desde la gestión de contactos y contratos hasta el seguimiento de transacciones y comunicaciones, garantizando una colaboración eficiente y una experiencia satisfactoria para todas las partes involucradas."
        />
        <Column
          icon={<FaWrench size={30} color="#ffe747" />}
          title="Seguridad y Cumplimiento"
          description="Incorporamos medidas de seguridad avanzadas y cumplimos con los estándares regulatorios para proteger los datos confidenciales de la empresa y garantizar el cumplimiento normativo, minimizando riesgos y asegurando la integridad y confidencialidad de la información."
        />
      </div>

      <div className={styles.roundedButton} onClick={handleWhatsappClick}>
        <Rounded>Listo para empezar?</Rounded>
      </div>

        {/* Banner Image */}
        <div className={styles.banner}>
          <Image src="/images/bannersist.png" alt="Banner" width={1200} height={400} />
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
