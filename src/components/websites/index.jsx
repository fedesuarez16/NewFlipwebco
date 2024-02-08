import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { useInView } from 'react';
import { FaMobile, FaCog, FaSearch, FaWrench,  FaChartBar, FaShieldAlt, FaRobot, FaTools} from 'react-icons/fa'; // Importa los iconos que necesites
import Rounded from '../../common/RoundedButton';


const inter = Inter({ subsets: ['latin'] });  

export default function Paginas() {
  const phrase = "Impulsando el crecimiento de negocios & marcas a través del desarrollo de productos digitales excepcionales.";
  const handleWhatsappClick = () => {
    // Use the correct WhatsApp API link here
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
};
  return (
      <section className={inter.className}>
        <Logo />
        <div className={styles.main}>
        
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              <p>Paginas Web </p>
            </div>
          </div>
        </div>


      <div className={styles.centeredText}>
        <div className={styles.line}></div>
        <p>Transforma tu presencia digital con nuestras páginas web excepcionales y a medida. En Flipwebco, creamos experiencias online impactantes que cautivan a tus usuarios.</p>
      </div>

    
      <div className={styles.imageColumn}>
        <Image
          src="/images/macimg.png"
          width={500}
          height={340}
          alt=""
        />
      </div>

      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <div className={styles.column}>
          <FaMobile size={30} color="#ffe747" />
          <h3>Desarrollo Responsivo</h3>
          <p>Creamos páginas web que se adaptan fluidamente a cualquier dispositivo, brindando una experiencia óptima. Garantizamos accesibilidad y atractivo visual en computadoras, tabletas y teléfonos móviles.</p>
        </div>
        <div className={styles.column}>
          <FaCog size={30} color="#ffe747" />
          <h3>Diseño atractivo e intuitivo</h3>
          <p>Un diseño visualmente atractivo que refleje la identidad de la marca y atraiga a los usuarios y Una estructura de navegación lógica y fácil de usar para mejorar la experiencia del usuario.</p>
        </div>
        <div className={styles.column}>
          <FaSearch size={30} color="#ffe747" />
          <h3>Optimización para Motores de Búsqueda (SEO)</h3>
          <p>NPotenciamos la visibilidad online de tu página web. Implementamos estrategias que mejoran su posicionamiento en motores de búsqueda, aumentando la relevancia y atrayendo audiencias específicas.</p>
        </div>
        <div className={styles.column}>
          <FaWrench size={30} color="#ffe747" />
          <h3>Mantenimiento y Soporte Continuo</h3>
          <p>Nuestro compromiso no termina con el lanzamiento de tu página web...</p>
        </div>
      </div>    
      < div className={styles.roundedButton}  onClick={handleWhatsappClick}>
      <Rounded >
        Hablemos!
      </Rounded>
      </div>
      

      {/* Banner con imagen */}
      <div className={styles.banner}>
        <Image
          src="/images/bannerImg.jpg"
          width={1200}  // Ajusta el ancho de acuerdo a tus necesidades
          height={400}  // Ajusta la altura de acuerdo a tus necesidades
          alt="Banner"
        />
      </div>

      {/* Cuatro columnas con títulos, texto y iconos */}
      <div className={styles.fourColumns}>
        <div className={styles.column}>
          <FaChartBar size={30} color="#ffe747" />
          <h3>Análisis y Estadísticas</h3>
          <p>Integración con herramientas como Google Analytics para realizar un seguimiento del tráfico, comportamiento del usuario y otras métricas relevantes.</p>
        </div>
        <div className={styles.column}>
          <FaShieldAlt size={30} color="#ffe747" />
          <h3>Seguridad</h3>
          <p> Implementación de medidas de seguridad, como certificados SSL para conexiones seguras, para proteger la información del usuario y garantizar la confidencialidad.</p>
        </div>
        <div className={styles.column}>
          <FaRobot size={30} color="#ffe747" />
          <h3>Chatbot IA</h3>
          <p>La implementación de un chatbot en la página web que utiliza inteligencia artificial para interactuar con los usuarios. Los chatbots pueden proporcionar respuestas instantáneas a preguntas frecuentes, guiar a los usuarios a través de procesos, y ofrecer asistencia personalizada</p>
        </div>
        <div className={styles.column}>
          <FaTools size={30} color="#ffe747" />
          <h3>Mantenimiento y Soporte Continuo</h3>
          <p>Nuestro compromiso no termina con el lanzamiento de tu página web...</p>
        </div>
      </div>

    </section>
  );
}
