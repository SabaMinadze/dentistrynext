import React from 'react';
import Image from 'next/image';
import styles from './Head3.module.css'; // Import your CSS module
import logo from '../../public/assets/logo2.jpg'; // Import your image

const Head3: React.FC = () => {
  return (
    <div>
      <div className={styles.box}>
        <center><h1 className={styles.h1}>დენტისტრი</h1></center>
        <center><button className={styles.button}>კითხვა გაქვთ? დაგვიკავშირდით</button></center>
        <center><Image src={logo} alt="Logo" className={styles.logo} /></center>
      </div>
    </div>
  );
};

export default Head3;
