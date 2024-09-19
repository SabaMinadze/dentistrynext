import React from 'react'
import styles from './Cards.module.css'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className={styles.bigBox}>
      <h1 className={styles.text}>სერვისები</h1>
      <div className={styles.cardsBox}>
        <Card />
        <Card />
        <Card />
      </div>
      <br />
      <div className={styles.cardsBox}>
        <Card />
        <Card />
        <Card />
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Cards
