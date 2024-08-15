import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import Rounded from '../../common/RoundedButton';

const slider1 = [
    {
        color: "#c1b295",
        src: "sanvicente.jpeg",
        link: "https://www.aserraderosanvicente.com/" // Add link property for redirection
    },
    {
        color: "#d2d2d2",
        src: "lionseg.png",
        link: "https://lionseg.com/"    },
    {
        color: "#6a6a6a",
        src: "hexopanels.png",
        link: "https://hexopanels.bjmakers.store/#section1"    },
        {
            color: "#c1b295",
            src: "powell.jpg",
            link: "https://www.aserraderosanvicente.com/"    }
];

const slider2 = [
    {
        color: "#30302d",
        src: "maven.jpg",
        link: "/https://www.aserraderosanvicente.com/"    },
    {
        color: "#e5e0e1",
        src: "sanvicente2.jpeg",
        link: "https://www.aserraderosanvicente.com/"    },
    
        {
            color: "#abd9f3",
            src: "yecyoc.jpeg",
            link: "https://yecyoc.com/"    },
    {
        color: "#e1dad6",
        src: "aberturas.png",
        link: "https://www.aserraderosanvicente.com/"    }
];

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <section className={styles.container}>
      
        <div ref={container} className={styles.slidingImages}>
            {/* <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <Link legacyBehavior key={index} href={project.link}>
                        <div className={styles.project} style={{ backgroundColor: project.color }}>
                            <div className={styles.imageContainer}>
                                <Image fill={true} alt={"image"} src={`/images/${project.src}`} />
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <Link legacyBehavior key={index} href={project.link}>
                        <div className={styles.project} style={{ backgroundColor: project.color }}>
                            <div className={styles.imageContainer}>
                                <Image fill={true} alt={"image"} src={`/images/${project.src}`} />
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div> */}
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    </section>
    );
}
