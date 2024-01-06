import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#FFFF00",
        src: "sanvicente.jpeg"
    },
    {
        color: "#30302d",
        src: "lionseg.png"
    },
    {
        color: "#e3e3e3",
        src: "hexopanels.png"
    },
    {
        color: "#21242b",
        src: "yecyoc.jpeg"
    }
]

const slider2 = [
    {
        color: "#30302d",
        src: "maven.jpg"
    },
    {
        color: "#e5e0e1",
        src: "sanvicente2.jpeg"
    },
    {
        color: "#FFFF00",
        src: "powell.jpg"
    },
    {
        color: "#e1dad6",
        src: "aberturas.png"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (

        <section className={styles.container}>
          <h2 className={styles.title}>Algunos de nuestros trabajos   <br />
                <span className={styles.arrowIcon}>↓</span>
         </h2> {/* Added title */}

        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>

        </section>
    )
}
