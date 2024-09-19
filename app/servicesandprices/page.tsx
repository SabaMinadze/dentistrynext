import React from 'react'
import styles from './page.module.css'
import Card from '../components/Card/Card'




const page = () => {
  return (
    <div className={styles.bigBox}>
      <h1 className={styles.text}>სერვისები</h1>
      <div className={styles.cardsBox}>
        <Card title="თერაპიული სტომატოლოგია"/>
        <Card title="ბავშვთა სტომატოლოგია"/>
        <Card title="ქირურგიული სტომატოლოგია"/>
      </div>
      <br />
      <div className={styles.cardsBox}>
        <Card title="ორთოპედია"/>
        <Card title="ორთოდონტია"/>
        <Card title="გნათოლოგია"/>
      </div>
      <br />
      <div className={styles.cardsBox}>
        <Card title="იმპლანტოლოგია"/>
        <Card title="ესთეიური სტომატოლოგია"/>
        <Card title="პარადონტოლოგია"/>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default page