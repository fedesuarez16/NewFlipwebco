import React from 'react'
import IntroPageHOC from '@/components/IntroHOC/'
import { FaMobile, FaCog, FaSearch, FaWrench } from 'react-icons/fa';
import styles from './style.module.scss';
import Image from 'next/image';

    const pageData = {
        title: <>Sistemas <br /> de Gestión  </>,
        description: <>"Potencia tu empresa con sistemas de gestión que impulsan la eficiencia y el crecimiento sostenible."</>,
        columns: [
            {
                icon: <FaMobile size={30} color="#ffe747" />,
                title: "Gestión Integral",
                description: "Nuestro sistema centraliza y automatiza procesos clave como contabilidad, inventario y recursos humanos, brindando una visión completa y actualizada del estado operativo de la empresa para una toma de decisiones más informada y ágil.."
            },
            {
                icon: <FaCog size={30} color="#ffe747" />,
                title: "Reportes y Análisis Avanzados",
                description: "Con capacidades robustas de generación de informes y análisis de datos, nuestro sistema ofrece insights detallados sobre el desempeño financiero, operativo y estratégico de la empresa, permitiendo identificar áreas de mejora y oportunidades de crecimiento."
            },
            {
                icon: <FaSearch size={30} color="#ffe747" />,
                title: "Gestión de Clientes y Proveedores",
                description: "Facilitamos la administración de relaciones con clientes y proveedores, desde la gestión de contactos y contratos hasta el seguimiento de transacciones y comunicaciones, garantizando una colaboración eficiente y una experiencia satisfactoria para todas las partes involucradas."
            },
            {
                icon: <FaWrench size={30} color="#ffe747" />,
                title: "Seguridad y Cumplimiento",
                description: "Incorporamos medidas de seguridad avanzadas y cumplimos con los estándares regulatorios para proteger los datos confidenciales de la empresa y garantizar el cumplimiento normativo, minimizando riesgos y asegurando la integridad y confidencialidad de la información."
            }
        ]

    }

    
    // EN CASO DE QUERER AGREGAR UN COMPONENTE EXTRA, SE CREA EL COMPONENTE EN ESTA FUNCION
    const Component = () => {  
        return (
            <>
                <div className={styles.imageColumn}>
                    {/* Use Next.js Image component to import the image */}
                    <Image src="/images/vectorsist.png" alt="Description of the image" width={400} height={300} />
                </div>
            </>
        )
    }

// SI HAY UN COMPONENTE HIJO, SE LLAMA A LA FUNCION CON LOS 2 PARAMETROS
export default IntroPageHOC(Component, pageData);

// SI NO HAY COMPONENTE HIJO, EL PRIMER PARAMETRO SE DEFINE COMO NULL
// export default IntroPageHOC(null, pageData)