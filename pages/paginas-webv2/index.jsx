import React from 'react'
import IntroPageHOC from '@/components/IntroPageHOC'
import { FaMobile, FaCog, FaSearch, FaWrench, FaChartBar, FaShieldAlt, FaRobot, FaTools} from 'react-icons/fa';
import Image from 'next/image';
import styles from './style.module.scss';

    const pageData = {
        title: <>Paginas Web</>,
        description: <>Transforma tu presencia digital con nuestras páginas web excepcionales y a medida. En Flipwebco, creamos experiencias online impactantes que cautivan a tus usuarios.</>,
        columns: [
            {
                icon: <FaMobile size={30} color="#ffe747" />,
                title: "Desarrollo Responsivo",
                description: "Creamos páginas web que se adaptan fluidamente a cualquier dispositivo, brindando una experiencia óptima. Garantizamos accesibilidad y atractivo visual en computadoras, tabletas y teléfonos móviles."
            },
            {
                icon: <FaCog size={30} color="#ffe747" />,
                title: "Diseño atractivo e intuitivo",
                description: "Un diseño visualmente atractivo que refleje la identidad de la marca y atraiga a los usuarios y Una estructura de navegación lógica y fácil de usar para mejorar la experiencia del usuario."
            },
            {
                icon: <FaSearch size={30} color="#ffe747" />,
                title: "Optimización para Motores de Búsqueda (SEO)",
                description: "Potenciamos la visibilidad online de tu página web. Implementamos estrategias que mejoran su posicionamiento en motores de búsqueda, aumentando la relevancia y atrayendo audiencias específicas."
            },
            {
                icon: <FaWrench size={30} color="#ffe747" />,
                title: "Mantenimiento y Soporte Continuo",
                description: "Nuestro compromiso no termina con el lanzamiento de tu página web..."
            },
            {
                icon: <FaChartBar size={30} color="#ffe747" />,
                title: "Análisis y Estadísticas",
                description: "Integración con herramientas como Google Analytics para realizar un seguimiento del tráfico, comportamiento del usuario y otras métricas relevantes."
            },
            {
                icon: <FaShieldAlt size={30} color="#ffe747" />,
                title: "Seguridad",
                description: "Implementación de medidas de seguridad, como certificados SSL para conexiones seguras, para proteger la información del usuario y garantizar la confidencialidad."
            },
            {
                icon: <FaRobot size={30} color="#ffe747" />,
                title: "Chatbot IA",
                description: "La implementación de un chatbot en la página web que utiliza inteligencia artificial para interactuar con los usuarios. Los chatbots pueden proporcionar respuestas instantáneas a preguntas frecuentes, guiar a los usuarios a través de procesos, y ofrecer asistencia personalizada."
            },
        ]

    }

    
    // EN CASO DE QUERER AGREGAR UN COMPONENTE EXTRA, SE CREA EL COMPONENTE EN ESTA FUNCION
    const Component = () => {  
        return (
            <>

                <div className={styles.imageColumn}>
                    <Image
                    src="/images/macimg.png"
                    width={500}
                    height={340}
                    alt=""
                    />
                </div>
            
            </>
        )
    }

// SI HAY UN COMPONENTE HIJO, SE LLAMA A LA FUNCION CON LOS 2 PARAMETROS
export default IntroPageHOC(Component, pageData);

// SI NO HAY COMPONENTE HIJO, EL PRIMER PARAMETRO SE DEFINE COMO NULL
// export default IntroPageHOC(null, pageData)