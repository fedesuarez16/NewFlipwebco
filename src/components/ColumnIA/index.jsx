import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { MdPhoneAndroid, MdSettings, MdAccessTime, MdPerson } from 'react-icons/md'; // Import the Material Design icons
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
                    icon={<MdPhoneAndroid size={30} color="#ffe747" />}
                    title="Mejora atención al cliente"
                    description="Los chatbots ofrecen respuestas rápidas y precisas a consultas comunes, reduciendo tiempos de espera y mejorando la satisfacción del cliente al brindar una atención inmediata y efectiva."
                />
                <Column
                    icon={<MdSettings size={30} color="#ffe747" />}
                    title="Automatización de tareas"
                    description="Permiten automatizar procesos repetitivos como la recopilación de información o la programación de citas, liberando recursos humanos para enfocarse en tareas de mayor valor estratégico."
                />
                <Column
                    icon={<MdAccessTime size={30} color="#ffe747" />}
                    title="Disponibilidad 24/7"
                    description="Al estar siempre activos, los chatbots pueden atender consultas en cualquier momento del día, incluso fuera del horario laboral, lo que garantiza una atención continua y mejora la experiencia del cliente."
                />
                <Column
                    icon={<MdPerson size={30} color="#ffe747" />}
                    title="Personalización"
                    description="Gracias a la inteligencia artificial, los chatbots pueden analizar datos del usuario y adaptar sus respuestas y recomendaciones según las necesidades individuales, creando interacciones más relevantes y significativas para cada usuario."
                />
            </div>

            <div className={styles.roundedButton} onClick={handleWhatsappClick}>
                <Rounded>Tenes una idea?</Rounded>
            </div>

            {/* Banner Image */}
            <div className={styles.banner}>
                <Image src="/images/bannerIA.png" alt="Banner" width={1200} height={400} />
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
