import React from 'react'
import styles from './Card.module.css'


interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({title}) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.h2}>{title}</h2>
    </div>
  )
}

export default Card
