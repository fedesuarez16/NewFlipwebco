import Image from 'next/image';
import { Inter } from 'next/font/google';
import Rounded from '../../common/RoundedButton';
import styles from './style.module.scss';

const inter = Inter({ subsets: ['latin'] });


export default function index ()  {
  return (

    <section className={inter.className}>

    <div className={styles.text}>
      <p>
      En la era digital actual, la implementación de aplicaciones web y móviles se ha convertido en un componente esencial para potenciar la efectividad, eficiencia y la experiencia del usuario en el ámbito empresarial. Estas soluciones tecnológicas ofrecen una amplia gama de beneficios que se traducen directamente en un aumento significativo de la productividad y competitividad de las empresas.
      </p>
    </div>
    </section>
     )
}

