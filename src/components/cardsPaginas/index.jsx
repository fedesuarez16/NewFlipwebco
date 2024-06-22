import styles from './style.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const ServiceCards = () => {
  // Función para generar el enlace de WhatsApp
  const generateWhatsAppLink = (message) => {
    const phoneNumber = '+5401133370937'; // Reemplaza con tu número de teléfono
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <section id='cards' className={`${styles.serviceCards} ${inter.className}`}>
      <div className={styles.card}>
        <h2>Web Standard</h2>
        <p className={styles.price}>ARS 15,900/mes</p>
        <ul>
          <li><span role="img" aria-label="check">✔️</span> Diseño personalizado</li>
          <li><span role="img" aria-label="check">✔️</span> Desarrollo responsivo</li>
          <li><span role="img" aria-label="check">✔️</span> Integración botón de Whatsapp</li>
          <li><span role="img" aria-label="check">✔️</span> Optimización SEO básica</li>
          <li><span role="img" aria-label="check">✔️</span> Integración con redes sociales</li>
          <li><span role="img" aria-label="check">✔️</span> Soporte técnico estándar</li>
          <li><span role="img" aria-label="check">✔️</span> Hosting</li>
        </ul>
        <a href={generateWhatsAppLink('Hola, estoy interesado en el servicio Web Standard')} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>Empezar</a>
      </div>
      <div className={styles.card}>
        <h2>Web Premium</h2>
        <ul>
          <li><span role="img" aria-label="check">✔️</span> Diseño premium y personalizado</li>
          <li><span role="img" aria-label="check">✔️</span> Desarrollo avanzado y responsivo</li>
          <li><span role="img" aria-label="check">✔️</span> Optimización SEO completa</li>
          <li><span role="img" aria-label="check">✔️</span> Chatbot potenciado por IA</li>
          <li><span role="img" aria-label="check">✔️</span> Soporte técnico premium</li>
          <li><span role="img" aria-label="check">✔️</span> Integración con redes sociales</li>
          <li><span role="img" aria-label="check">✔️</span> Formulario de contacto</li>
          <li><span role="img" aria-label="check">✔️</span> Servicio de hosting y dominio incluido</li>
          <li><span role="img" aria-label="check">✔️</span> Y más...</li>
        </ul>
        <a href={generateWhatsAppLink('Hola, estoy interesado en el servicio Web Premium')} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>Empezar</a>
      </div>
    </section>
  );
};

export default ServiceCards;
