import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { MdPhoneAndroid, MdSettings, MdAccessTime, MdPerson, MdTimeline, MdTrendingUp, MdFavorite,MdSecurity } from 'react-icons/md'; // Import the Material Design icons
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
                    icon={<MdPhoneAndroid size={30} color="#6B6A6A" />}
                    title="Mejora atención al cliente"
                    description="Los chatbots ofrecen respuestas rápidas y precisas a consultas comunes, reduciendo tiempos de espera y mejorando la satisfacción del cliente al brindar una atención inmediata y efectiva."
                />
                <Column
                    icon={<MdSettings size={30} color="#6B6A6A" />}
                    title="Automatización de tareas"
                    description="Permiten automatizar procesos repetitivos como la recopilación de información o la programación de citas, liberando recursos humanos para enfocarse en tareas de mayor valor estratégico."
                />
                <Column
                    icon={<MdAccessTime size={30} color="#6B6A6A" />}
                    title="Disponibilidad 24/7"
                    description="Al estar siempre activos, los chatbots pueden atender consultas en cualquier momento del día, incluso fuera del horario laboral, lo que garantiza una atención continua y mejora la experiencia del cliente."
                />
                <Column
                    icon={<MdPerson size={30} color="#6B6A6A" />}
                    title="Personalización"
                    description="Gracias a la inteligencia artificial, los chatbots pueden analizar datos del usuario y adaptar sus respuestas y recomendaciones según las necesidades individuales, creando interacciones más relevantes y significativas para cada usuario."
                />
            </div>

            <div className={styles.roundedButton} onClick={handleWhatsappClick}>
                <Rounded>Tenes una idea?</Rounded>
            </div>

            <div className={styles.fourColumns}>
                <Column
                    icon={<MdTimeline size={30} color="#6B6A6A" />}
                    title="Optimización de la cadena de suministro"
                    description="La inteligencia artificial en la gestión de la cadena de suministro permite pronosticar la demanda, optimizar inventarios y agilizar la logística, lo que reduce costos operativos y mejora la eficiencia en la entrega de productos."
                />
                <Column
                    icon={<MdTrendingUp size={30} color="#6B6A6A" />}
                    title="Mejora de la toma de decisiones"
                    description="Mediante el análisis de datos en tiempo real y la generación de insights predictivos, la inteligencia artificial ayuda a los líderes empresariales a tomar decisiones más informadas y estratégicas, lo que contribuye a la mejora del rendimiento y la competitividad de la empresa."
                />
                <Column
                    icon={<MdFavorite size={30} color="#6B6A6A" />}
                    title="Personalización de la experiencia del cliente"
                    description="La inteligencia artificial permite crear experiencias personalizadas para los clientes, desde recomendaciones de productos hasta contenido y ofertas adaptadas a sus preferencias y comportamientos de compra, lo que aumenta la fidelización y el valor del cliente."
                />
                <Column
                    icon={<MdPerson size={30} color="#6B6A6A" />}
                    title="Mejora de la seguridad cibernética"
                    description="La inteligencia artificial puede detectar y prevenir ciberataques de manera proactiva mediante el análisis continuo de patrones de comportamiento y la identificación de anomalías en la red, lo que protege los activos digitales de la empresa y garantiza la integridad de los datos sensibles."
                />
            </div>

           

            {/* Banner Image */}
            <div className={styles.banner}>
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
