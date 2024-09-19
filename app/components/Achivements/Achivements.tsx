import Image from 'next/image'; // Import Image from Next.js for optimized images
import styles from './Achivements.module.css'; // Import CSS module

const Achievements = () => {
  return (
    <div>
      <center>
        <div className={styles.bigBox}>
          <h2 className={styles.h2}>ჩვენი მიღწევები</h2>
          <Image src="/assets/kbili1.jpg" alt="Achievement 1" height={300} width={300} className={styles.image} />
          <Image src="/assets/kbili2.jpg" alt="Achievement 2" height={300} width={300} className={styles.image} />
          <Image src="/assets/kbili3.jpg" alt="Achievement 3" height={300} width={300} className={styles.image} />
          <Image src="/assets/kbili4.jpg" alt="Achievement 4" height={300} width={300} className={styles.image} />
        </div>
      </center>
    </div>
  );
};

export default Achievements;
