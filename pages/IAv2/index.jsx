import React from 'react'
import IntroPageHOC from '@/components/IntroPageHOC'
import { MdPhoneAndroid, MdSettings, MdAccessTime, MdPerson } from 'react-icons/md';

    const pageData = {
        title: <>IA <br /> Inteligencia Artificial</>,
        description: <>"Potencia tu negocio con chatbots inteligentes que automatizan tareas, mejoran la atención al cliente y aumentan la eficiencia operativa"</>,
        columns: [
            {
                icon: <MdPhoneAndroid size={30} color="#ffe747" />,
                title: "Mejora atención al cliente",
                description: "Los chatbots ofrecen respuestas rápidas y precisas a consultas comunes, reduciendo tiempos de espera y mejorando la satisfacción del cliente al brindar una atención inmediata y efectiva."
            },
            {
                icon: <MdSettings size={30} color="#ffe747" />,
                title: "Automatización de tareas",
                description: "Permiten automatizar procesos repetitivos como la recopilación de información o la programación de citas, liberando recursos humanos para enfocarse en tareas de mayor valor estratégico."
            },
            {
                icon: <MdAccessTime size={30} color="#ffe747" />,
                title: "Disponibilidad 24/7",
                description: "Al estar siempre activos, los chatbots pueden atender consultas en cualquier momento del día, incluso fuera del horario laboral, lo que garantiza una atención continua y mejora la experiencia del cliente."
            },
            {
                icon: <MdPerson size={30} color="#ffe747" />,
                title: "Personalización",
                description: "Gracias a la inteligencia artificial, los chatbots pueden analizar datos del usuario y adaptar sus respuestas y recomendaciones según las necesidades individuales, creando interacciones más relevantes y significativas para cada usuario."
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
export default IntroPageHOC( Component, pageData)