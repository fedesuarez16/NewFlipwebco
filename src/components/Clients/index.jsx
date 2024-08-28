import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './style.module.scss';

// Define tus propios logos (reemplaza las rutas con las de tus propios logos)
const clientLogos = [
  '/images/yecyoc.png',
  '/images/lionseglogogris.png',
  '/images/aserraderogris.png',
  '/images/tecxio.png',
  '/images/delsur.png',
  '/images/landsBroker.png',
  '/images/sinai.png',
  '/images/bj.png',
  // Agrega más logos según sea necesario
];
  
const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Hacer que el carrusel se desplace automáticamente
    autoplaySpeed: 400, // Velocidad de desplazamiento automático en milisegundos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5, // Mostrar cinco logos a la vez en dispositivos móviles
        },
      },
    ],
  };

  return (
    <div className={styles.clientCarousel}>
      <h2 className={styles.title}>Marcas que nos eligen</h2>
      <p className={styles.description}>Empresas que eligieron reinventarse con nosotros.</p>
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className={styles.logoContainer}>
            <img src={logo} title={`Client Logo ${index + 1}`} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
