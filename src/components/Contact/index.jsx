import React, { useState, useRef } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useScroll, motion, useTransform } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope  } from 'react-icons/fa';
import Magnetic from '../../common/Magnetic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        company: '',
        query: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('/api/submitForm', formData);
          alert('Form submitted successfully!');
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again later.');
        }
      };

    const handleWhatsappClick = () => {
        window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
    };

    return (
        <section id='contact' className={inter.className}>
            <motion.div style={{ y }} ref={container} className={styles.contact}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <div className={styles.titleContent}>
                            <h6>Listo para comenzar? <br /> Hablemos!</h6>
                        </div>
                        <div className={styles.form}>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
                                <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
                                <input type="text" name="number" placeholder="Número" value={formData.number} onChange={handleChange} />
                                <input type="text" name="company" placeholder="Empresa" value={formData.company} onChange={handleChange} />
                                <textarea name="query" placeholder="Tu consulta" value={formData.query} onChange={handleChange}></textarea>
                                <button type="submit">
                                    <div>
                                        Enviar
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.nav}>
                       
                        <div onClick={handleWhatsappClick} className={styles.socialButton}>
                            <FaWhatsapp size={30} color="white" />
                        </div>
                        <div className={styles.socialButton}>
                            <a href='https://www.instagram.com/flipwebco/?hl=es-la' target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} color="white" />
                            </a>
                        </div>
                        <div className={styles.socialButton}>
                            <a href='https://www.linkedin.com/company/flipwebco' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} color="white" />
                            </a>
                        </div>
                        <div className={styles.socialButton}>
                            <a href='https://www.linkedin.com/company/flipwebco' target="_blank" rel="noopener noreferrer">
                                <FaEnvelope  size={30} color="white" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <h3>Version</h3>
                            <p>2024 © All rights reserved</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
