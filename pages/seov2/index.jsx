import React from 'react'
import IntroPageHOC from '@/components/IntroPageHOC'
import { FaEye, FaThumbsUp, FaUserFriends, FaMoneyCheck } from 'react-icons/fa';

    const pageData = {
        title: <>SEO <br />Optimización del motor de búsqueda</>,
        description: <>"Optimizamos tu marca o negocio para alcanzar los mejores rankings en buscadores y aumentar la visibilidad de tu negocio."</>,
        columns: [
            {
                icon: <FaEye size={30} color="#ffe747" />,
                title: "Incremento de visibilidad",
                description: "El SEO mejora la clasificación en los motores de búsqueda, aumentando la visibilidad del sitio web y llegando a más clientes potenciales."
            },
            {
                icon: <FaThumbsUp size={30} color="#ffe747" />,
                title: "Mejora de la credibilidad",
                description: "Posicionarse en los primeros resultados de búsqueda aumenta la credibilidad y confianza del sitio web entre los usuarios."
            },
            {
                icon: <FaUserFriends size={30} color="#ffe747" />,
                title: "Aumento del tráfico de calidad",
                description: "El SEO atrae a usuarios que buscan activamente productos o servicios relacionados, generando tráfico más cualificado y aumentando las conversiones."
            },
            {
                icon: <FaMoneyCheck size={30} color="#ffe747" />,
                title: "Rentabilidad a largo plazo",
                description: "El SEO ofrece resultados duraderos y sostenibles, atrayendo tráfico orgánico y generando leads sin costos adicionales significativos."
            }
        ]

    }

    
    // EN CASO DE QUERER AGREGAR UN COMPONENTE EXTRA, SE CREA EL COMPONENTE EN ESTA FUNCION
    const Component = () => {  
        return (
            <>

            </>
        )
    }

// SI HAY UN COMPONENTE HIJO, SE LLAMA A LA FUNCION CON LOS 2 PARAMETROS
// export default IntroPageHOC(Component, pageData);

// SI NO HAY COMPONENTE HIJO, EL PRIMER PARAMETRO SE DEFINE COMO NULL
export default IntroPageHOC(null, pageData)