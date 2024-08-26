import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import WorksImage from "../../../public/images/works.png"

export default function Component() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={styles.title}>Mira este caso de exito</h2>
          <p className={styles.subtitle}>
           Descubri lo que podemos hacer por vos.
          </p>
        </div>
        <div className={styles.grid}>
            
            <div  className={styles.card}>
             
              <Image
                src={WorksImage}
                width="400"
                height="300"
                alt="."
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Lionseg - seguridad y monitoreo</h3>
                <p className={styles.cardSubtitle}>Mira como esta empresa de seguridad y monitoreo reinvento su gestion y redujo gastos en comisiones de sus usuarios.</p>
              </div>
                <Link href="/caso-de-exito-empresa-de-seguridad" className={styles.link} >
                <span className="sr-only"></span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
