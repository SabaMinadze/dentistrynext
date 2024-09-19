import React from 'react';
import styles from './DentalCard.module.css';
import Image from 'next/image';
import kbili from "../public/assets/kbili1.jpg"

const DentalCard = ({ nivti }) => {
  return (
    <div className={styles.boX}>
      <div className={styles.dentalCard}>
        <Image src="/../public/assets/kbili1.jpg" alt="errors" width={300} height={300} className={styles.cardImg} />
        <h1 className={styles.h1}>{nivti.name}</h1>
        <h2 className={styles.h2}>{nivti.profession}</h2>
      </div>
    </div>
  );
};

export default DentalCard;

