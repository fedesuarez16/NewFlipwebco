import React from 'react';
import styles from './style.module.scss';

// Define tus propios logos (reemplaza las rutas con las de tus propios logos)
const clientLogos = [
  '/images/yecyoc.png',
  '/images/lionseglogogris.png',
  '/images/DANNA.png',
  '/images/jmotors.png',
  '/images/praset.png',
  '/images/aserraderogris.png',
  '/images/tecxio.png',
  '/images/landsBroker.png',
  '/images/sinai.png',
  '/images/delsur.png',
  '/images/bj.png',
  '/images/nunez.png',
  '/images/opting.png',

  // Agrega más logos según sea necesario
];
  
const ClientsGrid = () => {
  return (
    <div className={styles.clientsSection}>
      <h2 className={styles.title}>Marcas que nos eligen</h2>
      <p className={styles.description}>Empresas que eligieron reinventarse con nosotros.</p>
      
      <div className={styles.logosGrid}>
        {clientLogos.map((logo, index) => (
          <div key={index} className={styles.logoContainer}>
            <img src={logo} title={`Client Logo ${index + 1}`} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsGrid;
