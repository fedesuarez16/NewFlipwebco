import Image from 'next/image';
import styles from './style.module.scss';
import Logo from '../Header/logo';
import { Inter } from 'next/font/google';
import { FaEye, FaThumbsUp, FaUserFriends, FaMoneyCheck } from 'react-icons/fa'; // Importa los iconos adecuados
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
                    icon={<FaEye size={30} color="#ffe747" />}
                    title="Incremento de visibilidad"
                    description="El SEO mejora la clasificación en los motores de búsqueda, aumentando la visibilidad del sitio web y llegando a más clientes potenciales."
                />
                <Column
                    icon={<FaThumbsUp size={30} color="#ffe747" />}
                    title="Mejora de la credibilidad"
                    description="Posicionarse en los primeros resultados de búsqueda aumenta la credibilidad y confianza del sitio web entre los usuarios."
                />
                <Column
                    icon={<FaUserFriends size={30} color="#ffe747" />}
                    title="Aumento del tráfico de calidad"
                    description="El SEO atrae a usuarios que buscan activamente productos o servicios relacionados, generando tráfico más cualificado y aumentando las conversiones."
                />
                <Column
                    icon={<FaMoneyCheck size={30} color="#ffe747" />}
                    title="Rentabilidad a largo plazo"
                    description="El SEO ofrece resultados duraderos y sostenibles, atrayendo tráfico orgánico y generando leads sin costos adicionales significativos."
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
