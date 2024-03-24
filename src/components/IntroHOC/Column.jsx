import React from 'react'
import styles from './style.module.scss'

const Column = ({ icon, title, description }) => {
  return (
    <div className={styles.column}>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Column