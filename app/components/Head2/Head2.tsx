import React from 'react';
import styles from './Head2.module.css';
import Image from 'next/image';
import logo from '../public/assets/logo2.jpg'; // Move your logo to `public/assets`

const Head2 = () => {
  return (
    <div className={styles.bigBox}>
      <div className={styles.box}>
        <Image src={logo} alt="error" height={110} width={190} className={styles.logo} />
        <div className={styles.vl}></div>
        <ul className={styles.navList}>
          <li><p>მთავარი</p></li>
          <li><p>სერვისები</p></li>
          <li><p>რეზიდენტურა</p></li>
          <li><p>ჩვენი სტომატოლოგები</p></li>
          <li><p>ჩვენს შესახებ</p></li>
          <li><p>კონტაქტი</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Head2;
