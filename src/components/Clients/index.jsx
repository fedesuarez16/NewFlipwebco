import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './style.module.scss';

// Define tus propios logos (reemplaza las rutas con las de tus propios logos)
const clientLogos = [
  '/images/yecyoc.png',
  '/images/lionseglogogris.png',
  '/images/dromex.png',
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
    dots: true,
    infinite: true,
    speed: 1900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Hacer que el carrusel se desplace automáticamente
    autoplaySpeed: 100, // Velocidad de desplazamiento automático en milisegundos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5, // Mostrar tres logos a la vez en dispositivos móviles
        },
      },
    ],
  };

  return (
    <div className={styles.clientCarousel}>
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
