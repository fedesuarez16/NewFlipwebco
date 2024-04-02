import React from 'react'
import IntroPageHOC from '@/components/IntroPageHOC'
import { FaMobileAlt, FaCogs, FaEye, FaToolbox } from 'react-icons/fa';
import Image from 'next/image';
import styles from './style.module.scss';

    const pageData = {
        title: <>Aplicaciones web <br /> y móviles  </>,
        description: <>"Un producto digital que impulse el crecimiento de tu negocio más allá de los límites."</>,
        columns: [
            {
                icon: <FaMobileAlt size={30} color="#292828" />,
                title: "Mejora la Experiencia del Cliente",
                description: "Una aplicación empresarial brinda comodidad y accesibilidad las 24 horas del día, permitiendo a los clientes acceder fácilmente a productos, servicios y soporte, lo que aumenta la satisfacción y fidelidad del cliente."
            },
            {
                icon: <FaCogs size={30} color="#292828" />,
                title: "Optimización de Procesos Internos",
                description: "Automatiza tareas repetitivas, mejora la eficiencia operativa y facilita la colaboración entre equipos al integrar sistemas y proporcionar herramientas de gestión centralizadas."
            },
            {
                icon: <FaEye size={30} color="#292828" />,
                title: "Mayor Visibilidad y Alcance",
                description: "Una app empresarial aumenta la visibilidad de la marca al estar disponible en las tiendas de aplicaciones, lo que amplía el alcance del negocio y atrae a nuevos clientes a través de estrategias de marketing digital."
            },
            {
                icon: <FaToolbox size={30} color="#292828" />,
                title: "Recopilación de Datos y Análisis",
                description: "Permite la recopilación de datos detallados sobre el comportamiento del usuario y las interacciones con la aplicación, lo que proporciona información valiosa para mejorar productos, servicios y estrategias comerciales mediante análisis y toma de decisiones basadas en datos."
            }
        ]

    }

    
    // EN CASO DE QUERER AGREGAR UN COMPONENTE EXTRA, SE CREA EL COMPONENTE EN ESTA FUNCION
    const Component = () => {  
        return (
            <>

                 <div className={styles.imageContainer}>
                    {/* Use Next.js Image component to import the image */}
                    <Image src="/images/vector.png" alt="Description of the image" width={500} height={400} />
                </div>

                <section>
                    <div className={styles.text}>
                        <p>
                        En la era digital actual, la implementación de aplicaciones web y móviles se ha convertido en un componente esencial para potenciar la efectividad, eficiencia y la experiencia del usuario en el ámbito empresarial. Estas soluciones tecnológicas ofrecen una amplia gama de beneficios que se traducen directamente en un aumento significativo de la productividad y competitividad de las empresas.
                        </p>
                    </div>
                </section>
            </>
        )
    }

// SI HAY UN COMPONENTE HIJO, SE LLAMA A LA FUNCION CON LOS 2 PARAMETROS
export default IntroPageHOC(Component, pageData);

// SI NO HAY COMPONENTE HIJO, EL PRIMER PARAMETRO SE DEFINE COMO NULL
// export default IntroPageHOC(null, pageData)