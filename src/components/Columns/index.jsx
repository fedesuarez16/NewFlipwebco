// ThreeColumnsComponent.js
import React from 'react';
import RoundedButton from '../../common/RoundedButton';
import styles from './style.module.scss';
import Image from 'next/image';


const ThreeColumnsComponent = () => {
    return (
      <section className={styles.threeColumns}>
        <div className={styles.column}>
          <h2>Innovación</h2>
          <p>Implementamos soluciones de IA para mejorar la toma de decisiones empresariales, identificar oportunidades y optimizar procesos, impulsando el crecimiento estratégico y la ventaja competitiva.</p>
         <a href='#contact'  className={styles.button}> 
                        <Image 
                            src="/images/logo.png"
                            alt="background"
                            height={30} // Specify the numeric height value in pixels
                            width={40} // Specify the numeric width value in pixels
                            style={{ display: 'block' }} // Add inline styles as needed
                        />  
                        </a>
        </div>
        <div className={styles.column}>
          <h2>Eficiencia</h2>
          <p>Aprovechamos la tecnología avanzada y las herramientas digitales para aumentar la eficiencia operativa, mejorar la colaboración entre equipos y optimizar el flujo de trabajo, impulsando resultados superiores.</p>
          <a href='#contact'  className={styles.button}> 
                        <Image 
                            src="/images/logo.png"
                            alt="background"
                            height={30} // Specify the numeric height value in pixels
                            width={40} // Specify the numeric width value in pixels
                            style={{ display: 'block' }} // Add inline styles as needed
                        />  
                        </a>
        </div>
     
        <div className={styles.column}>
          <h2>Transformación</h2>
          <p>Desarrollamos productos digitales innovadores y centrados en el usuario, utilizando tecnologías emergentes para crear experiencias únicas que potencien el crecimiento y el éxito empresarial.</p>
          <a href='#contact'  className={styles.button}> 
                        <Image 
                            src="/images/logo.png"
                            alt="background"
                            height={30} // Specify the numeric height value in pixels
                            width={40} // Specify the numeric width value in pixels
                            style={{ display: 'block' }} // Add inline styles as needed
                        />  
                        </a>
        </div>

        
      </section>
    
    );
  };

export default ThreeColumnsComponent;
