import styles from './style.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Info = () => {
  return (
    <section id='beneficios' className={`${styles.info} ${inter.className}`}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>Beneficios</h3>
          <ul>
            <li>
              <strong>Mayor visibilidad en buscadores</strong>
              <p>Mejora tu posición en Google y otros buscadores.</p>
            </li>
            <li>
              <strong>Integración del Botón de Whatsapp</strong>
              <p>Un botón para iniciar la conversación por WhatsApp.</p>
            </li>
            <li>
              <strong>Aumento en la credibilidad de tu marca</strong>
              <p>Presenta una imagen profesional y confiable.</p>
            </li>
            <li>
              <strong>Incremento en las oportunidades de negocio</strong>
              <p>Genera más leads y oportunidades de venta.</p>
            </li>
            <li>
              <strong>Mejora en la comunicación con clientes</strong>
              <p>Facilita la interacción y el soporte al cliente.</p>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Incluye</h3>
          <ul>
            <li>
              <strong>Diseño personalizado</strong>
              <p>Un diseño único que refleja tu marca.</p>
            </li>
            <li>
              <strong>Desarrollo responsivo</strong>
              <p>Optimizado para dispositivos móviles y tablets.</p>
            </li>
            <li>
              <strong>Optimización SEO</strong>
              <p>Posiciona mejor tu web en buscadores.</p>
            </li>
            <li>
              <strong>Soporte técnico</strong>
              <p>Asistencia continua para cualquier problema.</p>
            </li>
            <li>
              <strong>Integración con redes sociales</strong>
              <p>Conecta tu web con tus perfiles sociales.</p>
            </li>
            <li>
              <strong>Hosting y dominio</strong>
              <p>Servicio de alojamiento y registro de dominio.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
