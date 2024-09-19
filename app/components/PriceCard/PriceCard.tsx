import React from 'react';
import styles from './Card2.module.css';

interface CardProps {
  txt: string;
}

const PriceCard: React.FC<CardProps> = ({ txt }) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.txt}>{txt}</h1>
    </div>
  );
};

export default PriceCard;
