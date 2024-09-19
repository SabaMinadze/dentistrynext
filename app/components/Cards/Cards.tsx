import React from 'react'
import styles from './Cards.module.css'
import Card from '../Card/Card'
import Link from 'next/link'




const Cards = () => {
  return (
    <div className={styles.bigBox}>
      <h1 className={styles.text}>სერვისები</h1>
      <div className={styles.cardsBox}>
        <Link href="/servicesandprices/prices"><Card title="თერაპიული სტომატოლოგია"/></Link>
        <Link href="/servicesandprices/prices2"><Card title="ბავშვთა სტომატოლოგია"/></Link>
        <Link href="/servicesandprices/prices3"><Card title="ქირურგიული სტომატოლოგია"/></Link>
      </div>
      <br />
      <div className={styles.cardsBox}>
        <Link href="/servicesandprices/prices4"><Card title="ორთოპედია"/></Link>
        <Link href="/servicesandprices/prices5"><Card title="ორთოდონტია"/></Link>
        <Link href="/servicesandprices/prices6"><Card title="გნათოლოგია"/></Link>
      </div>
      <br />
      <div className={styles.cardsBox}>
        <Link href="/servicesandprices/prices7"><Card title="იმპლანტოლოგია"/></Link>
        <Link href="/servicesandprices/prices8"><Card title="ესთეიური სტომატოლოგია"/></Link>
        <Link href="/servicesandprices/prices9"><Card title="პარადონტოლოგია"/></Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Cards
