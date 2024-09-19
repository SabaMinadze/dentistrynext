import React from 'react';
import Image from 'next/image';
import styles from './Head3.module.css';
import logo from '../public/assets/logo2.jpg'; // Move the logo to the public/assets folder

const Head3 = () => {
  return (
    <div>
      <div className={styles.box}>
        <center><h1 className={styles.h1}>დენტისტრი</h1></center>
        <center><button className={styles.button}>კითხვა გაქვთ? დაგვიკავშირდით</button></center>
        <center><Image src={logo} alt="error" className={styles.logo} /></center>
      </div>
    </div>
  );
};

export default Head3;
