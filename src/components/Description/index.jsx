import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';



export default function index() {

    const phrase = "Impulsando crecimiento de negocios & marcas a traves del desarrollo de productos digitales exepcionales. ";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id='about'  ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Somos la convergencia entre la eficiencia, la tecnología y la innovación.</motion.p>
                <a href='#contact'data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p> 
                        <Image 
                            src="/images/logosolo.png"
                            alt="background"
                            height={70} // Specify the numeric height value in pixels
                            width={70} // Specify the numeric width value in pixels
                            style={{ display: 'block' }} // Add inline styles as needed
                        />  
                        </p>
                    </Rounded>
                </a>
            </div>
        </div>
    )
}
