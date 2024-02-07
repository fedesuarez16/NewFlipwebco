import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { FaWhatsapp } from 'react-icons/fa';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });



export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    const handleWhatsappClick = () => {
        // Use the correct WhatsApp API link here
        window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
    };
    return (

        <section className={inter.className}>

        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/logo.png`}
                            />
                        </div>
                        <h2>Trabajemos Juntos </h2>
                    </span>
                    <h2>Escribinos un mensaje</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                    <Rounded backgroundColor={"#30302d"} className={styles.button} onClick={handleWhatsappClick}>
                    <p>             
                        <FaWhatsapp size={30} color="white"  />
                    </p>

                      </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="12" height="12" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>hello@flipwebco.com</p>
                        </Rounded>
                        <Rounded onClick={handleWhatsappClick} >
                            <p>+54 9 11 3337 0937</p>
                        </Rounded>
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
