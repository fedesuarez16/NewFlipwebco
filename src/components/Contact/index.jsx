import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
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
          await axios.post('/api/submit-form', formData); // Make a POST request to the API route
          alert('Form submitted successfully!');
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            number: '',
            company: '',
            query: ''
          });
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Error submitting form. Please try again later.');
        }
      };

      
    const handleWhatsappClick = () => {
        window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
    };

    return (
        <section className={inter.className}>
            <motion.div style={{ y }} ref={container} className={styles.contact}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <div className={styles.titleContent}>
                            <span>
                                <div className={styles.imageContainer}>
                                    <Image
                                        alt={"image"}
                                        src={`/images/logo.png`}
                                        width={60}
                                        height={50}
                                    />
                                </div>
                                <h2>Trabajemos Juntos <br /> Nos contactaremos con vos</h2>
                            </span>
                            <div className={styles.form}>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
                                    <input type="text" name="number" placeholder="Numero" value={formData.number} onChange={handleChange} />
                                    <input type="text" name="company" placeholder="Empresa" value={formData.company} onChange={handleChange} />
                                    <textarea name="query" placeholder="Tu consulta" value={formData.query} onChange={handleChange}></textarea>
                                    <Rounded type="submit">Enviar</Rounded>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <Rounded>
                            <p>hello@flipwebco.com</p>
                        </Rounded>
                        <Rounded onClick={handleWhatsappClick} >
                            <p>+54 9 11 3337 0937</p>
                        </Rounded>
                        <motion.div style={{ x }} >
                            <Rounded backgroundColor={"#30302d"}  onClick={handleWhatsappClick}>
                                <p>
                                    <FaWhatsapp size={30} color="white" />
                                </p>
                            </Rounded>
                        </motion.div>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <span>
                                <h3>Version</h3>
                                <p>2024 © All rights reserved</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h3>socials</h3>
                            </span>
                            <Magnetic>
                                <p>Instagram</p>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
