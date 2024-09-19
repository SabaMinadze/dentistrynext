import React from 'react';
import styles from './DentalCard.module.css';
import Image from 'next/image';
import kbili from '../../public/assets/noimage.png';

// Define the type for the nivti prop
interface Nivti {
  name: string;
  profession: string;
}

// Define the props type for the DentalCard component
interface DentalCardProps {
  nivti: Nivti;
}

const DentalCard: React.FC<DentalCardProps> = ({ nivti }) => {
  return (
    <div className={styles.boX}>
      <div className={styles.dentalCard}>
        <Image src={kbili} alt="errors" width={289} height={200} className={styles.cardImg} />
        <h1 className={styles.h1}>{nivti.name}</h1>
        <h2 className={styles.h2}>{nivti.profession}</h2>
      </div>
    </div>
  );
};

export default DentalCard;


