import React from 'react';
import styles from './style.module.scss'; // Ajusta la importación según tu estructura de archivos

export default function index  () {
  return (
    <section>
    <div className={styles.wrapper}>
      <div className={styles.scrollableColumn}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo dicta corporis totam suscipit atque et, accusamus nam dolore libero officiis inventore. Reiciendis amet sunt rerum quod, ab fugit facilis?</p>
      </div>
      <div className={styles.fixedColumn}>
        <p>lorem</p>
      </div>
    </div>
    </section>
  );
};

