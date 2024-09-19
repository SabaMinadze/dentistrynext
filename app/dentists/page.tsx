import React from 'react';
import DentalCard from '../components/DentalCard/DentalCard';
import data from "../data.json"
import styles from './page.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.bigBox}>
        <h2 className={styles.txt}>ჩვენი გუნდი</h2>
        <div className={styles.subBox}>
          <div className={styles.card}>
            {data.map((item) => (
              <DentalCard key={item.id} nivti={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
