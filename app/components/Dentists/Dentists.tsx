import React from 'react';
import DentalCard from '../DentalCard/DentalCard';
import data from "../../data.json"
import styles from './Dentists.module.css';


const Dentists = () => {
  return (
    <div className={styles.bigBox}>
      <h2 className={styles.txt}>ჩვენი სტომატოლოგები</h2>
      <div className={styles.card}>
        {data.map((item) => (
          <DentalCard key={item.id} nivti={item} className={styles.cards} />
        ))}
      </div>
    </div>
  );
};

export default Dentists;
