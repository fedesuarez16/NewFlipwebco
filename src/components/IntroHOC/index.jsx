import React from 'react'
import styles from './style.module.scss'
import Logo from '../../common/logo/logo'
import Column from './Column'
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';
import Contact from '../Contact'

const IntroPageHOC = (Children, pageData) => () => {

  const handleWhatsappClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5491133370937', '_blank');
  };

  return (
    <>

    {/* HEADER */}

      <header>
      <div className={styles.main}>
        <Logo/>
          <div className={styles.sliderContainer}>
            <div className={styles.slider}>
              {/* TITULO */}
              <p>{pageData.title}</p>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}

      <section>
        <div className={styles.introText}>
          {/* DESCRIPCION */}
          <p>{pageData.description}</p>
        </div>
      </section>
    
      {/* CHILDREN */}
      
      {Children && <Children/>}

      {/* COLUMNS */}

      <section >
            {/* COLUMNAS */}
            
            <div className={styles.fourColumns} >
              {
                pageData.columns.map((column, index) => (
                  <Column key={index}
                    title={column.title}
                    icon={column.icon}
                    description={column.description}
                  />
                ))
              }
            </div>

            {/* CALL TO ACTION */}

            <div className={styles.roundedButton} onClick={handleWhatsappClick}>
                <Rounded>Tenes una idea?</Rounded>
            </div>

        </section>

            {/* BANNER IMAGE */}

        <section>
            <div className={styles.banner}>
                <Image src="/images/bannerIA.png" alt="Banner" width={1200} height={400} />
            </div>
        </section>


        {/* FOOTER */}

        <Contact/>     


    </>
  )
}

export default IntroPageHOC