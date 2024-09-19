import React from 'react';
import styles from './Head2.module.css';
import Image from 'next/image';
import logo from '../../public/assets/logo2.jpg'; // Move your logo to `public/assets`

const Head2 = () => {
  return (
    <div className={styles.bigBox}>
      <div className={styles.box}>
        <Image src={logo} alt="error" height={110} width={190} className={styles.logo} />
        <div className={styles.vl}></div>
        <ul className={styles.navList}>
          <li><p className={styles.p}>მთავარი</p></li>
          <li><p className={styles.p}>სერვისები</p></li>
          <li><p className={styles.p}>რეზიდენტურა</p></li>
          <li><p className={styles.p}>ჩვენი სტომატოლოგები</p></li>
          <li><p className={styles.p}>ჩვენს შესახებ</p></li>
          <li><p className={styles.p}>კონტაქტი</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Head2;
