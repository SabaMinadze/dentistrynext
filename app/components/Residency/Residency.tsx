import React from 'react';
import Card from '../Card/Card';
import styles from './Residency.module.css';

const Residency = () => {
  return (
    <div className={styles.hugeBox}>
      <div className={styles.box}>
        <center><h2 className={styles.h2}>რეზიდენტურა</h2></center>
      </div>
      <div className={styles.bigBox}>
        <center>
          <div className={styles.cardsBox}>
            <Card />
            <Card />
            <Card />
          </div>
        </center>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

export default Residency;
