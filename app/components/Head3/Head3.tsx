import React from 'react';
import Image from 'next/image';
import styles from './Head3.module.css';
import logo from '../../public/assets/logo2.jpg';

const Head3: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>დენტისტრი</h1>
      <button className={styles.button}>კითხვა გაქვთ? დაგვიკავშირდით</button>
      <Image src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default Head3;

