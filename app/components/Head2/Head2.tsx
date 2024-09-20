import React from 'react';
import styles from './Head2.module.css';
import Image from 'next/image';
import logo from '../../public/assets/logo2.jpg'; // Move your logo to `public/assets`
import Link from 'next/link';

const Head2 = () => {
  return (
    <div className={styles.bigBox}>
      <div className={styles.box}>
        <Link href="/"><Image src={logo} alt="error" height={110} width={190} className={styles.logo} /></Link>
        <div className={styles.vl}><h4 className={styles.txt}>სტომატოლოგიური სასწავლო ცენტრი დენტისტრი</h4></div>
        <ul className={styles.navList}>
          <Link href="/"><li><p className={styles.p}>მთავარი</p></li></Link>
          <Link href="/servicesandprices"><li><p className={styles.p}>სერვისები და ფასები</p></li></Link>
          <li><p className={styles.p}>რეზიდენტურა</p></li>
          <Link href="/dentists"><li><p className={styles.p}>ჩვენი გუნდი</p></li></Link>
          <li><p className={styles.p}>ჩვენს შესახებ</p></li>
          <li><p className={styles.p}>კონტაქტი</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Head2;
